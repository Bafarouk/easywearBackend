import React, { Component } from "react";
import * as productsActions from "../../redux/actions/ProductsActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {
  loadProducts,
  loadAllProducts,
} from "./../../redux/actions/ProductsActions";
import { queryApi } from "../../utils/queryApi";
import jwtDecode from "jwt-decode";
import ProductView from "./productView";
import { Link } from "react-router-dom";

class ProductDetails extends Component {
  //jwtToken = localStorage.getItem("jwt");

  async componentDidMount() {
    /*  if (this.jwtToken) {
      this.setState({ connectedUser: jwtDecode(this.jwtToken) });
    } */
    //    await this.loadRateByUserId();
    await this.loadSimilarProducts();
  }
  constructor(props) {
    super(props);
    const { products, actions } = props;

    actions.loadProducts();

    const prodDetail = props["products"].products.find(
      (p) => p.id === props.match.params.id
    );
    const user = null; /* jwtDecode(this.jwtToken); */
    this.state = {
      prodDetail: prodDetail,
      connectedUser: user,
      similarProducts: [],
      currentRate: {},
      // products: [],
      isLikedDisabled: false,
      isDislikeDisabled: false,
    };
  }

  loadProducts = async () => {
    const [res, err] = await queryApi("product/getAllProducts", {}, "GET");
    return res;
  };

  loadSimilarProducts = async () => {
    const [res, err] = await queryApi(
      "product/getSimilarProducts/" + this.state.prodDetail.id,
      {},
      "GET"
    );
    if (res) this.setState({ similarProducts: res });
  };

  loadRateByUserId = async () => {
    const [res, err] = await queryApi(
      "recommendation/findRate/" +
        this.state.connectedUser._id +
        "/" +
        this.state.prodDetail.id,
      {},
      "GET"
    );
    console.log(res);
    if (res) {
      this.setState({ currentRate: res });
      if (res === {}) {
        this.setState({ isLikedDisabled: false });
        this.setState({ isDislikeDisabled: false });
      }
      if (res.rate_type === "like") {
        this.setState({ isLikedDisabled: true });
        this.setState({ isDislikeDisabled: false });
      }
      if (res.rate_type === "dislike") {
        this.setState({ isDislikeDisabled: true });
        this.setState({ isLikedDisabled: false });
      }
    }
  };
  handleLikeClick = async () => {
    if (this.state.currentRate) {
      await queryApi(
        "recommendation/delete/" +
          this.state.connectedUser._id +
          "/" +
          this.state.prodDetail.id,
        {},
        "DELETE"
      );
    }

    const [res, err] = await queryApi(
      "recommendation/rateItem",
      {
        rate_type: "like",
        user_id: this.state.connectedUser._id,
        product_id: this.state.prodDetail.id,
      },
      "POST"
    );
    if (res) {
      this.setState({ isLikedDisabled: true });
      this.setState({ isDislikeDisabled: false });
    } else {
      alert("Error Reviewing ");
    }
  };

  handleDisLikeClick = async () => {
    if (this.state.currentRate) {
      console.log("exist");

      await queryApi(
        "recommendation/delete/" +
          this.state.connectedUser._id +
          "/" +
          this.state.prodDetail.id,
        {},
        "DELETE"
      );
    }
    const [res, err] = await queryApi(
      "recommendation/rateItem",
      {
        rate_type: "dislike",
        user_id: this.state.connectedUser._id,
        product_id: this.state.prodDetail.id,
      },
      "POST"
    );
    if (res) {
      this.setState({ isLikedDisabled: false });
      this.setState({ isDislikeDisabled: true });
    } else {
      alert("Error Reviewing ");
    }
  };

  handlePayment = async () => {
    const [res, err] = await queryApi(
      "payment/payment",
      {
        price: this.state.prodDetail.productPrice,
      },
      "POST"
    );
    if (res) {
      console.log("success");
      console.log(this.state.prodDetail.productPrice);
      console.log(res.forwardLink);
      window.location = res.forwardLink;
    } else {
      alert("Error Reviewing ");
    }
  };

