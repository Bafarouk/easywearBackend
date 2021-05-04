import React, { Component, Fragment, useRef } from "react";
import {
  Alert,
  Button,
  Collapse,
  Container,
  Form,
  Spinner,
  ListGroup,
  Tabs,
  Tab,
  Modal,
} from "react-bootstrap";
import * as Icon from "react-feather";
import { FaCamera, FaChevronDown, FaChevronRight } from "react-icons/fa";
import { openDB } from "idb";
import Cropper from "react-cropper";
import * as tf from "@tensorflow/tfjs";
import LoadButton from "../../components/classification/LoadButton";
import { MODEL_CLASSES } from "../classification/classes";
import config from "../../components/classification/config";
import "../../components/classification/Classify.css";
import "cropperjs/dist/cropper.css";
import ColorPalette from "../../components/classification/ColorPalette";
import getImagePalette from "image-palette-core";
import png from "../classification/fix.jpeg";
import { queryApi } from "../../utils/queryApi";
import SuggestedProducts from "../Products/SuggestedProducts";
import { map } from "jquery";
import "../../components/classification/ColorPalette.css";
import { Link } from "react-router-dom";
const MODEL_PATH = "../../../public/model/model.json";

const IMAGE_SIZE = 224;
const CANVAS_SIZE = 333;
const TOPK_PREDICTIONS = 1;

const INDEXEDDB_DB = "tensorflowjs";
const INDEXEDDB_STORE = "model_info_store";
const INDEXEDDB_KEY = "web-model";

/**
 * Class to handle the rendering of the Classify page.
 * @extends React.Component
 */
export default class Classify extends Component {
  constructor(props) {
    super(props);
    console.log(document.getElementById("png"));
    this.webcam = null;
    this.model = null;
    this.modelLastUpdated = null;

    this.state = {
      modelLoaded: false,
      filename: "",
      isModelLoading: false,
      isClassifying: false,
      predictions: [],
      photoSettingsOpen: true,
      modelUpdateAvailable: false,
      showModelUpdateAlert: false,
      showModelUpdateSuccess: false,
      isDownloadingModel: false,
      palette: {},
      result: null,
      suggestedProducts: [],
      buttonSugg: true,
      show: false,
    };
  }

  async componentDidMount() {
    if ("indexedDB" in window) {
      try {
        this.model = await tf.loadLayersModel("indexeddb://" + INDEXEDDB_KEY);

        // Safe to assume tensorflowjs database and related object store exists.
        // Get the date when the model was saved.
        try {
          const db = await openDB(INDEXEDDB_DB, 1);
          const item = await db
            .transaction(INDEXEDDB_STORE)
            .objectStore(INDEXEDDB_STORE)
            .get(INDEXEDDB_KEY);
          const dateSaved = new Date(item.modelArtifactsInfo.dateSaved);
          await this.getModelInfo();
          console.log(this.modelLastUpdated);
          if (
            !this.modelLastUpdated ||
            dateSaved >= new Date(this.modelLastUpdated).getTime()
          ) {
            console.log("Using saved model");
          } else {
            this.setState({
              modelUpdateAvailable: true,
              showModelUpdateAlert: true,
            });
          }
        } catch (error) {
          console.warn(error);
          console.warn("Could not retrieve when model was saved.");
        }
      } catch (error) {
        // If error here, assume that the object store doesn't exist and the model currently isn't
        // saved in IndexedDB.
        console.log("Not found in IndexedDB. Loading and saving...");
        console.log(error);
        this.model = await tf.loadLayersModel(MODEL_PATH);
        await this.model.save("indexeddb://" + INDEXEDDB_KEY);
      }
    }
    // If no IndexedDB, then just download like normal.
    else {
      console.warn("IndexedDB not supported.");
      this.model = await tf.loadLayersModel(MODEL_PATH);
    }

    this.setState({ modelLoaded: true });
    this.initWebcam();

    // Warm up model.
    let prediction = tf.tidy(() =>
      this.model.predict(tf.zeros([1, IMAGE_SIZE, IMAGE_SIZE, 3]))
    );
    prediction.dispose();
  }

  async componentWillUnmount() {
    if (this.webcam) {
      this.webcam.stop();
    }

    // Attempt to dispose of the model.
    try {
      this.model.dispose();
    } catch (e) {
      // Assume model is not loaded or already disposed.
    }
  }

