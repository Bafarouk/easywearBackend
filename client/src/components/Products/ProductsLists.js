import React, { useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as productsActions from "../../redux/actions/ProductsActions";
import { bindActionCreators } from "redux";
import ListPagination from "./ListPagination";
import { event } from "jquery";
import { Link } from "react-router-dom";

class Productcard extends React.Component {
  render() {
    const product = this.props;
    return (
      <div className='col-xl-3 col-sm-6'>
        <div className='card' style={{ height: "500px" }}>
          <div className='products-admin'>
            <div className='card-body product-box'>
              <div className='img-wrapper'>
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
                          <button className='btn' type='button'>
                            <svg
                              xmlns='http://www.w3.org/2000/svg'
                              width='24'
                              height='24'
                              viewBox='0 0 24 24'
                              fill='none'
                              stroke='currentColor'
                              stroke-width='2'
                              stroke-linecap='round'
                              stroke-linejoin='round'
                              className='editBtn'
                            >
                              <path d='M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7'></path>
                              <path d='M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z'></path>
                            </svg>
                          </button>
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

                <a type='button' href={product.url} target='_blank'>
                  visit website
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const ProductCategory = (props) => {
  var Brands = [];
  const onlyUnique = (value, index, self) => {
    return self.indexOf(value) === index;
  };
  console.log(props.product);
  if (typeof props.product !== "undefined" && props.product.length !== 0)
    Brands = props.product.map((cat) => cat.productBrand).filter(onlyUnique);

  return (
    <>{Brands ? Brands.map((b) => <li>{b}</li>) : <div> Loading...</div>}</>
  );
};

const SidebarProduct = (props) => {
  return (
    <>
      <div className='collection-filter-block'>
        <div className='collection-mobile-back'>
          <span className='filter-back'>
            <i className='fa fa-angle-left' aria-hidden='true'></i> back
          </span>
        </div>
        <div className='collection-collapse-block open'>
          <h3 className='collapse-block-title'>brand</h3>
          <div className='collection-collapse-block-content'>
            <div className='collection-brand-filter'>
              <div className='custom-control custom-checkbox collection-filter-checkbox'>
                <input
                  type='checkbox'
                  className='custom-control-input'
                  id='zara'
                />
                <label className='custom-control-label' for='zara'>
                  zara
                </label>
              </div>
              <div className='custom-control custom-checkbox collection-filter-checkbox'>
                <input
                  type='checkbox'
                  className='custom-control-input'
                  id='vera-moda'
                />
                <label className='custom-control-label' for='vera-moda'>
                  vera-moda
                </label>
              </div>
              <div className='custom-control custom-checkbox collection-filter-checkbox'>
                <input
                  type='checkbox'
                  className='custom-control-input'
                  id='forever-21'
                />
                <label className='custom-control-label' for='forever-21'>
                  forever-21
                </label>
              </div>
              <div className='custom-control custom-checkbox collection-filter-checkbox'>
                <input
                  type='checkbox'
                  className='custom-control-input'
                  id='roadster'
                />
                <label className='custom-control-label' for='roadster'>
                  roadster
                </label>
              </div>
              <div className='custom-control custom-checkbox collection-filter-checkbox'>
                <input
                  type='checkbox'
                  className='custom-control-input'
                  id='only'
                />
                <label className='custom-control-label' for='only'>
                  only
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className='collection-collapse-block'>
          <h3 className='collapse-block-title'>colors</h3>
          <div
            className='collection-collapse-block-content'
            style={{ display: "none" }}
          >
            <div className='color-selector'>
              <ul>
                <li className='color-1 active'></li>
                <li className='color-2'></li>
                <li className='color-3'></li>
                <li className='color-4'></li>
                <li className='color-5'></li>
                <li className='color-6'></li>
                <li className='color-7'></li>
              </ul>
            </div>
          </div>
        </div>

        <div className='collection-collapse-block border-0'>
          <h3 className='collapse-block-title'>size</h3>
          <div
            className='collection-collapse-block-content'
            style={{ display: "none" }}
          >
            <div className='collection-brand-filter'>
              <div className='custom-control custom-checkbox collection-filter-checkbox'>
                <input
                  type='checkbox'
                  className='custom-control-input'
                  id='hundred'
                />
                <label className='custom-control-label' for='hundred'>
                  s
                </label>
              </div>
              <div className='custom-control custom-checkbox collection-filter-checkbox'>
                <input
                  type='checkbox'
                  className='custom-control-input'
                  id='twohundred'
                />
                <label className='custom-control-label' for='twohundred'>
                  m
                </label>
              </div>
              <div className='custom-control custom-checkbox collection-filter-checkbox'>
                <input
                  type='checkbox'
                  className='custom-control-input'
                  id='threehundred'
                />
                <label className='custom-control-label' for='threehundred'>
                  l
                </label>
              </div>
              <div className='custom-control custom-checkbox collection-filter-checkbox'>
                <input
                  type='checkbox'
                  className='custom-control-input'
                  id='fourhundred'
                />
                <label className='custom-control-label' for='fourhundred'>
                  xl
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className='collection-collapse-block border-0'>
          <h3 className='collapse-block-title'>price</h3>
          <div
            className='collection-collapse-block-content'
            style={{ display: "none" }}
          >
            <div className='wrapper mt-3'>
              <div className='range-slider'>
                <span className='irs js-irs-0'>
                  <span className='irs'>
                    <span className='irs-line' tabindex='-1'>
                      <span className='irs-line-left'></span>
                      <span className='irs-line-mid'></span>
                      <span className='irs-line-right'></span>
                    </span>
                    <span className='irs-min' style={{ visibility: "hidden" }}>
                      $0
                    </span>
                    <span className='irs-max' style={{ visibility: "hidden" }}>
                      $1.500
                    </span>
                    <span
                      className='irs-from'
                      style={{ visibility: " visible", left: " 0%" }}
                    >
                      $0
                    </span>
                    <span
                      className='irs-to'
                      style={{ visibility: "visible", left: "83.1395%" }}
                    >
                      $1.500
                    </span>
                    <span
                      className='irs-single'
                      style={{ visibility: "hidden", left: "36.3639%" }}
                    >
                      $0 - $1.500
                    </span>
                  </span>
                  <span className='irs-grid'></span>
                  <span
                    className='irs-bar'
                    style={{ left: "1.55039%", width: "96.8992%" }}
                  ></span>
                  <span
                    className='irs-shadow shadow-from'
                    style={{ display: " none" }}
                  ></span>
                  <span
                    className='irs-shadow shadow-to'
                    style={{ display: " none" }}
                  ></span>
                  <span
                    className='irs-slider from'
                    style={{ left: "0%" }}
                  ></span>
                  <span
                    className='irs-slider to'
                    style={{ left: "96.8992%" }}
                  ></span>
                </span>
                <input
                  type='text'
                  className='js-range-slider irs-hidden-input'
                  value=''
                  readonly=''
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

class Form extends React.Component {
  handleSubmit = (event) => {
    this.props.onSubmit(event.target.value);
  };

  render() {
    return (
      <div className='container'>
        <section className='search-block'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6 offset-lg-3'>
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
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

class ProductLists extends React.Component {
  componentDidMount() {
    const { products, actions } = this.props;

    if (products.length === 0) {
      actions.loadProducts(0, -1).catch((error) => {});
    }
  }

  loadSelectedPage = (page) => {
    if (this.props) {
      const { products, actions } = this.props;

      if (this.props) {
        const { products, actions } = this.props;

        if (products.currentPage !== page) {
          actions.loadProducts(page).catch((error) => {});
        }
      }
    }
  };

  loadbyName = (name) => {
    if (this.props) {
      const { actions } = this.props;

      if (name) {
        actions.loadProductsbyName(name).catch((error) => {
          alert("Loading products failed" + error);
        });
      } else {
        actions.loadProducts(0).catch((error) => {
          alert("Loading products failed" + error);
        });
      }
    }
  };

  render() {
    return (
      <div className='page-wrapper'>
        <div className='page-body-wrapper'>
          <div className='page-body'>
            <div className='container-fluid'>
              <div className='page-header'>
                <div className='row'>
                  <SidebarProduct />
                  <div className='col-lg-6'>
                    <div className='page-header-left'>
                      <h3>
                        Product List<small></small>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ProductCategory product={this.props.products.products} />
            <ListPagination
              articlesCount={this.props.products.totalItems}
              currentPage={this.props.products.currentPage}
              onSetPage={this.loadSelectedPage}
            />
            <Form onSubmit={this.loadbyName} />
            <div style={{ padding: "20px" }} className='container-fluid'>
              <div className='row products-admin ratio_asos'>
                {this.props.products.products ? (
                  this.props.products.products.map((Prods) => (
                    <Productcard key={Prods.id} {...Prods} />
                  ))
                ) : (
                  <div>Loading...</div>
                )}
              </div>
            </div>
          </div>

          <ListPagination
            articlesCount={this.props.products.totalItems}
            currentPage={this.props.products.currentPage}
            onSetPage={this.loadSelectedPage}
          />
        </div>
      </div>
    );
  }
}

ProductLists.propTypes = {
  products: PropTypes.array.isRequired,
};

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
