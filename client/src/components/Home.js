import Slider from "react-slick";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import jwtDecode from "jwt-decode";
import SuggestedProducts from "./Products/SuggestedProducts";

import RecommendedProductsList from "./Products/RecommendedProductsList";


const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "home-slider",
  };
  let user;
  const jwtToken = localStorage.getItem("jwt");
  console.log(jwtToken);
  if (jwtToken) {
    // Set auth token header auth
    user = jwtDecode(jwtToken); // Decode token and get user info and exp
  }

  return (
    <>
      <section className="p-0">
        <Slider {...settings}>
          <div>
            <div
              className="slick-slide slick-current slick-active"
              data-slick-index={0}
              aria-hidden="false"
              style={{ width: 1349 }}
            >
              <div>
                <div style={{ width: "100%", display: "inline-block" }}>
                  <div
                    className="home text-center bg-size blur-up lazyloaded"
                    style={{
                      backgroundImage:
                        'url("/assets/images/home-banner/1.jpg")',
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                      display: "block",
                    }}
                  >
                    <img
                      src="/assets/images/home-banner/1.jpg"
                      alt
                      className="bg-img blur-up lazyload"
                      style={{ display: "none" }}
                    />
                    <div className="container">
                      <div className="row">
                        <div className="col">
                          <div className="slider-contain">
                            <div>
                              <h4>welcome to fashion</h4>
                              <h1>men fashion</h1>
                              <a
                                href="#"
                                className="btn btn-solid"
                                tabIndex={0}
                              >
                                shop now
                              </a>
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
          <div>
            <div
              className="slick-slide"
              data-slick-index={1}
              aria-hidden="true"
              style={{ width: 1349 }}
              tabIndex={-1}
            >
              <div>
                <div style={{ width: "100%", display: "inline-block" }}>
                  <div
                    className="home text-center bg-size blur-up lazyloaded"
                    style={{
                      backgroundImage:
                        'url("/assets/images/home-banner/2.jpg")',
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                      display: "block",
                    }}
                  >
                    <img
                      src="/assets/images/home-banner/2.jpg"
                      alt
                      className="bg-img blur-up lazyload"
                      style={{ display: "none" }}
                    />
                    <div className="container">
                      <div className="row">
                        <div className="col">
                          <div className="slider-contain">
                            <div>
                              <h4>welcome to fashion</h4>
                              <h1>women fashion</h1>
                              <a
                                href="#"
                                className="btn btn-solid"
                                tabIndex={-1}
                              >
                                shop now
                              </a>
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
          <div>
            <div
              className="slick-slide slick-cloned"
              data-slick-index={2}
              aria-hidden="true"
              tabIndex={-1}
              style={{ width: 1349 }}
            >
              <div>
                <div style={{ width: "100%", display: "inline-block" }}>
                  <div
                    className="home text-center bg-size blur-up lazyloaded"
                    style={{
                      backgroundImage:
                        'url("/assets/images/home-banner/3.jpg")',
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                      display: "block",
                    }}
                  >
                    <img
                      src="/assets/images/home-banner/3.jpg"
                      alt
                      className="bg-img blur-up lazyload"
                      style={{ display: "none" }}
                    />
                    <div className="container">
                      <div className="row">
                        <div className="col">
                          <div className="slider-contain">
                            <div>
                              <h4>welcome to fashion</h4>
                              <h1>men fashion</h1>
                              <a
                                href="#"
                                className="btn btn-solid"
                                tabIndex={-1}
                              >
                                shop now
                              </a>
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
          <div>
            <div
              className="slick-slide slick-cloned"
              data-slick-index={3}
              aria-hidden="true"
              tabIndex={-1}
              style={{ width: 1349 }}
            >
              <div>
                <div style={{ width: "100%", display: "inline-block" }}>
                  <div
                    className="home text-center bg-size blur-up lazyloaded"
                    style={{
                      backgroundImage:
                        'url("/assets/images/home-banner/6.jpg")',
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                      display: "block",
                    }}
                  >
                    <img
                      src="/assets/images/home-banner/6.jpg"
                      alt
                      className="bg-img blur-up lazyload"
                      style={{ display: "none" }}
                    />
                    <div className="container">
                      <div className="row">
                        <div className="col">
                          <div className="slider-contain">
                            <div>
                              <h4>welcome to fashion</h4>
                              <h1>women fashion</h1>
                              <a
                                href="#"
                                className="btn btn-solid"
                                tabIndex={-1}
                              >
                                shop now
                              </a>
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
        </Slider>
      </section>
      <section className="pb-0 ratio2_1">
        <div className="container">
          <div className="row partition2">
            <div className="col-md-6">
              <a href="fake">
                <div className="collection-banner p-right text-center">
                  <div
                    className="img-part bg-size blur-up lazyloaded"
                    style={{
                      backgroundImage: 'url("/assets/images/sub-banner1.jpg")',
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                      display: "block",
                    }}
                  >
                    <img
                      src="/assets/images/sub-banner1.jpg"
                      className="img-fluid blur-up lazyload bg-img"
                      alt="true"
                      style={{ display: "none" }}
                    />
                  </div>
                  <div className="contain-banner">
                    <div>
                      <h4>save 30%</h4>
                      <h2>men</h2>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-6">
              <a href="fake">
                <div className="collection-banner p-right text-center">
                  <div
                    className="img-part bg-size blur-up lazyloaded"
                    style={{
                      backgroundImage: 'url("/assets/images/sub-banner2.jpg")',
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                      display: "block",
                    }}
                  >
                    <img
                      src="/assets/images/sub-banner2.jpg"
                      className="img-fluid blur-up lazyload bg-img"
                      alt="true"
                      style={{ display: "none" }}
                    />
                  </div>
                  <div className="contain-banner">
                    <div>
                      <h4>save 60%</h4>
                      <h2>women</h2>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div>

        <div className='title1 section-t-space'>
          <h4>Recommended for you</h4>
          <h2 className='title-inner1'>Most Liked</h2>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 offset-lg-3'>
            <div className='product-para'>
              <p className='text-center'>
                These outfits has been liked by other users similar to those you
                also liked
              </p>

            </div>
          </div>
        </div>
      </div>



      <RecommendedProductsList />

      <section className='p-0'>

        <div
          className="full-banner parallax text-center p-left bg-size blur-up lazyloaded"
          style={{
            backgroundImage: 'url("/assets/images/parallax/1.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center center",
            display: "block",
          }}
        >
          <img
            src="/assets/images/parallax/1.jpg"
            alt="true"
            className="bg-img blur-up lazyload"
            style={{ display: "none" }}
          />
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="banner-contain">
                  <h2>2018</h2>
                  <h3>fashion trends</h3>
                  <h4>special offer</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div>
        <div className="title1 section-t-space">
          <h4>exclusive products</h4>
          <h2 className="title-inner1">special products</h2>
        </div>
      </div>
      <section className="section-b-space p-t-0 ratio_asos">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="theme-tab">
                <ul className="tabs tab-title">
                  <li className="current">
                    <a href="tab-4.html">New Products</a>
                  </li>
                  <li className>
                    <a href="tab-5.html">Featured Products</a>
                  </li>
                  <li className>
                    <a href="tab-6.html">Best Sellers</a>
                  </li>
                </ul>
                <div className="tab-content-cls">
                  <div
                    id="tab-4"
                    className="tab-content active default"
                    style={{ display: "block" }}
                  >
                    <div className="no-slider row">
                      <div className="product-box">
                        <div className="img-wrapper">
                          <div className="front">
                            <a
                              href="product-page(no-sidebar).html"
                              className="bg-size blur-up lazyloaded"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/pro3/27.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/pro3/27.jpg"
                                className="img-fluid blur-up lazyload bg-img"
                                alt="true"
                                style={{ display: "none" }}
                              />
                            </a>
                          </div>
                          <div className="back">
                            <a
                              href="product-page(no-sidebar).html"
                              className="bg-size blur-up lazyloaded"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/pro3/28.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/pro3/28.jpg"
                                className="img-fluid blur-up lazyload bg-img"
                                alt="true"
                                style={{ display: "none" }}
                              />
                            </a>
                          </div>
                          <div className="cart-info cart-wrap">
                            <button
                              data-toggle="modal"
                              data-target="#addtocart"
                              title="Add to cart"
                            >
                              <i className="ti-shopping-cart" />
                            </button>
                            <a href="fake" title="Add to Wishlist">
                              <i className="ti-heart" aria-hidden="true" />
                            </a>
                            <a
                              href="fake"
                              data-toggle="modal"
                              data-target="#quick-view"
                              title="Quick View"
                            >
                              <i className="ti-search" aria-hidden="true" />
                            </a>
                            <a href="compare.html" title="Compare">
                              <i className="ti-reload" aria-hidden="true" />
                            </a>
                          </div>
                        </div>
                        <div className="product-detail">
                          <div className="rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                          <a href="product-page(no-sidebar).html">
                            <h6>Slim Fit Cotton Shirt</h6>
                          </a>
                          <h4>$500.00</h4>
                          <ul className="color-variant">
                            <li className="bg-light0" />
                            <li className="bg-light1" />
                            <li className="bg-light2" />
                          </ul>
                        </div>
                      </div>
                      <div className="product-box">
                        <div className="img-wrapper">
                          <div className="lable-block">
                            <span className="lable3">new</span>
                            <span className="lable4">on sale</span>
                          </div>
                          <div className="front">
                            <a
                              href="product-page(no-sidebar).html"
                              className="bg-size blur-up lazyloaded"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/pro3/1.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/pro3/1.jpg"
                                className="img-fluid blur-up lazyload bg-img"
                                alt="true"
                                style={{ display: "none" }}
                              />
                            </a>
                          </div>
                          <div className="back">
                            <a
                              href="product-page(no-sidebar).html"
                              className="bg-size blur-up lazyloaded"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/pro3/2.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/pro3/2.jpg"
                                className="img-fluid blur-up lazyload bg-img"
                                alt="true"
                                style={{ display: "none" }}
                              />
                            </a>
                          </div>
                          <div className="cart-info cart-wrap">
                            <button
                              data-toggle="modal"
                              data-target="#addtocart"
                              title="Add to cart"
                            >
                              <i className="ti-shopping-cart" />
                            </button>
                            <a href="fake" title="Add to Wishlist">
                              <i className="ti-heart" aria-hidden="true" />
                            </a>
                            <a
                              href="fake"
                              data-toggle="modal"
                              data-target="#quick-view"
                              title="Quick View"
                            >
                              <i className="ti-search" aria-hidden="true" />
                            </a>
                            <a href="compare.html" title="Compare">
                              <i className="ti-reload" aria-hidden="true" />
                            </a>
                          </div>
                        </div>
                        <div className="product-detail">
                          <div className="rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                          <a href="product-page(no-sidebar).html">
                            <h6>Slim Fit Cotton Shirt</h6>
                          </a>
                          <h4>$500.00</h4>
                          <ul className="color-variant">
                            <li className="bg-light0" />
                            <li className="bg-light1" />
                            <li className="bg-light2" />
                          </ul>
                        </div>
                      </div>
                      <div className="product-box">
                        <div className="img-wrapper">
                          <div className="front">
                            <a
                              href="product-page(no-sidebar).html"
                              className="bg-size blur-up lazyloaded"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/pro3/33.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/pro3/33.jpg"
                                className="img-fluid blur-up lazyload bg-img"
                                alt="true"
                                style={{ display: "none" }}
                              />
                            </a>
                          </div>
                          <div className="back">
                            <a
                              href="product-page(no-sidebar).html"
                              className="bg-size blur-up lazyloaded"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/pro3/34.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/pro3/34.jpg"
                                className="img-fluid blur-up lazyload bg-img"
                                alt="true"
                                style={{ display: "none" }}
                              />
                            </a>
                          </div>
                          <div className="cart-info cart-wrap">
                            <button
                              data-toggle="modal"
                              data-target="#addtocart"
                              title="Add to cart"
                            >
                              <i className="ti-shopping-cart" />
                            </button>
                            <a href="fake" title="Add to Wishlist">
                              <i className="ti-heart" aria-hidden="true" />
                            </a>
                            <a
                              href="fake"
                              data-toggle="modal"
                              data-target="#quick-view"
                              title="Quick View"
                            >
                              <i className="ti-search" aria-hidden="true" />
                            </a>
                            <a href="compare.html" title="Compare">
                              <i className="ti-reload" aria-hidden="true" />
                            </a>
                          </div>
                        </div>
                        <div className="product-detail">
                          <div className="rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                          <a href="product-page(no-sidebar).html">
                            <h6>Slim Fit Cotton Shirt</h6>
                          </a>
                          <h4>$500.00</h4>
                          <ul className="color-variant">
                            <li className="bg-light0" />
                            <li className="bg-light1" />
                            <li className="bg-light2" />
                          </ul>
                        </div>
                      </div>
                      <div className="product-box">
                        <div className="img-wrapper">
                          <div className="lable-block">
                            <span className="lable3">new</span>
                            <span className="lable4">on sale</span>
                          </div>
                          <div className="front">
                            <a
                              href="product-page(no-sidebar).html"
                              className="bg-size blur-up lazyloaded"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/pro3/35.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/pro3/35.jpg"
                                className="img-fluid blur-up lazyload bg-img"
                                alt="true"
                                style={{ display: "none" }}
                              />
                            </a>
                          </div>
                          <div className="back">
                            <a
                              href="product-page(no-sidebar).html"
                              className="bg-size blur-up lazyloaded"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/pro3/36.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/pro3/36.jpg"
                                className="img-fluid blur-up lazyload bg-img"
                                alt="true"
                                style={{ display: "none" }}
                              />
                            </a>
                          </div>
                          <div className="cart-info cart-wrap">
                            <button
                              data-toggle="modal"
                              data-target="#addtocart"
                              title="Add to cart"
                            >
                              <i className="ti-shopping-cart" />
                            </button>
                            <a href="fake" title="Add to Wishlist">
                              <i className="ti-heart" aria-hidden="true" />
                            </a>
                            <a
                              href="fake"
                              data-toggle="modal"
                              data-target="#quick-view"
                              title="Quick View"
                            >
                              <i className="ti-search" aria-hidden="true" />
                            </a>
                            <a href="compare.html" title="Compare">
                              <i className="ti-reload" aria-hidden="true" />
                            </a>
                          </div>
                        </div>
                        <div className="product-detail">
                          <div className="rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                          <a href="product-page(no-sidebar).html">
                            <h6>Slim Fit Cotton Shirt</h6>
                          </a>
                          <h4>$500.00</h4>
                          <ul className="color-variant">
                            <li className="bg-light0" />
                            <li className="bg-light1" />
                            <li className="bg-light2" />
                          </ul>
                        </div>
                      </div>
                      <div className="product-box">
                        <div className="img-wrapper">
                          <div className="lable-block">
                            <span className="lable3">new</span>
                            <span className="lable4">on sale</span>
                          </div>
                          <div className="front">
                            <a
                              href="product-page(no-sidebar).html"
                              className="bg-size blur-up lazyloaded"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/pro3/33.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/pro3/33.jpg"
                                className="img-fluid blur-up lazyload bg-img"
                                alt="true"
                                style={{ display: "none" }}
                              />
                            </a>
                          </div>
                          <div className="back">
                            <a
                              href="product-page(no-sidebar).html"
                              className="bg-size blur-up lazyloaded"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/pro3/34.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/pro3/34.jpg"
                                className="img-fluid blur-up lazyload bg-img"
                                alt="true"
                                style={{ display: "none" }}
                              />
                            </a>
                          </div>
                          <div className="cart-info cart-wrap">
                            <button
                              data-toggle="modal"
                              data-target="#addtocart"
                              title="Add to cart"
                            >
                              <i className="ti-shopping-cart" />
                            </button>
                            <a href="fake" title="Add to Wishlist">
                              <i className="ti-heart" aria-hidden="true" />
                            </a>
                            <a
                              href="fake"
                              data-toggle="modal"
                              data-target="#quick-view"
                              title="Quick View"
                            >
                              <i className="ti-search" aria-hidden="true" />
                            </a>
                            <a href="compare.html" title="Compare">
                              <i className="ti-reload" aria-hidden="true" />
                            </a>
                          </div>
                        </div>
                        <div className="product-detail">
                          <div className="rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                          <a href="product-page(no-sidebar).html">
                            <h6>Slim Fit Cotton Shirt</h6>
                          </a>
                          <h4>$500.00</h4>
                          <ul className="color-variant">
                            <li className="bg-light0" />
                            <li className="bg-light1" />
                            <li className="bg-light2" />
                          </ul>
                        </div>
                      </div>
                      <div className="product-box">
                        <div className="img-wrapper">
                          <div className="front">
                            <a
                              href="product-page(no-sidebar).html"
                              className="bg-size blur-up lazyloaded"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/pro3/35.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/pro3/35.jpg"
                                className="img-fluid blur-up lazyload bg-img"
                                alt="true"
                                style={{ display: "none" }}
                              />
                            </a>
                          </div>
                          <div className="back">
                            <a
                              href="product-page(no-sidebar).html"
                              className="bg-size blur-up lazyloaded"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/pro3/36.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/pro3/36.jpg"
                                className="img-fluid blur-up lazyload bg-img"
                                alt="true"
                                style={{ display: "none" }}
                              />
                            </a>
                          </div>
                          <div className="cart-info cart-wrap">
                            <button
                              data-toggle="modal"
                              data-target="#addtocart"
                              title="Add to cart"
                            >
                              <i className="ti-shopping-cart" />
                            </button>
                            <a href="fake" title="Add to Wishlist">
                              <i className="ti-heart" aria-hidden="true" />
                            </a>
                            <a
                              href="fake"
                              data-toggle="modal"
                              data-target="#quick-view"
                              title="Quick View"
                            >
                              <i className="ti-search" aria-hidden="true" />
                            </a>
                            <a href="compare.html" title="Compare">
                              <i className="ti-reload" aria-hidden="true" />
                            </a>
                          </div>
                        </div>
                        <div className="product-detail">
                          <div className="rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                          <a href="product-page(no-sidebar).html">
                            <h6>Slim Fit Cotton Shirt</h6>
                          </a>
                          <h4>$500.00</h4>
                          <ul className="color-variant">
                            <li className="bg-light0" />
                            <li className="bg-light1" />
                            <li className="bg-light2" />
                          </ul>
                        </div>
                      </div>
                      <div className="product-box">
                        <div className="img-wrapper">
                          <div className="lable-block">
                            <span className="lable3">new</span>
                            <span className="lable4">on sale</span>
                          </div>
                          <div className="front">
                            <a
                              href="product-page(no-sidebar).html"
                              className="bg-size blur-up lazyloaded"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/pro3/1.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/pro3/1.jpg"
                                className="img-fluid blur-up lazyload bg-img"
                                alt="true"
                                style={{ display: "none" }}
                              />
                            </a>
                          </div>
                          <div className="back">
                            <a
                              href="product-page(no-sidebar).html"
                              className="bg-size blur-up lazyloaded"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/pro3/2.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/pro3/2.jpg"
                                className="img-fluid blur-up lazyload bg-img"
                                alt="true"
                                style={{ display: "none" }}
                              />
                            </a>
                          </div>
                          <div className="cart-info cart-wrap">
                            <button
                              data-toggle="modal"
                              data-target="#addtocart"
                              title="Add to cart"
                            >
                              <i className="ti-shopping-cart" />
                            </button>
                            <a href="fake" title="Add to Wishlist">
                              <i className="ti-heart" aria-hidden="true" />
                            </a>
                            <a
                              href="fake"
                              data-toggle="modal"
                              data-target="#quick-view"
                              title="Quick View"
                            >
                              <i className="ti-search" aria-hidden="true" />
                            </a>
                            <a href="compare.html" title="Compare">
                              <i className="ti-reload" aria-hidden="true" />
                            </a>
                          </div>
                        </div>
                        <div className="product-detail">
                          <div className="rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                          <a href="product-page(no-sidebar).html">
                            <h6>Slim Fit Cotton Shirt</h6>
                          </a>
                          <h4>$500.00</h4>
                          <ul className="color-variant">
                            <li className="bg-light0" />
                            <li className="bg-light1" />
                            <li className="bg-light2" />
                          </ul>
                        </div>
                      </div>
                      <div className="product-box">
                        <div className="img-wrapper">
                          <div className="front">
                            <a
                              href="product-page(no-sidebar).html"
                              className="bg-size blur-up lazyloaded"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/pro3/27.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/pro3/27.jpg"
                                className="img-fluid blur-up lazyload bg-img"
                                alt="true"
                                style={{ display: "none" }}
                              />
                            </a>
                          </div>
                          <div className="back">
                            <a
                              href="product-page(no-sidebar).html"
                              className="bg-size blur-up lazyloaded"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/pro3/28.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/pro3/28.jpg"
                                className="img-fluid blur-up lazyload bg-img"
                                alt="true"
                                style={{ display: "none" }}
                              />
                            </a>
                          </div>
                          <div className="cart-info cart-wrap">
                            <button
                              data-toggle="modal"
                              data-target="#addtocart"
                              title="Add to cart"
                            >
                              <i className="ti-shopping-cart" />
                            </button>
                            <a href="fake" title="Add to Wishlist">
                              <i className="ti-heart" aria-hidden="true" />
                            </a>
                            <a
                              href="fake"
                              data-toggle="modal"
                              data-target="#quick-view"
                              title="Quick View"
                            >
                              <i className="ti-search" aria-hidden="true" />
                            </a>
                            <a href="compare.html" title="Compare">
                              <i className="ti-reload" aria-hidden="true" />
                            </a>
                          </div>
                        </div>
                        <div className="product-detail">
                          <div className="rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                          <a href="product-page(no-sidebar).html">
                            <h6>Slim Fit Cotton Shirt</h6>
                          </a>
                          <h4>$500.00</h4>
                          <ul className="color-variant">
                            <li className="bg-light0" />
                            <li className="bg-light1" />
                            <li className="bg-light2" />
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="tab-5" className="tab-content">
                    <div className="no-slider row">
                      <div className="product-box">
                        <div className="img-wrapper">
                          <div className="lable-block">
                            <span className="lable3">new</span>
                            <span className="lable4">on sale</span>
                          </div>
                          <div className="front">
                            <a
                              href="product-page(no-sidebar).html"
                              className="bg-size blur-up lazyload"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/pro3/33.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/pro3/33.jpg"
                                className="img-fluid blur-up lazyload bg-img"
                                alt="true"
                                style={{ display: "none" }}
                              />
                            </a>
                          </div>
                          <div className="back">
                            <a
                              href="product-page(no-sidebar).html"
                              className="bg-size blur-up lazyload"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/pro3/34.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/pro3/34.jpg"
                                className="img-fluid blur-up lazyload bg-img"
                                alt="true"
                                style={{ display: "none" }}
                              />
                            </a>
                          </div>
                          <div className="cart-info cart-wrap">
                            <button
                              data-toggle="modal"
                              data-target="#addtocart"
                              title="Add to cart"
                            >
                              <i className="ti-shopping-cart" />
                            </button>
                            <a href="fake" title="Add to Wishlist">
                              <i className="ti-heart" aria-hidden="true" />
                            </a>
                            <a
                              href="fake"
                              data-toggle="modal"
                              data-target="#quick-view"
                              title="Quick View"
                            >
                              <i className="ti-search" aria-hidden="true" />
                            </a>
                            <a href="compare.html" title="Compare">
                              <i className="ti-reload" aria-hidden="true" />
                            </a>
                          </div>
                        </div>
                        <div className="product-detail">
                          <div className="rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                          <a href="product-page(no-sidebar).html">
                            <h6>Slim Fit Cotton Shirt</h6>
                          </a>
                          <h4>$500.00</h4>
                          <ul className="color-variant">
                            <li className="bg-light0" />
                            <li className="bg-light1" />
                            <li className="bg-light2" />
                          </ul>
                        </div>
                      </div>
                      <div className="product-box">
                        <div className="img-wrapper">
                          <div className="front">
                            <a
                              href="product-page(no-sidebar).html"
                              className="bg-size blur-up lazyload"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/pro3/35.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/pro3/35.jpg"
                                className="img-fluid blur-up lazyload bg-img"
                                alt="true"
                                style={{ display: "none" }}
                              />
                            </a>
                          </div>
                          <div className="back">
                            <a
                              href="product-page(no-sidebar).html"
                              className="bg-size blur-up lazyload"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/pro3/36.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/pro3/36.jpg"
                                className="img-fluid blur-up lazyload bg-img"
                                alt="true"
                                style={{ display: "none" }}
                              />
                            </a>
                          </div>
                          <div className="cart-info cart-wrap">
                            <button
                              data-toggle="modal"
                              data-target="#addtocart"
                              title="Add to cart"
                            >
                              <i className="ti-shopping-cart" />
                            </button>
                            <a href="fake" title="Add to Wishlist">
                              <i className="ti-heart" aria-hidden="true" />
                            </a>
                            <a
                              href="fake"
                              data-toggle="modal"
                              data-target="#quick-view"
                              title="Quick View"
                            >
                              <i className="ti-search" aria-hidden="true" />
                            </a>
                            <a href="compare.html" title="Compare">
                              <i className="ti-reload" aria-hidden="true" />
                            </a>
                          </div>
                        </div>
                        <div className="product-detail">
                          <div className="rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                          <a href="product-page(no-sidebar).html">
                            <h6>Slim Fit Cotton Shirt</h6>
                          </a>
                          <h4>$500.00</h4>
                          <ul className="color-variant">
                            <li className="bg-light0" />
                            <li className="bg-light1" />
                            <li className="bg-light2" />
                          </ul>
                        </div>
                      </div>
                      <div className="product-box">
                        <div className="img-wrapper">
                          <div className="lable-block">
                            <span className="lable3">new</span>
                            <span className="lable4">on sale</span>
                          </div>
                          <div className="front">
                            <a
                              href="product-page(no-sidebar).html"
                              className="bg-size blur-up lazyload"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/pro3/1.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/pro3/1.jpg"
                                className="img-fluid blur-up lazyload bg-img"
                                alt="true"
                                style={{ display: "none" }}
                              />
                            </a>
                          </div>
                          <div className="back">
                            <a
                              href="product-page(no-sidebar).html"
                              className="bg-size blur-up lazyload"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/pro3/2.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/pro3/2.jpg"
                                className="img-fluid blur-up lazyload bg-img"
                                alt="true"
                                style={{ display: "none" }}
                              />
                            </a>
                          </div>
                          <div className="cart-info cart-wrap">
                            <button
                              data-toggle="modal"
                              data-target="#addtocart"
                              title="Add to cart"
                            >
                              <i className="ti-shopping-cart" />
                            </button>
                            <a href="fake" title="Add to Wishlist">
                              <i className="ti-heart" aria-hidden="true" />
                            </a>
                            <a
                              href="fake"
                              data-toggle="modal"
                              data-target="#quick-view"
                              title="Quick View"
                            >
                              <i className="ti-search" aria-hidden="true" />
                            </a>
                            <a href="compare.html" title="Compare">
                              <i className="ti-reload" aria-hidden="true" />
                            </a>
                          </div>
                        </div>
                        <div className="product-detail">
                          <div className="rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                          <a href="product-page(no-sidebar).html">
                            <h6>Slim Fit Cotton Shirt</h6>
                          </a>
                          <h4>$500.00</h4>
                          <ul className="color-variant">
                            <li className="bg-light0" />
                            <li className="bg-light1" />
                            <li className="bg-light2" />
                          </ul>
                        </div>
                      </div>
                      <div className="product-box">
                        <div className="img-wrapper">
                          <div className="front">
                            <a
                              href="product-page(no-sidebar).html"
                              className="bg-size blur-up lazyload"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/pro3/27.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/pro3/27.jpg"
                                className="img-fluid blur-up lazyload bg-img"
                                alt="true"
                                style={{ display: "none" }}
                              />
                            </a>
                          </div>
                          <div className="back">
                            <a
                              href="product-page(no-sidebar).html"
                              className="bg-size blur-up lazyload"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/pro3/28.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/pro3/28.jpg"
                                className="img-fluid blur-up lazyload bg-img"
                                alt="true"
                                style={{ display: "none" }}
                              />
                            </a>
                          </div>
                          <div className="cart-info cart-wrap">
                            <button
                              data-toggle="modal"
                              data-target="#addtocart"
                              title="Add to cart"
                            >
                              <i className="ti-shopping-cart" />
                            </button>
                            <a href="fake" title="Add to Wishlist">
                              <i className="ti-heart" aria-hidden="true" />
                            </a>
                            <a
                              href="fake"
                              data-toggle="modal"
                              data-target="#quick-view"
                              title="Quick View"
                            >
                              <i className="ti-search" aria-hidden="true" />
                            </a>
                            <a href="compare.html" title="Compare">
                              <i className="ti-reload" aria-hidden="true" />
                            </a>
                          </div>
                        </div>
                        <div className="product-detail">
                          <div className="rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                          <a href="product-page(no-sidebar).html">
                            <h6>Slim Fit Cotton Shirt</h6>
                          </a>
                          <h4>$500.00</h4>
                          <ul className="color-variant">
                            <li className="bg-light0" />
                            <li className="bg-light1" />
                            <li className="bg-light2" />
                          </ul>
                        </div>
                      </div>
                      <div className="product-box">
                        <div className="img-wrapper">
                          <div className="front">
                            <a
                              href="product-page(no-sidebar).html"
                              className="bg-size blur-up lazyload"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/pro3/27.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/pro3/27.jpg"
                                className="img-fluid blur-up lazyload bg-img"
                                alt="true"
                                style={{ display: "none" }}
                              />
                            </a>
                          </div>
                          <div className="back">
                            <a
                              href="product-page(no-sidebar).html"
                              className="bg-size blur-up lazyload"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/pro3/28.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/pro3/28.jpg"
                                className="img-fluid blur-up lazyload bg-img"
                                alt="true"
                                style={{ display: "none" }}
                              />
                            </a>
                          </div>
                          <div className="cart-info cart-wrap">
                            <button
                              data-toggle="modal"
                              data-target="#addtocart"
                              title="Add to cart"
                            >
                              <i className="ti-shopping-cart" />
                            </button>
                            <a href="fake" title="Add to Wishlist">
                              <i className="ti-heart" aria-hidden="true" />
                            </a>
                            <a
                              href="fake"
                              data-toggle="modal"
                              data-target="#quick-view"
                              title="Quick View"
                            >
                              <i className="ti-search" aria-hidden="true" />
                            </a>
                            <a href="compare.html" title="Compare">
                              <i className="ti-reload" aria-hidden="true" />
                            </a>
                          </div>
                        </div>
                        <div className="product-detail">
                          <div className="rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                          <a href="product-page(no-sidebar).html">
                            <h6>Slim Fit Cotton Shirt</h6>
                          </a>
                          <h4>$500.00</h4>
                          <ul className="color-variant">
                            <li className="bg-light0" />
                            <li className="bg-light1" />
                            <li className="bg-light2" />
                          </ul>
                        </div>
                      </div>
                      <div className="product-box">
                        <div className="img-wrapper">
                          <div className="lable-block">
                            <span className="lable3">new</span>
                            <span className="lable4">on sale</span>
                          </div>
                          <div className="front">
                            <a
                              href="product-page(no-sidebar).html"
                              className="bg-size blur-up lazyload"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/pro3/1.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/pro3/1.jpg"
                                className="img-fluid blur-up lazyload bg-img"
                                alt="true"
                                style={{ display: "none" }}
                              />
                            </a>
                          </div>
                          <div className="back">
                            <a
                              href="product-page(no-sidebar).html"
                              className="bg-size blur-up lazyload"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/pro3/2.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/pro3/2.jpg"
                                className="img-fluid blur-up lazyload bg-img"
                                alt="true"
                                style={{ display: "none" }}
                              />
                            </a>
                          </div>
                          <div className="cart-info cart-wrap">
                            <button
                              data-toggle="modal"
                              data-target="#addtocart"
                              title="Add to cart"
                            >
                              <i className="ti-shopping-cart" />
                            </button>
                            <a href="fake" title="Add to Wishlist">
                              <i className="ti-heart" aria-hidden="true" />
                            </a>
                            <a
                              href="fake"
                              data-toggle="modal"
                              data-target="#quick-view"
                              title="Quick View"
                            >
                              <i className="ti-search" aria-hidden="true" />
                            </a>
                            <a href="compare.html" title="Compare">
                              <i className="ti-reload" aria-hidden="true" />
                            </a>
                          </div>
                        </div>
                        <div className="product-detail">
                          <div className="rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                          <a href="product-page(no-sidebar).html">
                            <h6>Slim Fit Cotton Shirt</h6>
                          </a>
                          <h4>$500.00</h4>
                          <ul className="color-variant">
                            <li className="bg-light0" />
                            <li className="bg-light1" />
                            <li className="bg-light2" />
                          </ul>
                        </div>
                      </div>
                      <div className="product-box">
                        <div className="img-wrapper">
                          <div className="front">
                            <a
                              href="product-page(no-sidebar).html"
                              className="bg-size blur-up lazyload"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/pro3/33.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/pro3/33.jpg"
                                className="img-fluid blur-up lazyload bg-img"
                                alt="true"
                                style={{ display: "none" }}
                              />
                            </a>
                          </div>
                          <div className="back">
                            <a
                              href="product-page(no-sidebar).html"
                              className="bg-size blur-up lazyload"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/pro3/34.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/pro3/34.jpg"
                                className="img-fluid blur-up lazyload bg-img"
                                alt="true"
                                style={{ display: "none" }}
                              />
                            </a>
                          </div>
                          <div className="cart-info cart-wrap">
                            <button
                              data-toggle="modal"
                              data-target="#addtocart"
                              title="Add to cart"
                            >
                              <i className="ti-shopping-cart" />
                            </button>
                            <a href="fake" title="Add to Wishlist">
                              <i className="ti-heart" aria-hidden="true" />
                            </a>
                            <a
                              href="fake"
                              data-toggle="modal"
                              data-target="#quick-view"
                              title="Quick View"
                            >
                              <i className="ti-search" aria-hidden="true" />
                            </a>
                            <a href="compare.html" title="Compare">
                              <i className="ti-reload" aria-hidden="true" />
                            </a>
                          </div>
                        </div>
                        <div className="product-detail">
                          <div className="rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                          <a href="product-page(no-sidebar).html">
                            <h6>Slim Fit Cotton Shirt</h6>
                          </a>
                          <h4>$500.00</h4>
                          <ul className="color-variant">
                            <li className="bg-light0" />
                            <li className="bg-light1" />
                            <li className="bg-light2" />
                          </ul>
                        </div>
                      </div>
                      <div className="product-box">
                        <div className="img-wrapper">
                          <div className="lable-block">
                            <span className="lable3">new</span>
                            <span className="lable4">on sale</span>
                          </div>
                          <div className="front">
                            <a
                              href="product-page(no-sidebar).html"
                              className="bg-size blur-up lazyload"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/pro3/35.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/pro3/35.jpg"
                                className="img-fluid blur-up lazyload bg-img"
                                alt="true"
                                style={{ display: "none" }}
                              />
                            </a>
                          </div>
                          <div className="back">
                            <a
                              href="product-page(no-sidebar).html"
                              className="bg-size blur-up lazyload"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/pro3/36.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/pro3/36.jpg"
                                className="img-fluid blur-up lazyload bg-img"
                                alt="true"
                                style={{ display: "none" }}
                              />
                            </a>
                          </div>
                          <div className="cart-info cart-wrap">
                            <button
                              data-toggle="modal"
                              data-target="#addtocart"
                              title="Add to cart"
                            >
                              <i className="ti-shopping-cart" />
                            </button>
                            <a href="fake" title="Add to Wishlist">
                              <i className="ti-heart" aria-hidden="true" />
                            </a>
                            <a
                              href="fake"
                              data-toggle="modal"
                              data-target="#quick-view"
                              title="Quick View"
                            >
                              <i className="ti-search" aria-hidden="true" />
                            </a>
                            <a href="compare.html" title="Compare">
                              <i className="ti-reload" aria-hidden="true" />
                            </a>
                          </div>
                        </div>
                        <div className="product-detail">
                          <div className="rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                          <a href="product-page(no-sidebar).html">
                            <h6>Slim Fit Cotton Shirt</h6>
                          </a>
                          <h4>$500.00</h4>
                          <ul className="color-variant">
                            <li className="bg-light0" />
                            <li className="bg-light1" />
                            <li className="bg-light2" />
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="tab-6" className="tab-content">
                    <div className="no-slider row">
                      <div className="product-box">
                        <div className="img-wrapper">
                          <div className="lable-block">
                            <span className="lable3">new</span>
                            <span className="lable4">on sale</span>
                          </div>
                          <div className="front">
                            <a
                              href="product-page(no-sidebar).html"
                              className="bg-size blur-up lazyload"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/pro3/33.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/pro3/33.jpg"
                                className="img-fluid blur-up lazyload bg-img"
                                alt="true"
                                style={{ display: "none" }}
                              />
                            </a>
                          </div>
                          <div className="back">
                            <a
                              href="product-page(no-sidebar).html"
                              className="bg-size blur-up lazyload"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/pro3/34.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/pro3/34.jpg"
                                className="img-fluid blur-up lazyload bg-img"
                                alt="true"
                                style={{ display: "none" }}
                              />
                            </a>
                          </div>
                          <div className="cart-info cart-wrap">
                            <button
                              data-toggle="modal"
                              data-target="#addtocart"
                              title="Add to cart"
                            >
                              <i className="ti-shopping-cart" />
                            </button>
                            <a href="fake" title="Add to Wishlist">
                              <i className="ti-heart" aria-hidden="true" />
                            </a>
                            <a
                              href="fake"
                              data-toggle="modal"
                              data-target="#quick-view"
                              title="Quick View"
                            >
                              <i className="ti-search" aria-hidden="true" />
                            </a>
                            <a href="compare.html" title="Compare">
                              <i className="ti-reload" aria-hidden="true" />
                            </a>
                          </div>
                        </div>
                        <div className="product-detail">
                          <div className="rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                          <a href="product-page(no-sidebar).html">
                            <h6>Slim Fit Cotton Shirt</h6>
                          </a>
                          <h4>$500.00</h4>
                          <ul className="color-variant">
                            <li className="bg-light0" />
                            <li className="bg-light1" />
                            <li className="bg-light2" />
                          </ul>
                        </div>
                      </div>
                      <div className="product-box">
                        <div className="img-wrapper">
                          <div className="front">
                            <a
                              href="product-page(no-sidebar).html"
                              className="bg-size blur-up lazyload"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/pro3/27.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/pro3/27.jpg"
                                className="img-fluid blur-up lazyload bg-img"
                                alt="true"
                                style={{ display: "none" }}
                              />
                            </a>
                          </div>
                          <div className="back">
                            <a
                              href="product-page(no-sidebar).html"
                              className="bg-size blur-up lazyload"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/pro3/28.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/pro3/28.jpg"
                                className="img-fluid blur-up lazyload bg-img"
                                alt="true"
                                style={{ display: "none" }}
                              />
                            </a>
                          </div>
                          <div className="cart-info cart-wrap">
                            <button
                              data-toggle="modal"
                              data-target="#addtocart"
                              title="Add to cart"
                            >
                              <i className="ti-shopping-cart" />
                            </button>
                            <a href="fake" title="Add to Wishlist">
                              <i className="ti-heart" aria-hidden="true" />
                            </a>
                            <a
                              href="fake"
                              data-toggle="modal"
                              data-target="#quick-view"
                              title="Quick View"
                            >
                              <i className="ti-search" aria-hidden="true" />
                            </a>
                            <a href="compare.html" title="Compare">
                              <i className="ti-reload" aria-hidden="true" />
                            </a>
                          </div>
                        </div>
                        <div className="product-detail">
                          <div className="rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                          <a href="product-page(no-sidebar).html">
                            <h6>Slim Fit Cotton Shirt</h6>
                          </a>
                          <h4>$500.00</h4>
                          <ul className="color-variant">
                            <li className="bg-light0" />
                            <li className="bg-light1" />
                            <li className="bg-light2" />
                          </ul>
                        </div>
                      </div>
                      <div className="product-box">
                        <div className="img-wrapper">
                          <div className="front">
                            <a
                              href="product-page(no-sidebar).html"
                              className="bg-size blur-up lazyload"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/pro3/33.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/pro3/33.jpg"
                                className="img-fluid blur-up lazyload bg-img"
                                alt="true"
                                style={{ display: "none" }}
                              />
                            </a>
                          </div>
                          <div className="back">
                            <a
                              href="product-page(no-sidebar).html"
                              className="bg-size blur-up lazyload"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/pro3/34.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/pro3/34.jpg"
                                className="img-fluid blur-up lazyload bg-img"
                                alt="true"
                                style={{ display: "none" }}
                              />
                            </a>
                          </div>
                          <div className="cart-info cart-wrap">
                            <button
                              data-toggle="modal"
                              data-target="#addtocart"
                              title="Add to cart"
                            >
                              <i className="ti-shopping-cart" />
                            </button>
                            <a href="fake" title="Add to Wishlist">
                              <i className="ti-heart" aria-hidden="true" />
                            </a>
                            <a
                              href="fake"
                              data-toggle="modal"
                              data-target="#quick-view"
                              title="Quick View"
                            >
                              <i className="ti-search" aria-hidden="true" />
                            </a>
                            <a href="compare.html" title="Compare">
                              <i className="ti-reload" aria-hidden="true" />
                            </a>
                          </div>
                        </div>
                        <div className="product-detail">
                          <div className="rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                          <a href="product-page(no-sidebar).html">
                            <h6>Slim Fit Cotton Shirt</h6>
                          </a>
                          <h4>$500.00</h4>
                          <ul className="color-variant">
                            <li className="bg-light0" />
                            <li className="bg-light1" />
                            <li className="bg-light2" />
                          </ul>
                        </div>
                      </div>
                      <div className="product-box">
                        <div className="img-wrapper">
                          <div className="lable-block">
                            <span className="lable3">new</span>
                            <span className="lable4">on sale</span>
                          </div>
                          <div className="front">
                            <a
                              href="product-page(no-sidebar).html"
                              className="bg-size blur-up lazyload"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/pro3/1.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/pro3/1.jpg"
                                className="img-fluid blur-up lazyload bg-img"
                                alt="true"
                                style={{ display: "none" }}
                              />
                            </a>
                          </div>
                          <div className="back">
                            <a
                              href="product-page(no-sidebar).html"
                              className="bg-size blur-up lazyload"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/pro3/2.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/pro3/2.jpg"
                                className="img-fluid blur-up lazyload bg-img"
                                alt="true"
                                style={{ display: "none" }}
                              />
                            </a>
                          </div>
                          <div className="cart-info cart-wrap">
                            <button
                              data-toggle="modal"
                              data-target="#addtocart"
                              title="Add to cart"
                            >
                              <i className="ti-shopping-cart" />
                            </button>
                            <a href="fake" title="Add to Wishlist">
                              <i className="ti-heart" aria-hidden="true" />
                            </a>
                            <a
                              href="fake"
                              data-toggle="modal"
                              data-target="#quick-view"
                              title="Quick View"
                            >
                              <i className="ti-search" aria-hidden="true" />
                            </a>
                            <a href="compare.html" title="Compare">
                              <i className="ti-reload" aria-hidden="true" />
                            </a>
                          </div>
                        </div>
                        <div className="product-detail">
                          <div className="rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                          <a href="product-page(no-sidebar).html">
                            <h6>Slim Fit Cotton Shirt</h6>
                          </a>
                          <h4>$500.00</h4>
                          <ul className="color-variant">
                            <li className="bg-light0" />
                            <li className="bg-light1" />
                            <li className="bg-light2" />
                          </ul>
                        </div>
                      </div>
                      <div className="product-box">
                        <div className="img-wrapper">
                          <div className="lable-block">
                            <span className="lable3">new</span>
                            <span className="lable4">on sale</span>
                          </div>
                          <div className="front">
                            <a
                              href="product-page(no-sidebar).html"
                              className="bg-size blur-up lazyload"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/pro3/35.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/pro3/35.jpg"
                                className="img-fluid blur-up lazyload bg-img"
                                alt="true"
                                style={{ display: "none" }}
                              />
                            </a>
                          </div>
                          <div className="back">
                            <a
                              href="product-page(no-sidebar).html"
                              className="bg-size blur-up lazyload"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/pro3/36.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/pro3/36.jpg"
                                className="img-fluid blur-up lazyload bg-img"
                                alt="true"
                                style={{ display: "none" }}
                              />
                            </a>
                          </div>
                          <div className="cart-info cart-wrap">
                            <button
                              data-toggle="modal"
                              data-target="#addtocart"
                              title="Add to cart"
                            >
                              <i className="ti-shopping-cart" />
                            </button>
                            <a href="fake" title="Add to Wishlist">
                              <i className="ti-heart" aria-hidden="true" />
                            </a>
                            <a
                              href="fake"
                              data-toggle="modal"
                              data-target="#quick-view"
                              title="Quick View"
                            >
                              <i className="ti-search" aria-hidden="true" />
                            </a>
                            <a href="compare.html" title="Compare">
                              <i className="ti-reload" aria-hidden="true" />
                            </a>
                          </div>
                        </div>
                        <div className="product-detail">
                          <div className="rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                          <a href="product-page(no-sidebar).html">
                            <h6>Slim Fit Cotton Shirt</h6>
                          </a>
                          <h4>$500.00</h4>
                          <ul className="color-variant">
                            <li className="bg-light0" />
                            <li className="bg-light1" />
                            <li className="bg-light2" />
                          </ul>
                        </div>
                      </div>
                      <div className="product-box">
                        <div className="img-wrapper">
                          <div className="front">
                            <a
                              href="product-page(no-sidebar).html"
                              className="bg-size blur-up lazyload"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/pro3/35.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/pro3/35.jpg"
                                className="img-fluid blur-up lazyload bg-img"
                                alt="true"
                                style={{ display: "none" }}
                              />
                            </a>
                          </div>
                          <div className="back">
                            <a
                              href="product-page(no-sidebar).html"
                              className="bg-size blur-up lazyload"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/pro3/36.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/pro3/36.jpg"
                                className="img-fluid blur-up lazyload bg-img"
                                alt="true"
                                style={{ display: "none" }}
                              />
                            </a>
                          </div>
                          <div className="cart-info cart-wrap">
                            <button
                              data-toggle="modal"
                              data-target="#addtocart"
                              title="Add to cart"
                            >
                              <i className="ti-shopping-cart" />
                            </button>
                            <a href="fake" title="Add to Wishlist">
                              <i className="ti-heart" aria-hidden="true" />
                            </a>
                            <a
                              href="fake"
                              data-toggle="modal"
                              data-target="#quick-view"
                              title="Quick View"
                            >
                              <i className="ti-search" aria-hidden="true" />
                            </a>
                            <a href="compare.html" title="Compare">
                              <i className="ti-reload" aria-hidden="true" />
                            </a>
                          </div>
                        </div>
                        <div className="product-detail">
                          <div className="rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                          <a href="product-page(no-sidebar).html">
                            <h6>Slim Fit Cotton Shirt</h6>
                          </a>
                          <h4>$500.00</h4>
                          <ul className="color-variant">
                            <li className="bg-light0" />
                            <li className="bg-light1" />
                            <li className="bg-light2" />
                          </ul>
                        </div>
                      </div>
                      <div className="product-box">
                        <div className="img-wrapper">
                          <div className="lable-block">
                            <span className="lable3">new</span>
                            <span className="lable4">on sale</span>
                          </div>
                          <div className="front">
                            <a
                              href="product-page(no-sidebar).html"
                              className="bg-size blur-up lazyload"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/pro3/1.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/pro3/1.jpg"
                                className="img-fluid blur-up lazyload bg-img"
                                alt="true"
                                style={{ display: "none" }}
                              />
                            </a>
                          </div>
                          <div className="back">
                            <a
                              href="product-page(no-sidebar).html"
                              className="bg-size blur-up lazyload"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/pro3/2.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/pro3/2.jpg"
                                className="img-fluid blur-up lazyload bg-img"
                                alt="true"
                                style={{ display: "none" }}
                              />
                            </a>
                          </div>
                          <div className="cart-info cart-wrap">
                            <button
                              data-toggle="modal"
                              data-target="#addtocart"
                              title="Add to cart"
                            >
                              <i className="ti-shopping-cart" />
                            </button>
                            <a href="fake" title="Add to Wishlist">
                              <i className="ti-heart" aria-hidden="true" />
                            </a>
                            <a
                              href="fake"
                              data-toggle="modal"
                              data-target="#quick-view"
                              title="Quick View"
                            >
                              <i className="ti-search" aria-hidden="true" />
                            </a>
                            <a href="compare.html" title="Compare">
                              <i className="ti-reload" aria-hidden="true" />
                            </a>
                          </div>
                        </div>
                        <div className="product-detail">
                          <div className="rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                          <a href="product-page(no-sidebar).html">
                            <h6>Slim Fit Cotton Shirt</h6>
                          </a>
                          <h4>$500.00</h4>
                          <ul className="color-variant">
                            <li className="bg-light0" />
                            <li className="bg-light1" />
                            <li className="bg-light2" />
                          </ul>
                        </div>
                      </div>
                      <div className="product-box">
                        <div className="img-wrapper">
                          <div className="front">
                            <a
                              href="product-page(no-sidebar).html"
                              className="bg-size blur-up lazyload"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/pro3/27.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/pro3/27.jpg"
                                className="img-fluid blur-up lazyload bg-img"
                                alt="true"
                                style={{ display: "none" }}
                              />
                            </a>
                          </div>
                          <div className="back">
                            <a
                              href="product-page(no-sidebar).html"
                              className="bg-size blur-up lazyload"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/pro3/28.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/pro3/28.jpg"
                                className="img-fluid blur-up lazyload bg-img"
                                alt="true"
                                style={{ display: "none" }}
                              />
                            </a>
                          </div>
                          <div className="cart-info cart-wrap">
                            <button
                              data-toggle="modal"
                              data-target="#addtocart"
                              title="Add to cart"
                            >
                              <i className="ti-shopping-cart" />
                            </button>
                            <a href="fake" title="Add to Wishlist">
                              <i className="ti-heart" aria-hidden="true" />
                            </a>
                            <a
                              href="fake"
                              data-toggle="modal"
                              data-target="#quick-view"
                              title="Quick View"
                            >
                              <i className="ti-search" aria-hidden="true" />
                            </a>
                            <a href="compare.html" title="Compare">
                              <i className="ti-reload" aria-hidden="true" />
                            </a>
                          </div>
                        </div>
                        <div className="product-detail">
                          <div className="rating">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div>
                          <a href="product-page(no-sidebar).html">
                            <h6>Slim Fit Cotton Shirt</h6>
                          </a>
                          <h4>$500.00</h4>
                          <ul className="color-variant">
                            <li className="bg-light0" />
                            <li className="bg-light1" />
                            <li className="bg-light2" />
                          </ul>
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
      <div className="container">
        <section className="service border-section small-section">
          <div className="row">
            <div className="col-md-4 service-block">
              <div className="media">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -117 679.99892 679"
                >
                  <path
                    d="m12.347656 378.382812h37.390625c4.371094 37.714844 36.316407 66.164063 74.277344 66.164063 37.96875 0 69.90625-28.449219 74.28125-66.164063h241.789063c4.382812 37.714844 36.316406 66.164063 74.277343 66.164063 37.96875 0 69.902344-28.449219 74.285157-66.164063h78.890624c6.882813 0 12.460938-5.578124 12.460938-12.460937v-352.957031c0-6.882813-5.578125-12.464844-12.460938-12.464844h-432.476562c-6.875 0-12.457031 5.582031-12.457031 12.464844v69.914062h-105.570313c-4.074218.011719-7.890625 2.007813-10.21875 5.363282l-68.171875 97.582031-26.667969 37.390625-9.722656 13.835937c-1.457031 2.082031-2.2421872 4.558594-2.24999975 7.101563v121.398437c-.09765625 3.34375 1.15624975 6.589844 3.47656275 9.003907 2.320312 2.417968 5.519531 3.796874 8.867187 3.828124zm111.417969 37.386719c-27.527344 0-49.851563-22.320312-49.851563-49.847656 0-27.535156 22.324219-49.855469 49.851563-49.855469 27.535156 0 49.855469 22.320313 49.855469 49.855469 0 27.632813-22.21875 50.132813-49.855469 50.472656zm390.347656 0c-27.53125 0-49.855469-22.320312-49.855469-49.847656 0-27.535156 22.324219-49.855469 49.855469-49.855469 27.539063 0 49.855469 22.320313 49.855469 49.855469.003906 27.632813-22.21875 50.132813-49.855469 50.472656zm140.710938-390.34375v223.34375h-338.375c-6.882813 0-12.464844 5.578125-12.464844 12.460938 0 6.882812 5.582031 12.464843 12.464844 12.464843h338.375v79.761719h-66.421875c-4.382813-37.710937-36.320313-66.15625-74.289063-66.15625-37.960937 0-69.898437 28.445313-74.277343 66.15625h-192.308594v-271.324219h89.980468c6.882813 0 12.464844-5.582031 12.464844-12.464843 0-6.882813-5.582031-12.464844-12.464844-12.464844h-89.980468v-31.777344zm-531.304688 82.382813h99.703125v245.648437h-24.925781c-4.375-37.710937-36.3125-66.15625-74.28125-66.15625-37.960937 0-69.90625 28.445313-74.277344 66.15625h-24.929687v-105.316406l3.738281-5.359375h152.054687c6.882813 0 12.460938-5.574219 12.460938-12.457031v-92.226563c0-6.882812-5.578125-12.464844-12.460938-12.464844h-69.796874zm-30.160156 43h74.777344v67.296875h-122.265625zm0 0"
                    fill="#ff4c3b"
                  />
                </svg>
                <div className="media-body">
                  <h4>free shipping</h4>
                  <p>free shipping world wide</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 service-block">
              <div className="media">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  id="Capa_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 480 480"
                  style={{ enableBackground: "new 0 0 480 480" }}
                  xmlSpace="preserve"
                  width="512px"
                  height="512px"
                >
                  <g>
                    <g>
                      <g>
                        <path
                          d="M472,432h-24V280c-0.003-4.418-3.588-7.997-8.006-7.994c-2.607,0.002-5.05,1.274-6.546,3.41l-112,160 c-2.532,3.621-1.649,8.609,1.972,11.14c1.343,0.939,2.941,1.443,4.58,1.444h104v24c0,4.418,3.582,8,8,8s8-3.582,8-8v-24h24 c4.418,0,8-3.582,8-8S476.418,432,472,432z M432,432h-88.64L432,305.376V432z"
                          fill="#ff4c3b"
                        />
                        <path
                          d="M328,464h-94.712l88.056-103.688c0.2-0.238,0.387-0.486,0.56-0.744c16.566-24.518,11.048-57.713-12.56-75.552 c-28.705-20.625-68.695-14.074-89.319,14.631C212.204,309.532,207.998,322.597,208,336c0,4.418,3.582,8,8,8s8-3.582,8-8 c-0.003-26.51,21.486-48.002,47.995-48.005c10.048-0.001,19.843,3.151,28.005,9.013c16.537,12.671,20.388,36.007,8.8,53.32 l-98.896,116.496c-2.859,3.369-2.445,8.417,0.924,11.276c1.445,1.226,3.277,1.899,5.172,1.9h112c4.418,0,8-3.582,8-8 S332.418,464,328,464z"
                          fill="#ff4c3b"
                        />
                        <path
                          d="M216.176,424.152c0.167-4.415-3.278-8.129-7.693-8.296c-0.001,0-0.002,0-0.003,0 C104.11,411.982,20.341,328.363,16.28,224H48c4.418,0,8-3.582,8-8s-3.582-8-8-8H16.28C20.283,103.821,103.82,20.287,208,16.288 V40c0,4.418,3.582,8,8,8s8-3.582,8-8V16.288c102.754,3.974,185.686,85.34,191.616,188l-31.2-31.2 c-3.178-3.07-8.242-2.982-11.312,0.196c-2.994,3.1-2.994,8.015,0,11.116l44.656,44.656c0.841,1.018,1.925,1.807,3.152,2.296 c0.313,0.094,0.631,0.172,0.952,0.232c0.549,0.198,1.117,0.335,1.696,0.408c0.08,0,0.152,0,0.232,0c0.08,0,0.152,0,0.224,0 c0.609-0.046,1.211-0.164,1.792-0.352c0.329-0.04,0.655-0.101,0.976-0.184c1.083-0.385,2.069-1.002,2.888-1.808l45.264-45.248 c3.069-3.178,2.982-8.242-0.196-11.312c-3.1-2.994-8.015-2.994-11.116,0l-31.976,31.952 C425.933,90.37,331.38,0.281,216.568,0.112C216.368,0.104,216.2,0,216,0s-0.368,0.104-0.568,0.112 C96.582,0.275,0.275,96.582,0.112,215.432C0.112,215.632,0,215.8,0,216s0.104,0.368,0.112,0.568 c0.199,115.917,91.939,210.97,207.776,215.28h0.296C212.483,431.847,216.013,428.448,216.176,424.152z"
                          fill="#ff4c3b"
                        />
                        <path
                          d="M323.48,108.52c-3.124-3.123-8.188-3.123-11.312,0L226.2,194.48c-6.495-2.896-13.914-2.896-20.408,0l-40.704-40.704 c-3.178-3.069-8.243-2.981-11.312,0.197c-2.994,3.1-2.994,8.015,0,11.115l40.624,40.624c-5.704,11.94-0.648,26.244,11.293,31.947 c9.165,4.378,20.095,2.501,27.275-4.683c7.219-7.158,9.078-18.118,4.624-27.256l85.888-85.888 C326.603,116.708,326.603,111.644,323.48,108.52z M221.658,221.654c-0.001,0.001-0.001,0.001-0.002,0.002 c-3.164,3.025-8.148,3.025-11.312,0c-3.125-3.124-3.125-8.189-0.002-11.314c3.124-3.125,8.189-3.125,11.314-0.002 C224.781,213.464,224.781,218.53,221.658,221.654z"
                          fill="#ff4c3b"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
                <div className="media-body">
                  <h4>24 X 7 service</h4>
                  <p>online service for new customer</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 service-block">
              <div className="media">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -14 512.00001 512"
                >
                  <path
                    d="m136.964844 308.234375c4.78125-2.757813 6.417968-8.878906 3.660156-13.660156-2.761719-4.777344-8.878906-6.417969-13.660156-3.660157-4.78125 2.761719-6.421875 8.882813-3.660156 13.660157 2.757812 4.78125 8.878906 6.421875 13.660156 3.660156zm0 0"
                    fill="#ff4c3b"
                  />
                  <path
                    d="m95.984375 377.253906 50.359375 87.230469c10.867188 18.84375 35.3125 25.820313 54.644531 14.644531 19.128907-11.054687 25.703125-35.496094 14.636719-54.640625l-30-51.96875 25.980469-15c4.78125-2.765625 6.421875-8.878906 3.660156-13.660156l-13.003906-22.523437c1.550781-.300782 11.746093-2.300782 191.539062-37.570313 22.226563-1.207031 35.542969-25.515625 24.316407-44.949219l-33.234376-57.5625 21.238282-32.167968c2.085937-3.164063 2.210937-7.230469.316406-10.511719l-20-34.640625c-1.894531-3.28125-5.492188-5.203125-9.261719-4.980469l-38.472656 2.308594-36.894531-63.90625c-5.34375-9.257813-14.917969-14.863281-25.605469-14.996094-.128906-.003906-.253906-.003906-.382813-.003906-10.328124 0-19.703124 5.140625-25.257812 13.832031l-130.632812 166.414062-84.925782 49.03125c-33.402344 19.277344-44.972656 62.128907-25.621094 95.621094 17.679688 30.625 54.953126 42.671875 86.601563 30zm102.324219 57.238282c5.523437 9.554687 2.253906 21.78125-7.328125 27.316406-9.613281 5.558594-21.855469 2.144531-27.316407-7.320313l-50-86.613281 34.640626-20c57.867187 100.242188 49.074218 85.011719 50.003906 86.617188zm-22.683594-79.296876-10-17.320312 17.320312-10 10 17.320312zm196.582031-235.910156 13.820313 23.9375-12.324219 18.664063-23.820313-41.261719zm-104.917969-72.132812c2.683594-4.390625 6.941407-4.84375 8.667969-4.796875 1.707031.019531 5.960938.550781 8.527344 4.996093l116.3125 201.464844c3.789063 6.558594-.816406 14.804688-8.414063 14.992188-1.363281.03125-1.992187.277344-5.484374.929687l-123.035157-213.105469c2.582031-3.320312 2.914063-3.640624 3.425781-4.480468zm-16.734374 21.433594 115.597656 200.222656-174.460938 34.21875-53.046875-91.878906zm-223.851563 268.667968c-4.390625-7.597656-6.710937-16.222656-6.710937-24.949218 0-17.835938 9.585937-34.445313 25.011718-43.351563l77.941406-45 50 86.601563-77.941406 45.003906c-23.878906 13.78125-54.515625 5.570312-68.300781-18.304688zm0 0"
                    fill="#ff4c3b"
                  />
                  <path
                    d="m105.984375 314.574219c-2.761719-4.78125-8.878906-6.421875-13.660156-3.660157l-17.320313 10c-4.773437 2.757813-10.902344 1.113282-13.660156-3.660156-2.761719-4.78125-8.878906-6.421875-13.660156-3.660156s-6.421875 8.878906-3.660156 13.660156c8.230468 14.257813 26.589843 19.285156 40.980468 10.980469l17.320313-10c4.78125-2.761719 6.421875-8.875 3.660156-13.660156zm0 0"
                    fill="#ff4c3b"
                  />
                  <path
                    d="m497.136719 43.746094-55.722657 31.007812c-4.824218 2.6875-6.5625 8.777344-3.875 13.601563 2.679688 4.820312 8.765626 6.566406 13.601563 3.875l55.71875-31.007813c4.828125-2.6875 6.5625-8.777344 3.875-13.601562-2.683594-4.828125-8.773437-6.5625-13.597656-3.875zm0 0"
                    fill="#ff4c3b"
                  />
                  <path
                    d="m491.292969 147.316406-38.636719-10.351562c-5.335938-1.429688-10.820312 1.734375-12.25 7.070312-1.429688 5.335938 1.738281 10.816406 7.074219 12.246094l38.640625 10.351562c5.367187 1.441407 10.824218-1.773437 12.246094-7.070312 1.429687-5.335938-1.738282-10.820312-7.074219-12.246094zm0 0"
                    fill="#ff4c3b"
                  />
                  <path
                    d="m394.199219 7.414062-10.363281 38.640626c-1.429688 5.335937 1.734374 10.816406 7.070312 12.25 5.332031 1.425781 10.816406-1.730469 12.25-7.070313l10.359375-38.640625c1.429687-5.335938-1.734375-10.820312-7.070313-12.25-5.332031-1.429688-10.816406 1.734375-12.246093 7.070312zm0 0"
                    fill="#ff4c3b"
                  />
                </svg>
                <div className="media-body">
                  <h4>festival offer</h4>
                  <p>new online special festival offer</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="title1 section-t-space">
              <h4>Recent Story</h4>
              <h2 className="title-inner1">from the blog</h2>
            </div>
          </div>
        </div>
      </div>
      <section className="blog p-t-0 ratio2_3">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="slide-3 no-arrow slick-initialized slick-slider">
                <button
                  className="slick-prev "
                  aria-label="Previous"
                  type="button"
                  style={{ display: "inline-block" }}
                >
                  Previous
                </button>
                <div className="slick-list draggable">
                  <div
                    className="slick-track"
                    style={{
                      opacity: 1,
                      width: 5941,
                      transform: "translate3d(-1828px, 0px, 0px)",
                    }}
                  >
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={-3}
                      aria-hidden="true"
                      style={{ width: 457 }}
                      tabIndex={-1}
                    >
                      <div>
                        <div
                          className="col-md-12"
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <a href="fake" tabIndex={-1}>
                            <div className="classic-effect">
                              <div
                                className="bg-size blur-up lazyload"
                                style={{
                                  backgroundImage:
                                    'url("/assets/images/blog/3.jpg")',
                                  backgroundSize: "cover",
                                  backgroundPosition: "center center",
                                  display: "block",
                                }}
                              >
                                <img
                                  src="/assets/images/blog/3.jpg"
                                  className="img-fluid blur-up lazyload bg-img"
                                  alt="true"
                                  style={{ display: "none" }}
                                />
                              </div>
                              <span />
                            </div>
                          </a>
                          <div className="blog-details">
                            <h4>25 January 2018</h4>
                            <a href="fake" tabIndex={-1}>
                              <p>
                                Lorem ipsum dolor sit consectetur adipiscing
                                elit,
                              </p>
                            </a>
                            <hr className="style1" />
                            <h6>by: John Dio , 2 Comment</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={-2}
                      aria-hidden="true"
                      style={{ width: 457 }}
                      tabIndex={-1}
                    >
                      <div>
                        <div
                          className="col-md-12"
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <a href="fake" tabIndex={-1}>
                            <div className="classic-effect">
                              <div
                                className="bg-size blur-up lazyload"
                                style={{
                                  backgroundImage:
                                    'url("/assets/images/blog/4.jpg")',
                                  backgroundSize: "cover",
                                  backgroundPosition: "center center",
                                  display: "block",
                                }}
                              >
                                <img
                                  src="/assets/images/blog/4.jpg"
                                  className="img-fluid blur-up lazyload bg-img"
                                  alt="true"
                                  style={{ display: "none" }}
                                />
                              </div>
                              <span />
                            </div>
                          </a>
                          <div className="blog-details">
                            <h4>25 January 2018</h4>
                            <a href="fake" tabIndex={-1}>
                              <p>
                                Lorem ipsum dolor sit consectetur adipiscing
                                elit,
                              </p>
                            </a>
                            <hr className="style1" />
                            <h6>by: John Dio , 2 Comment</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={-1}
                      aria-hidden="true"
                      style={{ width: 457 }}
                      tabIndex={-1}
                    >
                      <div>
                        <div
                          className="col-md-12"
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <a href="fake" tabIndex={-1}>
                            <div className="classic-effect">
                              <div
                                className="bg-size blur-up lazyloaded"
                                style={{
                                  backgroundImage:
                                    'url("/assets/images/blog/5.jpg")',
                                  backgroundSize: "cover",
                                  backgroundPosition: "center center",
                                  display: "block",
                                }}
                              >
                                <img
                                  src="/assets/images/blog/5.jpg"
                                  className="img-fluid blur-up lazyload bg-img"
                                  alt="true"
                                  style={{ display: "none" }}
                                />
                              </div>
                              <span />
                            </div>
                          </a>
                          <div className="blog-details">
                            <h4>25 January 2018</h4>
                            <a href="fake" tabIndex={-1}>
                              <p>
                                Lorem ipsum dolor sit consectetur adipiscing
                                elit,
                              </p>
                            </a>
                            <hr className="style1" />
                            <h6>by: John Dio , 2 Comment</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide"
                      data-slick-index={0}
                      aria-hidden="true"
                      style={{ width: 457 }}
                      tabIndex={-1}
                    >
                      <div>
                        <div
                          className="col-md-12"
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <a href="fake" tabIndex={-1}>
                            <div className="classic-effect">
                              <div
                                className="bg-size blur-up lazyloaded"
                                style={{
                                  backgroundImage:
                                    'url("/assets/images/blog/1.jpg")',
                                  backgroundSize: "cover",
                                  backgroundPosition: "center center",
                                  display: "block",
                                }}
                              >
                                <img
                                  src="/assets/images/blog/1.jpg"
                                  className="img-fluid blur-up lazyload bg-img"
                                  alt="true"
                                  style={{ display: "none" }}
                                />
                              </div>
                              <span />
                            </div>
                          </a>
                          <div className="blog-details">
                            <h4>25 January 2018</h4>
                            <a href="fake" tabIndex={-1}>
                              <p>
                                Lorem ipsum dolor sit consectetur adipiscing
                                elit,
                              </p>
                            </a>
                            <hr className="style1" />
                            <h6>by: John Dio , 2 Comment</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-current slick-active"
                      data-slick-index={1}
                      aria-hidden="false"
                      style={{ width: 457 }}
                    >
                      <div>
                        <div
                          className="col-md-12"
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <a href="fake" tabIndex={0}>
                            <div className="classic-effect">
                              <div
                                className="bg-size blur-up lazyloaded"
                                style={{
                                  backgroundImage:
                                    'url("/assets/images/blog/2.jpg")',
                                  backgroundSize: "cover",
                                  backgroundPosition: "center center",
                                  display: "block",
                                }}
                              >
                                <img
                                  src="/assets/images/blog/2.jpg"
                                  className="img-fluid blur-up lazyload bg-img"
                                  alt="true"
                                  style={{ display: "none" }}
                                />
                              </div>
                              <span />
                            </div>
                          </a>
                          <div className="blog-details">
                            <h4>25 January 2018</h4>
                            <a href="fake" tabIndex={0}>
                              <p>
                                Lorem ipsum dolor sit consectetur adipiscing
                                elit,
                              </p>
                            </a>
                            <hr className="style1" />
                            <h6>by: John Dio , 2 Comment</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-active"
                      data-slick-index={2}
                      aria-hidden="false"
                      style={{ width: 457 }}
                    >
                      <div>
                        <div
                          className="col-md-12"
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <a href="fake" tabIndex={0}>
                            <div className="classic-effect">
                              <div
                                className="bg-size blur-up lazyloaded"
                                style={{
                                  backgroundImage:
                                    'url("/assets/images/blog/3.jpg")',
                                  backgroundSize: "cover",
                                  backgroundPosition: "center center",
                                  display: "block",
                                }}
                              >
                                <img
                                  src="/assets/images/blog/3.jpg"
                                  className="img-fluid blur-up lazyload bg-img"
                                  alt="true"
                                  style={{ display: "none" }}
                                />
                              </div>
                              <span />
                            </div>
                          </a>
                          <div className="blog-details">
                            <h4>25 January 2018</h4>
                            <a href="fake" tabIndex={0}>
                              <p>
                                Lorem ipsum dolor sit consectetur adipiscing
                                elit,
                              </p>
                            </a>
                            <hr className="style1" />
                            <h6>by: John Dio , 2 Comment</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-active"
                      data-slick-index={3}
                      aria-hidden="false"
                      style={{ width: 457 }}
                    >
                      <div>
                        <div
                          className="col-md-12"
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <a href="fake" tabIndex={0}>
                            <div className="classic-effect">
                              <div
                                className="bg-size blur-up lazyloaded"
                                style={{
                                  backgroundImage:
                                    'url("/assets/images/blog/4.jpg")',
                                  backgroundSize: "cover",
                                  backgroundPosition: "center center",
                                  display: "block",
                                }}
                              >
                                <img
                                  src="/assets/images/blog/4.jpg"
                                  className="img-fluid blur-up lazyload bg-img"
                                  alt="true"
                                  style={{ display: "none" }}
                                />
                              </div>
                              <span />
                            </div>
                          </a>
                          <div className="blog-details">
                            <h4>25 January 2018</h4>
                            <a href="fake" tabIndex={0}>
                              <p>
                                Lorem ipsum dolor sit consectetur adipiscing
                                elit,
                              </p>
                            </a>
                            <hr className="style1" />
                            <h6>by: John Dio , 2 Comment</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide"
                      data-slick-index={4}
                      aria-hidden="true"
                      style={{ width: 457 }}
                      tabIndex={-1}
                    >
                      <div>
                        <div
                          className="col-md-12"
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <a href="fake" tabIndex={-1}>
                            <div className="classic-effect">
                              <div
                                className="bg-size blur-up lazyloaded"
                                style={{
                                  backgroundImage:
                                    'url("/assets/images/blog/5.jpg")',
                                  backgroundSize: "cover",
                                  backgroundPosition: "center center",
                                  display: "block",
                                }}
                              >
                                <img
                                  src="/assets/images/blog/5.jpg"
                                  className="img-fluid blur-up lazyload bg-img"
                                  alt="true"
                                  style={{ display: "none" }}
                                />
                              </div>
                              <span />
                            </div>
                          </a>
                          <div className="blog-details">
                            <h4>25 January 2018</h4>
                            <a href="fake" tabIndex={-1}>
                              <p>
                                Lorem ipsum dolor sit consectetur adipiscing
                                elit,
                              </p>
                            </a>
                            <hr className="style1" />
                            <h6>by: John Dio , 2 Comment</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={5}
                      aria-hidden="true"
                      style={{ width: 457 }}
                      tabIndex={-1}
                    >
                      <div>
                        <div
                          className="col-md-12"
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <a href="fake" tabIndex={-1}>
                            <div className="classic-effect">
                              <div
                                className="bg-size blur-up lazyloaded"
                                style={{
                                  backgroundImage:
                                    'url("/assets/images/blog/1.jpg")',
                                  backgroundSize: "cover",
                                  backgroundPosition: "center center",
                                  display: "block",
                                }}
                              >
                                <img
                                  src="/assets/images/blog/1.jpg"
                                  className="img-fluid blur-up lazyload bg-img"
                                  alt="true"
                                  style={{ display: "none" }}
                                />
                              </div>
                              <span />
                            </div>
                          </a>
                          <div className="blog-details">
                            <h4>25 January 2018</h4>
                            <a href="fake" tabIndex={-1}>
                              <p>
                                Lorem ipsum dolor sit consectetur adipiscing
                                elit,
                              </p>
                            </a>
                            <hr className="style1" />
                            <h6>by: John Dio , 2 Comment</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={6}
                      aria-hidden="true"
                      style={{ width: 457 }}
                      tabIndex={-1}
                    >
                      <div>
                        <div
                          className="col-md-12"
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <a href="fake" tabIndex={-1}>
                            <div className="classic-effect">
                              <div
                                className="bg-size blur-up lazyloaded"
                                style={{
                                  backgroundImage:
                                    'url("/assets/images/blog/2.jpg")',
                                  backgroundSize: "cover",
                                  backgroundPosition: "center center",
                                  display: "block",
                                }}
                              >
                                <img
                                  src="/assets/images/blog/2.jpg"
                                  className="img-fluid blur-up lazyload bg-img"
                                  alt="true"
                                  style={{ display: "none" }}
                                />
                              </div>
                              <span />
                            </div>
                          </a>
                          <div className="blog-details">
                            <h4>25 January 2018</h4>
                            <a href="fake" tabIndex={-1}>
                              <p>
                                Lorem ipsum dolor sit consectetur adipiscing
                                elit,
                              </p>
                            </a>
                            <hr className="style1" />
                            <h6>by: John Dio , 2 Comment</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={7}
                      aria-hidden="true"
                      style={{ width: 457 }}
                      tabIndex={-1}
                    >
                      <div>
                        <div
                          className="col-md-12"
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <a href="fake" tabIndex={-1}>
                            <div className="classic-effect">
                              <div
                                className="bg-size blur-up lazyloaded"
                                style={{
                                  backgroundImage:
                                    'url("/assets/images/blog/3.jpg")',
                                  backgroundSize: "cover",
                                  backgroundPosition: "center center",
                                  display: "block",
                                }}
                              >
                                <img
                                  src="/assets/images/blog/3.jpg"
                                  className="img-fluid blur-up lazyload bg-img"
                                  alt="true"
                                  style={{ display: "none" }}
                                />
                              </div>
                              <span />
                            </div>
                          </a>
                          <div className="blog-details">
                            <h4>25 January 2018</h4>
                            <a href="fake" tabIndex={-1}>
                              <p>
                                Lorem ipsum dolor sit consectetur adipiscing
                                elit,
                              </p>
                            </a>
                            <hr className="style1" />
                            <h6>by: John Dio , 2 Comment</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={8}
                      aria-hidden="true"
                      style={{ width: 457 }}
                      tabIndex={-1}
                    >
                      <div>
                        <div
                          className="col-md-12"
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <a href="fake" tabIndex={-1}>
                            <div className="classic-effect">
                              <div
                                className="bg-size blur-up lazyloaded"
                                style={{
                                  backgroundImage:
                                    'url("/assets/images/blog/4.jpg")',
                                  backgroundSize: "cover",
                                  backgroundPosition: "center center",
                                  display: "block",
                                }}
                              >
                                <img
                                  src="/assets/images/blog/4.jpg"
                                  className="img-fluid blur-up lazyload bg-img"
                                  alt="true"
                                  style={{ display: "none" }}
                                />
                              </div>
                              <span />
                            </div>
                          </a>
                          <div className="blog-details">
                            <h4>25 January 2018</h4>
                            <a href="fake" tabIndex={-1}>
                              <p>
                                Lorem ipsum dolor sit consectetur adipiscing
                                elit,
                              </p>
                            </a>
                            <hr className="style1" />
                            <h6>by: John Dio , 2 Comment</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={9}
                      aria-hidden="true"
                      style={{ width: 457 }}
                      tabIndex={-1}
                    >
                      <div>
                        <div
                          className="col-md-12"
                          style={{ width: "100%", display: "inline-block" }}
                        >
                          <a href="fake" tabIndex={-1}>
                            <div className="classic-effect">
                              <div
                                className="bg-size blur-up lazyload"
                                style={{
                                  backgroundImage:
                                    'url("/assets/images/blog/5.jpg")',
                                  backgroundSize: "cover",
                                  backgroundPosition: "center center",
                                  display: "block",
                                }}
                              >
                                <img
                                  src="/assets/images/blog/5.jpg"
                                  className="img-fluid blur-up lazyload bg-img"
                                  alt="true"
                                  style={{ display: "none" }}
                                />
                              </div>
                              <span />
                            </div>
                          </a>
                          <div className="blog-details">
                            <h4>25 January 2018</h4>
                            <a href="fake" tabIndex={-1}>
                              <p>
                                Lorem ipsum dolor sit consectetur adipiscing
                                elit,
                              </p>
                            </a>
                            <hr className="style1" />
                            <h6>by: John Dio , 2 Comment</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="slick-next "
                  aria-label="Next"
                  type="button"
                  style={{ display: "inline-block" }}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="instagram ratio_square">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 p-0">
              <h2 className="title-borderless"># instagram</h2>
              <div className="slide-7 no-arrow slick-instagram slick-initialized slick-slider">
                <button
                  className="slick-prev "
                  aria-label="Previous"
                  type="button"
                  style={{ display: "inline-block" }}
                >
                  Previous
                </button>
                <div className="slick-list draggable">
                  <div
                    className="slick-track"
                    style={{
                      opacity: 1,
                      width: 5150,
                      transform: "translate3d(-1442px, 0px, 0px)",
                    }}
                  >
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={-7}
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 206 }}
                    >
                      <div>
                        <div style={{ width: "100%", display: "inline-block" }}>
                          <a href="fake" tabIndex={-1}>
                            <div
                              className="instagram-box bg-size"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/slider/4.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/slider/4.jpg"
                                className="bg-img"
                                alt="true"
                                style={{ width: "100%", display: "none" }}
                              />
                              <div className="overlay">
                                <i
                                  className="fa fa-instagram"
                                  aria-hidden="true"
                                />
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={-6}
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 206 }}
                    >
                      <div>
                        <div style={{ width: "100%", display: "inline-block" }}>
                          <a href="fake" tabIndex={-1}>
                            <div
                              className="instagram-box bg-size"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/slider/9.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/slider/9.jpg"
                                className="bg-img"
                                alt="true"
                                style={{ width: "100%", display: "none" }}
                              />
                              <div className="overlay">
                                <i
                                  className="fa fa-instagram"
                                  aria-hidden="true"
                                />
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={-5}
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 206 }}
                    >
                      <div>
                        <div style={{ width: "100%", display: "inline-block" }}>
                          <a href="fake" tabIndex={-1}>
                            <div
                              className="instagram-box bg-size"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/slider/6.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/slider/6.jpg"
                                className="bg-img"
                                alt="true"
                                style={{ width: "100%", display: "none" }}
                              />
                              <div className="overlay">
                                <i
                                  className="fa fa-instagram"
                                  aria-hidden="true"
                                />
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={-4}
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 206 }}
                    >
                      <div>
                        <div style={{ width: "100%", display: "inline-block" }}>
                          <a href="fake" tabIndex={-1}>
                            <div
                              className="instagram-box bg-size"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/slider/7.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/slider/7.jpg"
                                className="bg-img"
                                alt="true"
                                style={{ width: "100%", display: "none" }}
                              />
                              <div className="overlay">
                                <i
                                  className="fa fa-instagram"
                                  aria-hidden="true"
                                />
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={-3}
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 206 }}
                    >
                      <div>
                        <div style={{ width: "100%", display: "inline-block" }}>
                          <a href="fake" tabIndex={-1}>
                            <div
                              className="instagram-box bg-size"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/slider/8.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/slider/8.jpg"
                                className="bg-img"
                                alt="true"
                                style={{ width: "100%", display: "none" }}
                              />
                              <div className="overlay">
                                <i
                                  className="fa fa-instagram"
                                  aria-hidden="true"
                                />
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={-2}
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 206 }}
                    >
                      <div>
                        <div style={{ width: "100%", display: "inline-block" }}>
                          <a href="fake" tabIndex={-1}>
                            <div
                              className="instagram-box bg-size"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/slider/9.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/slider/9.jpg"
                                className="bg-img"
                                alt="true"
                                style={{ width: "100%", display: "none" }}
                              />
                              <div className="overlay">
                                <i
                                  className="fa fa-instagram"
                                  aria-hidden="true"
                                />
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={-1}
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 206 }}
                    >
                      <div>
                        <div style={{ width: "100%", display: "inline-block" }}>
                          <a href="fake" tabIndex={-1}>
                            <div
                              className="instagram-box bg-size"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/slider/2.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/slider/2.jpg"
                                className="bg-img"
                                alt="true"
                                style={{ width: "100%", display: "none" }}
                              />
                              <div className="overlay">
                                <i
                                  className="fa fa-instagram"
                                  aria-hidden="true"
                                />
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-current slick-active"
                      data-slick-index={0}
                      aria-hidden="false"
                      style={{ width: 206 }}
                    >
                      <div>
                        <div style={{ width: "100%", display: "inline-block" }}>
                          <a href="fake" tabIndex={0}>
                            <div
                              className="instagram-box bg-size"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/slider/2.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/slider/2.jpg"
                                className="bg-img"
                                alt="true"
                                style={{ width: "100%", display: "none" }}
                              />
                              <div className="overlay">
                                <i
                                  className="fa fa-instagram"
                                  aria-hidden="true"
                                />
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-active"
                      data-slick-index={1}
                      aria-hidden="false"
                      style={{ width: 206 }}
                    >
                      <div>
                        <div style={{ width: "100%", display: "inline-block" }}>
                          <a href="fake" tabIndex={0}>
                            <div
                              className="instagram-box bg-size"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/slider/3.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/slider/3.jpg"
                                className="bg-img"
                                alt="true"
                                style={{ width: "100%", display: "none" }}
                              />
                              <div className="overlay">
                                <i
                                  className="fa fa-instagram"
                                  aria-hidden="true"
                                />
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-active"
                      data-slick-index={2}
                      aria-hidden="false"
                      style={{ width: 206 }}
                    >
                      <div>
                        <div style={{ width: "100%", display: "inline-block" }}>
                          <a href="fake" tabIndex={0}>
                            <div
                              className="instagram-box bg-size"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/slider/4.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/slider/4.jpg"
                                className="bg-img"
                                alt="true"
                                style={{ width: "100%", display: "none" }}
                              />
                              <div className="overlay">
                                <i
                                  className="fa fa-instagram"
                                  aria-hidden="true"
                                />
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-active"
                      data-slick-index={3}
                      aria-hidden="false"
                      style={{ width: 206 }}
                    >
                      <div>
                        <div style={{ width: "100%", display: "inline-block" }}>
                          <a href="fake" tabIndex={0}>
                            <div
                              className="instagram-box bg-size"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/slider/9.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/slider/9.jpg"
                                className="bg-img"
                                alt="true"
                                style={{ width: "100%", display: "none" }}
                              />
                              <div className="overlay">
                                <i
                                  className="fa fa-instagram"
                                  aria-hidden="true"
                                />
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-active"
                      data-slick-index={4}
                      aria-hidden="false"
                      style={{ width: 206 }}
                    >
                      <div>
                        <div style={{ width: "100%", display: "inline-block" }}>
                          <a href="fake" tabIndex={0}>
                            <div
                              className="instagram-box bg-size"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/slider/6.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/slider/6.jpg"
                                className="bg-img"
                                alt="true"
                                style={{ width: "100%", display: "none" }}
                              />
                              <div className="overlay">
                                <i
                                  className="fa fa-instagram"
                                  aria-hidden="true"
                                />
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-active"
                      data-slick-index={5}
                      aria-hidden="false"
                      style={{ width: 206 }}
                    >
                      <div>
                        <div style={{ width: "100%", display: "inline-block" }}>
                          <a href="fake" tabIndex={0}>
                            <div
                              className="instagram-box bg-size"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/slider/7.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/slider/7.jpg"
                                className="bg-img"
                                alt="true"
                                style={{ width: "100%", display: "none" }}
                              />
                              <div className="overlay">
                                <i
                                  className="fa fa-instagram"
                                  aria-hidden="true"
                                />
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-active"
                      data-slick-index={6}
                      aria-hidden="false"
                      style={{ width: 206 }}
                    >
                      <div>
                        <div style={{ width: "100%", display: "inline-block" }}>
                          <a href="fake" tabIndex={0}>
                            <div
                              className="instagram-box bg-size"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/slider/8.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/slider/8.jpg"
                                className="bg-img"
                                alt="true"
                                style={{ width: "100%", display: "none" }}
                              />
                              <div className="overlay">
                                <i
                                  className="fa fa-instagram"
                                  aria-hidden="true"
                                />
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide"
                      data-slick-index={7}
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 206 }}
                    >
                      <div>
                        <div style={{ width: "100%", display: "inline-block" }}>
                          <a href="fake" tabIndex={-1}>
                            <div
                              className="instagram-box bg-size"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/slider/9.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/slider/9.jpg"
                                className="bg-img"
                                alt="true"
                                style={{ width: "100%", display: "none" }}
                              />
                              <div className="overlay">
                                <i
                                  className="fa fa-instagram"
                                  aria-hidden="true"
                                />
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide"
                      data-slick-index={8}
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 206 }}
                    >
                      <div>
                        <div style={{ width: "100%", display: "inline-block" }}>
                          <a href="fake" tabIndex={-1}>
                            <div
                              className="instagram-box bg-size"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/slider/2.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/slider/2.jpg"
                                className="bg-img"
                                alt="true"
                                style={{ width: "100%", display: "none" }}
                              />
                              <div className="overlay">
                                <i
                                  className="fa fa-instagram"
                                  aria-hidden="true"
                                />
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={9}
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 206 }}
                    >
                      <div>
                        <div style={{ width: "100%", display: "inline-block" }}>
                          <a href="fake" tabIndex={-1}>
                            <div
                              className="instagram-box bg-size"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/slider/2.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/slider/2.jpg"
                                className="bg-img"
                                alt="true"
                                style={{ width: "100%", display: "none" }}
                              />
                              <div className="overlay">
                                <i
                                  className="fa fa-instagram"
                                  aria-hidden="true"
                                />
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={10}
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 206 }}
                    >
                      <div>
                        <div style={{ width: "100%", display: "inline-block" }}>
                          <a href="fake" tabIndex={-1}>
                            <div
                              className="instagram-box bg-size"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/slider/3.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/slider/3.jpg"
                                className="bg-img"
                                alt="true"
                                style={{ width: "100%", display: "none" }}
                              />
                              <div className="overlay">
                                <i
                                  className="fa fa-instagram"
                                  aria-hidden="true"
                                />
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={11}
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 206 }}
                    >
                      <div>
                        <div style={{ width: "100%", display: "inline-block" }}>
                          <a href="fake" tabIndex={-1}>
                            <div
                              className="instagram-box bg-size"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/slider/4.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/slider/4.jpg"
                                className="bg-img"
                                alt="true"
                                style={{ width: "100%", display: "none" }}
                              />
                              <div className="overlay">
                                <i
                                  className="fa fa-instagram"
                                  aria-hidden="true"
                                />
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={12}
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 206 }}
                    >
                      <div>
                        <div style={{ width: "100%", display: "inline-block" }}>
                          <a href="fake" tabIndex={-1}>
                            <div
                              className="instagram-box bg-size"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/slider/9.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/slider/9.jpg"
                                className="bg-img"
                                alt="true"
                                style={{ width: "100%", display: "none" }}
                              />
                              <div className="overlay">
                                <i
                                  className="fa fa-instagram"
                                  aria-hidden="true"
                                />
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={13}
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 206 }}
                    >
                      <div>
                        <div style={{ width: "100%", display: "inline-block" }}>
                          <a href="fake" tabIndex={-1}>
                            <div
                              className="instagram-box bg-size"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/slider/6.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/slider/6.jpg"
                                className="bg-img"
                                alt="true"
                                style={{ width: "100%", display: "none" }}
                              />
                              <div className="overlay">
                                <i
                                  className="fa fa-instagram"
                                  aria-hidden="true"
                                />
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={14}
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 206 }}
                    >
                      <div>
                        <div style={{ width: "100%", display: "inline-block" }}>
                          <a href="fake" tabIndex={-1}>
                            <div
                              className="instagram-box bg-size"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/slider/7.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/slider/7.jpg"
                                className="bg-img"
                                alt="true"
                                style={{ width: "100%", display: "none" }}
                              />
                              <div className="overlay">
                                <i
                                  className="fa fa-instagram"
                                  aria-hidden="true"
                                />
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={15}
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 206 }}
                    >
                      <div>
                        <div style={{ width: "100%", display: "inline-block" }}>
                          <a href="fake" tabIndex={-1}>
                            <div
                              className="instagram-box bg-size"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/slider/8.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/slider/8.jpg"
                                className="bg-img"
                                alt="true"
                                style={{ width: "100%", display: "none" }}
                              />
                              <div className="overlay">
                                <i
                                  className="fa fa-instagram"
                                  aria-hidden="true"
                                />
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={16}
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 206 }}
                    >
                      <div>
                        <div style={{ width: "100%", display: "inline-block" }}>
                          <a href="fake" tabIndex={-1}>
                            <div
                              className="instagram-box bg-size"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/slider/9.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/slider/9.jpg"
                                className="bg-img"
                                alt="true"
                                style={{ width: "100%", display: "none" }}
                              />
                              <div className="overlay">
                                <i
                                  className="fa fa-instagram"
                                  aria-hidden="true"
                                />
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={17}
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 206 }}
                    >
                      <div>
                        <div style={{ width: "100%", display: "inline-block" }}>
                          <a href="fake" tabIndex={-1}>
                            <div
                              className="instagram-box bg-size"
                              style={{
                                backgroundImage:
                                  'url("/assets/images/slider/2.jpg")',
                                backgroundSize: "cover",
                                backgroundPosition: "center center",
                                display: "block",
                              }}
                            >
                              <img
                                src="/assets/images/slider/2.jpg"
                                className="bg-img"
                                alt="true"
                                style={{ width: "100%", display: "none" }}
                              />
                              <div className="overlay">
                                <i
                                  className="fa fa-instagram"
                                  aria-hidden="true"
                                />
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="slick-next "
                  aria-label="Next"
                  type="button"
                  style={{ display: "inline-block" }}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-b-space">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="slide-6 no-arrow slick-initialized slick-slider">
                <button
                  className="slick-prev "
                  aria-label="Previous"
                  type="button"
                  style={{ display: "inline-block" }}
                >
                  Previous
                </button>
                <div className="slick-list draggable">
                  <div
                    className="slick-track"
                    style={{
                      opacity: 1,
                      width: 5038,
                      transform: "translate3d(-1374px, 0px, 0px)",
                    }}
                  >
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={-6}
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 229 }}
                    >
                      <div>
                        <div style={{ width: "100%", display: "inline-block" }}>
                          <div className="logo-block">
                            <a href="fake" tabIndex={-1}>
                              <img
                                src="/assets/images/logos/3.png"
                                alt="true"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={-5}
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 229 }}
                    >
                      <div>
                        <div style={{ width: "100%", display: "inline-block" }}>
                          <div className="logo-block">
                            <a href="fake" tabIndex={-1}>
                              <img
                                src="/assets/images/logos/4.png"
                                alt="true"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={-4}
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 229 }}
                    >
                      <div>
                        <div style={{ width: "100%", display: "inline-block" }}>
                          <div className="logo-block">
                            <a href="fake" tabIndex={-1}>
                              <img
                                src="/assets/images/logos/5.png"
                                alt="true"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={-3}
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 229 }}
                    >
                      <div>
                        <div style={{ width: "100%", display: "inline-block" }}>
                          <div className="logo-block">
                            <a href="fake" tabIndex={-1}>
                              <img
                                src="/assets/images/logos/6.png"
                                alt="true"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={-2}
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 229 }}
                    >
                      <div>
                        <div style={{ width: "100%", display: "inline-block" }}>
                          <div className="logo-block">
                            <a href="fake" tabIndex={-1}>
                              <img
                                src="/assets/images/logos/7.png"
                                alt="true"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={-1}
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 229 }}
                    >
                      <div>
                        <div style={{ width: "100%", display: "inline-block" }}>
                          <div className="logo-block">
                            <a href="fake" tabIndex={-1}>
                              <img
                                src="/assets/images/logos/8.png"
                                alt="true"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-current slick-active"
                      data-slick-index={0}
                      aria-hidden="false"
                      style={{ width: 229 }}
                    >
                      <div>
                        <div style={{ width: "100%", display: "inline-block" }}>
                          <div className="logo-block">
                            <a href="fake" tabIndex={0}>
                              <img
                                src="/assets/images/logos/1.png"
                                alt="true"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-active"
                      data-slick-index={1}
                      aria-hidden="false"
                      style={{ width: 229 }}
                    >
                      <div>
                        <div style={{ width: "100%", display: "inline-block" }}>
                          <div className="logo-block">
                            <a href="fake" tabIndex={0}>
                              <img
                                src="/assets/images/logos/2.png"
                                alt="true"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-active"
                      data-slick-index={2}
                      aria-hidden="false"
                      style={{ width: 229 }}
                    >
                      <div>
                        <div style={{ width: "100%", display: "inline-block" }}>
                          <div className="logo-block">
                            <a href="fake" tabIndex={0}>
                              <img
                                src="/assets/images/logos/3.png"
                                alt="true"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-active"
                      data-slick-index={3}
                      aria-hidden="false"
                      style={{ width: 229 }}
                    >
                      <div>
                        <div style={{ width: "100%", display: "inline-block" }}>
                          <div className="logo-block">
                            <a href="fake" tabIndex={0}>
                              <img
                                src="/assets/images/logos/4.png"
                                alt="true"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-active"
                      data-slick-index={4}
                      aria-hidden="false"
                      style={{ width: 229 }}
                    >
                      <div>
                        <div style={{ width: "100%", display: "inline-block" }}>
                          <div className="logo-block">
                            <a href="fake" tabIndex={0}>
                              <img
                                src="/assets/images/logos/5.png"
                                alt="true"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-active"
                      data-slick-index={5}
                      aria-hidden="false"
                      style={{ width: 229 }}
                    >
                      <div>
                        <div style={{ width: "100%", display: "inline-block" }}>
                          <div className="logo-block">
                            <a href="fake" tabIndex={0}>
                              <img
                                src="/assets/images/logos/6.png"
                                alt="true"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide"
                      data-slick-index={6}
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 229 }}
                    >
                      <div>
                        <div style={{ width: "100%", display: "inline-block" }}>
                          <div className="logo-block">
                            <a href="fake" tabIndex={-1}>
                              <img
                                src="/assets/images/logos/7.png"
                                alt="true"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide"
                      data-slick-index={7}
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 229 }}
                    >
                      <div>
                        <div style={{ width: "100%", display: "inline-block" }}>
                          <div className="logo-block">
                            <a href="fake" tabIndex={-1}>
                              <img
                                src="/assets/images/logos/8.png"
                                alt="true"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={8}
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 229 }}
                    >
                      <div>
                        <div style={{ width: "100%", display: "inline-block" }}>
                          <div className="logo-block">
                            <a href="fake" tabIndex={-1}>
                              <img
                                src="/assets/images/logos/1.png"
                                alt="true"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={9}
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 229 }}
                    >
                      <div>
                        <div style={{ width: "100%", display: "inline-block" }}>
                          <div className="logo-block">
                            <a href="fake" tabIndex={-1}>
                              <img
                                src="/assets/images/logos/2.png"
                                alt="true"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={10}
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 229 }}
                    >
                      <div>
                        <div style={{ width: "100%", display: "inline-block" }}>
                          <div className="logo-block">
                            <a href="fake" tabIndex={-1}>
                              <img
                                src="/assets/images/logos/3.png"
                                alt="true"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={11}
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 229 }}
                    >
                      <div>
                        <div style={{ width: "100%", display: "inline-block" }}>
                          <div className="logo-block">
                            <a href="fake" tabIndex={-1}>
                              <img
                                src="/assets/images/logos/4.png"
                                alt="true"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={12}
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 229 }}
                    >
                      <div>
                        <div style={{ width: "100%", display: "inline-block" }}>
                          <div className="logo-block">
                            <a href="fake" tabIndex={-1}>
                              <img
                                src="/assets/images/logos/5.png"
                                alt="true"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={13}
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 229 }}
                    >
                      <div>
                        <div style={{ width: "100%", display: "inline-block" }}>
                          <div className="logo-block">
                            <a href="fake" tabIndex={-1}>
                              <img
                                src="/assets/images/logos/6.png"
                                alt="true"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={14}
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 229 }}
                    >
                      <div>
                        <div style={{ width: "100%", display: "inline-block" }}>
                          <div className="logo-block">
                            <a href="fake" tabIndex={-1}>
                              <img
                                src="/assets/images/logos/7.png"
                                alt="true"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="slick-slide slick-cloned"
                      data-slick-index={15}
                      aria-hidden="true"
                      tabIndex={-1}
                      style={{ width: 229 }}
                    >
                      <div>
                        <div style={{ width: "100%", display: "inline-block" }}>
                          <div className="logo-block">
                            <a href="fake" tabIndex={-1}>
                              <img
                                src="/assets/images/logos/8.png"
                                alt="true"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  className="slick-next "
                  aria-label="Next"
                  type="button"
                  style={{ display: "inline-block" }}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className="modal fade bd-example-modal-lg theme-modal"
        id="quick-view"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
          <div className="modal-content quick-view-modal">
            <div className="modal-body">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
              <div className="row">
                <div className="col-lg-6 col-xs-12">
                  <div className="quick-view-img">
                    <img
                      src="/assets/images/pro3/1.jpg"
                      alt
                      className="img-fluid blur-up lazyload"
                    />
                  </div>
                </div>
                <div className="col-lg-6 rtl-text">
                  <div className="product-right">
                    <h2>Women Pink Shirt</h2>
                    <h3>$32.96</h3>
                    <ul className="color-variant">
                      <li className="bg-light0" />
                      <li className="bg-light1" />
                      <li className="bg-light2" />
                    </ul>
                    <div className="border-product">
                      <h6 className="product-title">product details</h6>
                      <p>
                        Sed ut perspiciatis, unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium
                      </p>
                    </div>
                    <div className="product-description border-product">
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
                      <h6 className="product-title">quantity</h6>
                      <div className="qty-box">
                        <div className="input-group">
                          <span className="input-group-prepend">
                            <button
                              type="button"
                              className="btn quantity-left-minus"
                              data-type="minus"
                              data-field
                            >
                              <i className="ti-angle-left" />
                            </button>{" "}
                          </span>
                          <input
                            type="text"
                            name="quantity"
                            className="form-control input-number"
                            defaultValue={1}
                          />{" "}
                          <span className="input-group-prepend">
                            <button
                              type="button"
                              className="btn quantity-right-plus"
                              data-type="plus"
                              data-field
                            >
                              <i className="ti-angle-right" />
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="product-buttons">
                      <a href="#" className="btn btn-solid">
                        add to cart
                      </a>{" "}
                      <a href="#" className="btn btn-solid">
                        view detail
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