  render() {
    return (
      <>
        <div className="breadcrumb-section">
          <div className="container">
            <div className="row">
              <div className="col-sm-6">
                <div className="page-title">
                  <h2>product Detail</h2>
                </div>
              </div>
              <div className="col-sm-6">
                <nav aria-label="breadcrumb" className="theme-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      product
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <section classname="section-b-space">
          <div classname="collection-wrapper">
            <div classname="container">
              <div classname="row">
                <div className="col-lg-9 col-sm-12 col-xs-12">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="filter-main-btn mb-2">
                          <span className="filter-btn">
                            <i className="fa fa-filter" aria-hidden="true" />
                            filter
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="product-slick slick-initialized slick-slider">
                          <button
                            className="slick-prev slick-arrow"
                            aria-label="Previous"
                            type="button"
                            style={{}}
                          >
                            Previous
                          </button>
                          <div className="slick-list draggable">
                            <div
                              className="slick-track"
                              style={{ opacity: 1, width: 1532 }}
                            >
                              <div
                                className="slick-slide slick-current slick-active"
                                data-slick-index={0}
                                aria-hidden="false"
                                style={{
                                  width: 383,
                                  position: "relative",
                                  left: 0,
                                  top: 0,
                                  zIndex: 999,
                                  opacity: 1,
                                }}
                              >
                                <div>
                                  <div
                                    style={{
                                      width: "100%",
                                      display: "inline-block",
                                      marginLeft: "30%",
                                    }}
                                  >
                                    <img
                                      src={this.state.prodDetail.image_url}
                                      alt
                                      className="img-fluid blur-up image_zoom_cls-0 lazyloaded"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="slick-slide"
                                data-slick-index={1}
                                aria-hidden="true"
                                tabIndex={-1}
                                style={{
                                  width: 383,
                                  position: "relative",
                                  left: "-383px",
                                  top: 0,
                                  zIndex: 998,
                                  opacity: 0,
                                }}
                              >
                                <div>
                                  <div
                                    style={{
                                      width: "100%",
                                      display: "inline-block",
                                    }}
                                  >
                                    <img
                                      src="../assets/images/pro3/2.jpg"
                                      alt
                                      className="img-fluid blur-up image_zoom_cls-1 lazyloaded"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="slick-slide"
                                data-slick-index={2}
                                aria-hidden="true"
                                tabIndex={-1}
                                style={{
                                  width: 383,
                                  position: "relative",
                                  left: "-766px",
                                  top: 0,
                                  zIndex: 998,
                                  opacity: 0,
                                }}
                              >
                                <div>
                                  <div
                                    style={{
                                      width: "100%",
                                      display: "inline-block",
                                    }}
                                  >
                                    <img
                                      src="../assets/images/pro3/27.jpg"
                                      alt
                                      className="img-fluid blur-up image_zoom_cls-2 lazyloaded"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div
                                className="slick-slide"
                                data-slick-index={3}
                                aria-hidden="true"
                                tabIndex={-1}
                                style={{
                                  width: 383,
                                  position: "relative",
                                  left: "-1149px",
                                  top: 0,
                                  zIndex: 998,
                                  opacity: 0,
                                }}
                              >
                                <div>
                                  <div
                                    style={{
                                      width: "100%",
                                      display: "inline-block",
                                    }}
                                  >
                                    <img
                                      src="../assets/images/pro3/27.jpg"
                                      alt
                                      className="img-fluid blur-up image_zoom_cls-3 lazyloaded"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <button
                            className="slick-next slick-arrow"
                            aria-label="Next"
                            type="button"
                            style={{}}
                          >
                            Next
                          </button>
                        </div>
                      </div>
                      <div className="col-lg-6 rtl-text">
                        <div className="product-right">
                          <h2>{this.state.prodDetail.productName}</h2>

                          <h3>{this.state.prodDetail.productPrice}</h3>

                          <div className="product-description border-product">
                            <h6 className="product-title size-text">
                              select size
                              <span>
                                <a
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#sizemodal"
                                >
                                  size chart
                                </a>
                              </span>
                            </h6>
                            <div
                              className="modal fade"
                              id="sizemodal"
                              tabIndex={-1}
                              role="dialog"
                              aria-labelledby="exampleModalLabel"
                              aria-hidden="true"
                            >
                              <div
                                className="modal-dialog modal-dialog-centered"
                                role="document"
                              >
                                <div className="modal-content">
                                  <div className="modal-header">
                                    <h5
                                      className="modal-title"
                                      id="exampleModalLabel"
                                    >
                                      Sheer Straight Kurta
                                    </h5>
                                    <button
                                      type="button"
                                      className="close"
                                      data-dismiss="modal"
                                      aria-label="Close"
                                    >
                                      <span aria-hidden="true">×</span>
                                    </button>
                                  </div>
                                  <div className="modal-body">
                                    <img
                                      src="../assets/images/size-chart.jpg"
                                      alt
                                      className="img-fluid blur-up lazyload"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="size-box">
                              <ul>
                                <li className="active">
                                  <a href="#">s</a>
                                </li>
                                <li>
                                  <a href="#">m</a>
                                </li>
                                <li>
                                  <a href="#">l</a>
                                </li>
                                <li>
                                  <a href="#">xl</a>
                                </li>
                              </ul>
                            </div>
                          </div>

                          <div className="product-buttons">
                            <button
                              disabled={this.state.isLikedDisabled}
                              data-toggle="modal"
                              data-target="#addtocart"
                              className="btn btn-solid"
                              onClick={this.handleLikeClick}
                            >
                              <i class="fa fa-thumbs-up" aria-hidden="true"></i>
                            </button>
                            <button
                              disabled={this.state.isDislikeDisabled}
                              className="btn btn-solid"
                              onClick={this.handleDisLikeClick}
                            >
                              <i
                                class="fa fa-thumbs-down"
                                aria-hidden="true"
                              ></i>
                            </button>
                          </div>
                          <div className="border-product">
                            <h6 className="product-title">product details</h6>
                            <p>
                              You can Purchase this product from{" "}
                              <a href={this.state.prodDetail.url}>
                                <strong>here</strong>
                              </a>
                            </p>
                          </div>
                          {/* <div className="border-product">
                            <div className="product-icon"></div>
                          </div> */}
                          <div className="border-product">
                            <h6 className="product-title">Payment</h6>
                            <p>
                              This product is available in our stock{" "}
                              <button
                                type="button"
                                className="btn btn-secondary p-2"
                                style={{
                                  marginLeft: "53%",
                                }}
                                onClick={this.handlePayment}
                              >
                                Buy it
                              </button>
                            </p>
                          </div>

                          <div className="border-product">
                            <h6 className="product-title">3D Fitting Room</h6>
                            <p>
                              You can try this product via camera{" "}
                              <Link
                                type="button"
                                className="btn btn-secondary p-2"
                                style={{
                                  marginLeft: "55%",
                                }}
                                to={{
                                  pathname: "/3D",
                                  imagelink: this.state.prodDetail.image_url,
                                }}
                              >
                                Try it
                              </Link>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-b-space pt-0 ratio_asos">
          <div className="container">
            <div className="row">
              <div className="col-12 product-related">
                <h2>similar products to {this.state.prodDetail.productName}</h2>
              </div>
            </div>
            <div className="row search-product">
              {this.state.similarProducts.map((p) => {
                return (
                  <ProductView
                    key={p.id}
                    product={p}
                    priceCompare={this.state.prodDetail.productPrice}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(productsActions, dispatch),
  };
}

function mapStateToProps(state) {
  return {
    products: state.products,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