  initWebcam = async () => {
    try {
      this.webcam = await tf.data.webcam(this.refs.webcam, {
        resizeWidth: CANVAS_SIZE,
        resizeHeight: CANVAS_SIZE,
        facingMode: "environment",
      });
    } catch (e) {
      this.refs.noWebcam.style.display = "block";
    }
  };

  startWebcam = async () => {
    if (this.webcam) {
      this.webcam.start();
    }
  };

  stopWebcam = async () => {
    if (this.webcam) {
      this.webcam.stop();
    }
  };

  getModelInfo = async () => {
    await fetch(`${config.API_ENDPOINT}/model_info`, {
      method: "GET",
    })
      .then(async (response) => {
        await response
          .json()
          .then((data) => {
            this.modelLastUpdated = data.last_updated;
          })
          .catch((err) => {
            console.log("Unable to get parse model info.");
          });
      })
      .catch((err) => {
        console.log("Unable to get model info");
      });
  };

  updateModel = async () => {
    // Get the latest model from the server and refresh the one saved in IndexedDB.
    console.log("Updating the model: " + INDEXEDDB_KEY);
    this.setState({ isDownloadingModel: true });
    this.model = await tf.loadLayersModel(MODEL_PATH);
    await this.model.save("indexeddb://" + INDEXEDDB_KEY);
    this.setState({
      isDownloadingModel: false,
      modelUpdateAvailable: false,
      showModelUpdateAlert: false,
      showModelUpdateSuccess: true,
    });
  };

  classifyLocalImage = async () => {
    this.setState({ isClassifying: true, palette: {} });

    const croppedCanvas = this.refs.cropper.cropper.getCroppedCanvas();
    const image = tf.tidy(() => tf.browser.fromPixels(croppedCanvas).toFloat());
    const img = document
      .getElementById("local-image")
      .getElementsByTagName("img")[0];

    // console.log(img);
    this.getColorPalette(img);

    // Process and resize image before passing in to model.
    const imageData = await this.processImage(image);
    const resizedImage = tf.image.resizeBilinear(imageData, [
      IMAGE_SIZE,
      IMAGE_SIZE,
    ]);

    const logits = this.model.predict(resizedImage);
    const probabilities = await logits.data();
    const preds = await this.getTopKClasses(probabilities, TOPK_PREDICTIONS);

    this.setState({
      predictions: preds,
      isClassifying: false,
      photoSettingsOpen: !this.state.photoSettingsOpen,
    });

    // Draw thumbnail to UI.
    const context = this.refs.canvas.getContext("2d");
    const ratioX = CANVAS_SIZE / croppedCanvas.width;
    const ratioY = CANVAS_SIZE / croppedCanvas.height;
    const ratio = Math.min(ratioX, ratioY);
    context.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    context.drawImage(
      croppedCanvas,
      0,
      0,
      croppedCanvas.width * ratio,
      croppedCanvas.height * ratio
    );

    // Dispose of tensors we are finished with.
    image.dispose();
    imageData.dispose();
    resizedImage.dispose();
    logits.dispose();
    this.setState({ buttonSugg: false });
  };

  classifyWebcamImage = async () => {
    this.setState({ isClassifying: true, palette: {} });

    const imageCapture = await this.webcam.capture();

    const resized = tf.image.resizeBilinear(imageCapture, [
      IMAGE_SIZE,
      IMAGE_SIZE,
    ]);
    const imageData = await this.processImage(resized);
    const logits = this.model.predict(imageData);
    const probabilities = await logits.data();
    const preds = await this.getTopKClasses(probabilities, TOPK_PREDICTIONS);

    this.setState({
      predictions: preds,
      isClassifying: false,
      photoSettingsOpen: !this.state.photoSettingsOpen,
    });

    // Draw thumbnail to UI.
    const tensorData = tf.tidy(() => imageCapture.toFloat().div(255));
    await tf.browser.toPixels(tensorData, this.refs.canvas);
    const imagefix = document.getElementById("png");
    this.getColorPalette(imagefix);
    // Dispose of tensors we are finished with.

    resized.dispose();
    imageCapture.dispose();
    imageData.dispose();
    logits.dispose();
    tensorData.dispose();
    this.setState({ buttonSugg: false });
  };

  processImage = async (image) => {
    return tf.tidy(() => image.expandDims(0).toFloat().div(127).sub(1));
  };

