import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import {
  deleteClaim,
  fetchClaimByType,
  fetchClaims,
  selectClaim,
  selectClaims,
  selectSelectedClaim,
  setErrors,
  unselectClaim,
  updateClaim,
} from "../../redux/slices/claimSlice";
import { formatDate } from "../../helpers/dateConvert";
import * as Icon from "react-feather";
import Modal from "react-bootstrap/Modal";
import * as Yup from "yup";
import { Button, Col, Container, Form, Image, Row } from "react-bootstrap";
import { queryApi } from "../../utils/queryApi";
import { useFormik } from "formik";

const ProductClaims = () => {
  const [claims, err] = useSelector(selectClaims);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [showConfir, setShowConfirm] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const yupObject = Yup.object().shape({
    description: Yup.string().required().min(5).max(255),
  });

  const selectedClaim = useSelector(selectSelectedClaim);
  const FindOneClaimEvent = async (claim) => {
    handleShow();

    dispatch(selectClaim(claim));
  };
  const [claimState, setclaimState] = useState(selectedClaim);
  const formik = useFormik({
    initialValues: {
      state: Number(selectedClaim?.state),

      description: selectedClaim?.description,
    },
    validationSchema: yupObject,
    onSubmit: async (values) => {
      values.state = Number(claimState);
      const [res, err] = await queryApi(
        "claim/UpdateClaim/" + selectedClaim._id,
        values,
        "PUT"
      );
      if (err) {
        setErrors({
          visible: true,
          message: JSON.stringify(err.errors, null, 2),
        });
      } else {
        dispatch(updateClaim(res));
        dispatch(unselectClaim());
        handleClose();
      }
    },
  });
  const openConfirmation = async (claim) => {
    if (window.confirm("are you sure you want to delete?") === true) {
      deleteClaimEvent(claim._id);
    }
  };

  const deleteClaimEvent = async (id) => {
    const [res, err] = await queryApi("claim/delete/" + id, {}, "DELETE");
    if (err) {
      dispatch(setErrors(err));
      console.log(err);
    } else {
      dispatch(deleteClaim(id));
      fetchClaimByType(claims.type);
    }
  };
  //pagination variables
  const [pageNumber, setPageNumber] = useState(0);
  const claimsperPage = 4;
  const pageVisited = pageNumber * claimsperPage;
  const displayedClaims = claims.slice(
    pageVisited,
    pageVisited + claimsperPage
  );
  const pageCount = Math.ceil(claims.length / claimsperPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  const [search, setsearch] = useState(null);

  const searchSpace = async (event) => {
    let keyword = event.target.value;
    setsearch(keyword);
  };
  const items = displayedClaims.filter((data) => {
    if (search == null) return data;
    else if (
      data.type.toLowerCase().includes(search.toLowerCase()) ||
      data.description.toLowerCase().includes(search.toLowerCase())
    ) {
      return data;
    }
  });

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modify Claim..</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={formik.handleSubmit}>
            <Container>
              <Row>
                <Image src={selectedClaim?.image_url} fluid />
              </Row>
            </Container>

            <Form.Group controlId="formGridAddress1">
              <Form.Label>Claim Type :</Form.Label>
              <Form.Control placeholder={selectedClaim?.type} readOnly />
            </Form.Group>

            <Form.Group controlId="formGridAddress2">
              <Form.Label>Claim Date :</Form.Label>
              <Form.Control
                placeholder={formatDate(selectedClaim?.date_claim)}
                readOnly
              />
            </Form.Group>

            <Form.Group controlId="formGriddescription">
              <Form.Label>Description :</Form.Label>
              {(() => {
                if (selectedClaim?.state === 3) {
                  return (
                    <Form.Control
                      placeholder={selectedClaim?.description}
                      readOnly
                    />
                  );
                } else {
                  return (
                    <Form.Control
                      type="text"
                      name="description"
                      id="description"
                      required
                      minLength="5"
                      defaultValue={selectedClaim?.description}
                      onChange={formik.handleChange}
                    />
                  );
                }
              })()}
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>Claim State</Form.Label>{" "}
                {(() => {
                  if (
                    selectedClaim?.state === 1 ||
                    selectedClaim?.state === 2
                  ) {
                    return (
                      <Form.Control
                        as="select"
                        onChange={(e) => setclaimState(e.target.value)}
                        DefaultValue={selectedClaim?.state}
                      >
                        <option>Choose...</option>
                        <option value={selectedClaim?.state}>
                          Keep Processing{" "}
                        </option>
                        <option value="3">Close Claim </option>
                      </Form.Control>
                    );
                  } else {
                    return (
                      <Form.Control placeholder="closed Claim !!" readOnly />
                    );
                  }
                })()}
              </Form.Group>
            </Form.Row>

            <Form.Group id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button
              variant="primary"
              disabled={formik.isSubmitting}
              type="submit"
            >
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <section className="collection section-b-space ratio_square ">
        <ul>
          <li>
            <h3>Your Products Claims ..</h3>
          </li>
          <li>
            {" "}
            <input
              style={{ marginLeft: 300, width: 400, height: 40 }}
              type="text"
              placeholder="Search.."
              onChange={(e) => searchSpace(e)}
              className="form-control"
            />
          </li>
        </ul>
        <br></br>
        <br></br> <br></br>
        <div className="container">
          <div className="row partition-collection">
            {items.map((data, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="collection-block">
                  <div
                    className="bg-size blur-up lazyloaded"
                    style={{
                      backgroundImage: `url(${data?.image_url})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                      display: "block",
                    }}
                  >
                    <img
                      src={data?.image_url}
                      className="img-fluid blur-up lazyload bg-img"
                      style={{ display: "none" }}
                    />
                  </div>
                  <div className="collection-content">
                    <h4>Added In : {formatDate(data?.date_claim)}</h4>
                    {(() => {
                      if (data?.state === 1) {
                        return (
                          <span className="badge badge-primary">
                            Not Treated Yet
                          </span>
                        );
                      } else if (data?.state === 2) {
                        return (
                          <span className="badge badge-warning">
                            Processing
                          </span>
                        );
                      } else {
                        return (
                          <span className="badge badge-success">Treated</span>
                        );
                      }
                    })()}

                    <p>{data?.description}</p>
                    <a
                      onClick={() => FindOneClaimEvent(data)}
                      className="btn btn-outline"
                    >
                      Modify Claim !
                    </a>

                    <br></br>
                    <a onClick={() => openConfirmation(data)} className="btn ">
                      <Icon.XCircle></Icon.XCircle>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"pagination"}
            previousLinkClassName={"pagination__link"}
            nextLinkClassName={"pagination__link"}
            disabledClassName={"pagination__link--disabled"}
            activeClassName={"pagination__link--active"}
          ></ReactPaginate>
        </div>
      </section>
    </>
  );
};

export default ProductClaims;
