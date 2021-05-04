import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as productsActions from "../../redux/actions/ProductsActions";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import SidebarProduct from "./SidebarProduct";
//import "bootstrap/dist/css/bootstrap.css";
import { ReactDOM } from "react-dom";
import ListPagination from "./ListPagination";

class Productcard extends React.Component {
  render() {
    const product = this.props;

    return (
      <div className={this.props.layout}>
        <div className=' product-box'>
          <div className='img-wrapper' style={{ height: "320px" }}>
            <div className='lable-block'></div>
            <div className='front'>
              <img
                className='img-fluid blur-up bg-img lazyloaded'
                src={product.image_url}
              />
              <div className='product-hover'>
                <ul>
                  <li>
                    <Link to={`/3D/${product.image_url}`}>
                      <button className='btn' type='button'></button>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='product-detail'>
            <div className='rating'>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
              <i className='fa fa-star'></i>
            </div>
            <a>
              {" "}
              <h6>
                {product.productName}
                <small>{product.productBrand}</small>
              </h6>
            </a>
            <h4>{product.productPrice} </h4>
            <Link to={"/productDetails/" + product.id}>Details</Link>

            <a type='button' href={product.url} target='_blank'>
              visit website
            </a>
          </div>
        </div>
      </div>
    );
  }
}

class Form extends React.Component {
  handleSubmit = (event) => {
    this.props.onSubmit(event.target.value);
  };

  render() {
    return (
      <form className='form-header'>
        <div className='input-group'>
          <input
            onChange={this.handleSubmit}
            type='text'
            className='form-control'
            aria-label='Amount (to the nearest dollar)'
            placeholder='Search Products......'
          />
        </div>
      </form>
    );
  }
}

class ProductLists extends React.Component {
  state = {
    layout: "col-lg-2",
    brandfilter: [],
    name: "",
  };
  componentDidMount() {
    const { products, actions } = this.props;

    if (products.length === 0) {
      actions.loadProducts(0, -1).catch((error) => {});
    }
  }

  loadSelectedPage = (page) => {
    if (this.props) {
      const { products, actions } = this.props;

      if (products.currentPage !== page) {
        actions.loadProducts(page).catch((error) => {});
      }
    }
  };

  loadbyName = (names) => {
    console.log(names);
    this.setState({ name: names });

    if (this.props) {
      const { actions } = this.props;

      actions
        .loadProductsbybrands(this.state.brandfilter, names)
        .catch((error) => {
          alert("Loading products failed" + error);
        });
    }
  };
  loadbyPrice = (price) => {
    if (this.props) {
      const { actions } = this.props;

      actions
        .loadProductsbybrands(this.state.brandfilter, this.state.name, price)
        .catch((error) => {
          alert("Loading products failed" + error);
        });
    }
  };

  loadbybrandsfilter = (brand) => {
    this.setState({ brandfilter: brand });
    console.log(brand);
    if (this.props) {
      const { actions } = this.props;

      actions.loadProductsbybrands(brand, this.state.name).catch((error) => {
        alert("Loading products failed" + error);
      });
    }
  };

  render() {
    return (
      <>
        <div className='breadcrumb-section'>
          <div className='container'>
            <div className='row'>
              <div className='col-sm-6'>
                <div className='page-title'>
                  <h2>collection</h2>
                </div>
              </div>
              <div className='col-sm-6'>
                <nav aria-label='breadcrumb' className='theme-breadcrumb'>
                  <ol className='breadcrumb'>
                    <li className='breadcrumb-item'>
                      <a href='index.html'>home</a>
                    </li>
                    <li className='breadcrumb-item active' aria-current='page'>
                      collection
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <section
          className='section-b-space ratio_asos'
          style={{ backgroundColor: "white" }}
        >
          <div className='collection-wrapper'>
            <div className='container'>
              <div className='row'>
                <div className='col-sm-3 collection-filter'>
                  <SidebarProduct
                    brandload={this.loadbybrandsfilter}
                    priceload={this.loadbyPrice}
                  />
                </div>
                <div className='collection-content col'>
                  <div className='page-main-content'>
                    <div className='row'>
                      <div className='col-sm-12'>
                        <div className='collection-product-wrapper'>
                          <div className='product-top-filter'>
                            <div className='row'>
                              <div className='col-xl-12'>
                                <div className='filter-main-btn'>
                                  <span className='filter-btn btn btn-theme'>
                                    <i
                                      className='fa fa-filter'
                                      aria-hidden='true'
                                    ></i>{" "}
                                    Filter
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className='row'>
                              <div className='col-12'>
                                <div className='product-filter-content'>
                                  <div className='search-count'>
                                    <h5>
                                      Showing Products 1-24 of{" "}
                                      {this.props.products.totalItems} Result
                                    </h5>
                                  </div>
                                  <div
                                    className='product-page-per-view'
                                    style={{
                                      width: "40%",
                                      padding: "20px",
                                    }}
                                  >
                                    <Form onSubmit={this.loadbyName} />
                                  </div>
                                  <div
                                    className='collection-grid-view'
                                    style={{ opacity: "1" }}
                                  >
                                    <ul>
                                      <li
                                        onClick={() =>
                                          this.setState({ layout: "col-lg-6" })
                                        }
                                      >
                                        <img
                                          src='../assets/images/icon/2.png'
                                          alt=''
                                          className='product-2-layout-view'
                                        />
                                      </li>
                                      <li>
                                        <img
                                          src='../assets/images/icon/3.png'
                                          alt=''
                                          className='product-3-layout-view'
                                          onClick={() =>
                                            this.setState({
                                              layout: "col-lg-4",
                                            })
                                          }
                                        />
                                      </li>
                                      <li>
                                        <img
                                          src='../assets/images/icon/4.png'
                                          alt=''
                                          className='product-4-layout-view'
                                          onClick={() =>
                                            this.setState({
                                              layout: "col-lg-3",
                                            })
                                          }
                                        />
                                      </li>
                                      <li>
                                        <img
                                          src='../assets/images/icon/6.png'
                                          alt=''
                                          className='product-6-layout-view'
                                          onClick={() =>
                                            this.setState({
                                              layout: "col-lg-2",
                                            })
                                          }
                                        />
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className='product-wrapper-grid'
                            style={{ opacity: "1" }}
                          >
                            <div className='row margin-res'>
                              {this.props.products.products ? (
                                this.props.products.products.map((Prods) => (
                                  <Productcard
                                    layout={this.state.layout}
                                    key={Prods.id}
                                    {...Prods}
                                  />
                                ))
                              ) : (
                                <div>Loading...</div>
                              )}
                            </div>
                          </div>
                          <div className='product-pagination'>
                            <div className='theme-paggination-block'>
                              <div className='row'>
                                <div className='col-xl-6 col-md-6 col-sm-12'>
                                  <nav aria-label='Page navigation'>
                                    <ListPagination
                                      articlesCount={
                                        this.props.products.totalItems
                                      }
                                      currentPage={
                                        this.props.products.currentPage
                                      }
                                      onSetPage={this.loadSelectedPage}
                                    />
                                  </nav>
                                </div>
                                <div className='col-xl-6 col-md-6 col-sm-12'>
                                  <div className='product-search-count-bottom'>
                                    <h5>
                                      Showing 1-24 of{" "}
                                      {this.props.products.totalItems} Result
                                    </h5>
                                  </div>
                                </div>
                              </div>
                            </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(ProductLists);