  /**
   * Computes the probabilities of the topK classes given logits by computing
   * softmax to get probabilities and then sorting the probabilities.
   * @param logits Tensor representing the logits from MobileNet.
   * @param topK The number of top predictions to show.
   */
  getTopKClasses = async (values, topK) => {
    const valuesAndIndices = [];
    for (let i = 0; i < values.length; i++) {
      valuesAndIndices.push({ value: values[i], index: i });
    }
    valuesAndIndices.sort((a, b) => {
      return b.value - a.value;
    });
    const topkValues = new Float32Array(topK);
    const topkIndices = new Int32Array(topK);
    for (let i = 0; i < topK; i++) {
      topkValues[i] = valuesAndIndices[i].value;
      topkIndices[i] = valuesAndIndices[i].index;
    }

    const topClassesAndProbs = [];
    for (let i = 0; i < topkIndices.length; i++) {
      topClassesAndProbs.push({
        className: MODEL_CLASSES[topkIndices[i]],
        probability: (topkValues[i] * 100).toFixed(2),
      });
    }
    return topClassesAndProbs;
  };

  handlePanelClick = (event) => {
    this.setState({ photoSettingsOpen: !this.state.photoSettingsOpen });
  };

  handleFileChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      this.setState({
        file: URL.createObjectURL(event.target.files[0]),
        filename: event.target.files[0].name,
      });
    }
  };

  handleTabSelect = (activeKey) => {
    switch (activeKey) {
      case "camera":
        this.startWebcam();
        break;
      case "localfile":
        this.setState({ filename: null, file: null });
        this.stopWebcam();
        break;
      default:
    }
  };
  getColorPalette = (img) => {
    // get the palette color and put it in the state
    const palette = getImagePalette(img);
    this.setState({ palette });
    console.log(palette);
  };
  handleClose = async () => {
    this.setState({ show: false });
  };
  tesstfunction = async () => {
    var firstResult = this.state.predictions[0].className.substring(
      0,
      this.state.predictions[0].className.indexOf(",")
    );
    console.log(firstResult);
    if (firstResult === "miniskirt")
      this.setState({ result: "Robe&type2=Jupe" });
    else if (firstResult === "pajama")
      this.setState({ result: "Chemise&type2=Blouse" });
    else if (this.state.predictions[0].className === "velvet")
      this.setState({ result: "Jeans&type2=Jeans" });
    else if (this.state.predictions[0].className === "sombrero")
      this.setState({ result: "Hat&type2=Chapeau" });
    else if (this.state.predictions[0].className === "buckle")
      this.setState({ result: "Ceinture&type2=Belt" });
    else this.setState({ show: true });
    const [res, err] = await queryApi(
      "product/getSimilarProductsByName/test?type=" + this.state.result,
      {},
      "Get"
    );
    this.setState({ suggestedProducts: res });
  };

  render() {
    return (
      <div className="Classify container">
        {!this.state.modelLoaded && (
          <Fragment>
            <Spinner animation="border" role="status">
              <span className="sr-only">Loading...</span>
            </Spinner>{" "}
            <span className="loading-model-text">Loading Model</span>
          </Fragment>
        )}
        <img hidden src={png} alt="Image1" id="png" />

        {this.state.modelLoaded && (
          <Fragment>
            <Button
              onClick={this.handlePanelClick}
              className="classify-panel-header"
              aria-controls="photo-selection-pane"
              aria-expanded={this.state.photoSettingsOpen}
            >
              Take or Select a Photo to Classify
              <span className="panel-arrow">
                {this.state.photoSettingsOpen ? (
                  <FaChevronDown />
                ) : (
                  <FaChevronRight />
                )}
              </span>
            </Button>
            <Collapse in={this.state.photoSettingsOpen}>
              <div id="photo-selection-pane">
                {this.state.modelUpdateAvailable &&
                  this.state.showModelUpdateAlert && (
                    <Container>
                      <Alert
                        variant="info"
                        show={
                          this.state.modelUpdateAvailable &&
                          this.state.showModelUpdateAlert
                        }
                        onClose={() =>
                          this.setState({ showModelUpdateAlert: false })
                        }
                        dismissible
                      >
                        An update for the{" "}
                        <strong>{this.state.modelType}</strong> model is
                        available.
                        <div className="d-flex justify-content-center pt-1">
                          {!this.state.isDownloadingModel && (
                            <Button
                              onClick={this.updateModel}
                              variant="outline-info"
                            >
                              Update
                            </Button>
                          )}
                          {this.state.isDownloadingModel && (
                            <div>
                              <Spinner
                                animation="border"
                                role="status"
                                size="sm"
                              >
                                <span className="sr-only">Downloading...</span>
                              </Spinner>{" "}
                              <strong>Downloading...</strong>
                            </div>
                          )}
                        </div>
                      </Alert>
                    </Container>
                  )}
                {this.state.showModelUpdateSuccess && (
                  <Container>
                    <Alert
                      variant="success"
                      onClose={() =>
                        this.setState({ showModelUpdateSuccess: false })
                      }
                      dismissible
                    >
                      The <strong>{this.state.modelType}</strong> model has been
                      updated!
                    </Alert>
                  </Container>
                )}
                <Tabs
                  defaultActiveKey="camera"
                  id="input-options"
                  onSelect={this.handleTabSelect}
                  className="justify-content-center"
                >
                  <Tab eventKey="camera" title="Take Photo">
                    <div id="no-webcam" ref="noWebcam">
                      <span className="camera-icon">
                        <FaCamera />
                      </span>
                      No camera found. <br />
                      Please use a device with a camera, or upload an image
                      instead.
                    </div>
                    <div className="webcam-box-outer">
                      <div className="webcam-box-inner">
                        <video
                          ref="webcam"
                          autoPlay
                          playsInline
                          muted
                          id="webcam"
                          width="448"
                          height="448"
                        ></video>
                      </div>
                    </div>
                    <div className="button-container">
                      <LoadButton
                        variant="primary"
                        size="lg"
                        onClick={this.classifyWebcamImage}
                        isLoading={this.state.isClassifying}
                        text="Classify"
                        loadingText="Classifying..."
                      />
                    </div>
                  </Tab>
                  <Tab eventKey="localfile" title="Select Local File">
                    <Form.Group controlId="file">
                      <Form.Label>Select Image File</Form.Label>
                      <br />
                      <Form.Label className="imagelabel">
                        {this.state.filename
                          ? this.state.filename
                          : "Browse..."}
                      </Form.Label>
                      <Form.Control
                        onChange={this.handleFileChange}
                        type="file"
                        accept="image/*"
                        className="imagefile"
                      />
                    </Form.Group>
                    {this.state.file && (
                      <Fragment>
                        <div id="local-image">
                          <Cropper
                            ref="cropper"
                            src={this.state.file}
                            style={{ height: 400, width: "100%" }}
                            guides={true}
                            aspectRatio={1 / 1}
                            viewMode={2}
                            autoCrop={true}
                          />
                        </div>
                        <div className="button-container">
                          <LoadButton
                            variant="primary"
                            size="lg"
                            disabled={!this.state.filename}
                            onClick={this.classifyLocalImage}
                            isLoading={this.state.isClassifying}
                            text="Classify"
                            loadingText="Classifying..."
                          />
                        </div>
                      </Fragment>
                    )}
                  </Tab>
                </Tabs>
              </div>
            </Collapse>
            {this.state.predictions.length > 0 && (
              <div className="classification-results">
                <h3>Predictions</h3>
                <canvas ref="canvas" width={CANVAS_SIZE} height={CANVAS_SIZE} />

                <br />
                <ColorPalette palette={this.state.palette} />
                <ListGroup>
                  {this.state.predictions.map((category) => {
                    return (
                      <ListGroup.Item key={category.className}>
                        <strong>this is a {category.className}</strong> with a
                        percentage of :{category.probability}%
                      </ListGroup.Item>
                    );
                  })}
                </ListGroup>
                <div className="imgAndPalette">
                  {this.state.isLoading && <Spinner />}
                </div>
              </div>
            )}{" "}
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-original-title="test"
              data-bs-target="#exampleModal"
              onClick={this.tesstfunction}
              hidden={this.state.buttonSugg}
            >
              Similaire Articles
            </button>
            <br></br>
            <div className="paletteDiv">
              {this.state.suggestedProducts?.map((item) => (
                <SuggestedProducts
                  key={item.id}
                  product={item}
                ></SuggestedProducts>
              ))}
            </div>
            <div style={{ marginLeft: 920 }}>
              {
                <Link to="/">
                  See More <Icon.ChevronDown />
                </Link>
              }
            </div>
          </Fragment>
        )}

        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          animation={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>No Similar articles</Modal.Title>
          </Modal.Header>
          <Modal.Body>Please Try Again !!</Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
