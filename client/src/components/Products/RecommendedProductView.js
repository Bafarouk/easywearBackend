import React from "react";
import { NavLink } from "react-router-dom";

const RecommendedProductView = (props) => {
  return (
    <>
      <div
        className='slick-slide slick-cloned'
        data-slick-index={8}
        aria-hidden='true'
        tabIndex={-1}
        style={{ width: 285 }}
      >
        <div>
          <div
            className='product-box'
            style={{ width: "100%", display: "inline-block" }}
          >
            <div className='img-wrapper'>
              <div className='front'>
                <a
                  href='product-page(no-sidebar).html'
                  className='bg-size blur-up lazyloaded'
                  style={{
                    backgroundImage: `url(${props.product.image_url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    display: "block",
                  }}
                  tabIndex={-1}
                >
                  <img
                    src={props.product.image_url}
                    className='img-fluid blur-up lazyload bg-img'
                    alt
                    style={{ display: "none" }}
                  />
                </a>
              </div>
              <div className='back'>
                <a
                  href='product-page(no-sidebar).html'
                  className='bg-size blur-up lazyloaded'
                  style={{
                    backgroundImage: `url(${props.product.image_url})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center center",
                    display: "block",
                  }}
                  tabIndex={-1}
                >
                  <img
                    src='../assets/images/pro3/36.jpg'
                    className='img-fluid blur-up lazyload bg-img'
                    alt
                    style={{ display: "none" }}
                  />
                </a>
              </div>
              <div className='cart-info cart-wrap'>
                <NavLink
                  to={"/productDetails/" + props.product.id}
                  title='Compare'
                  tabIndex={-1}
                  className='fa fa-eye'
                ></NavLink>
              </div>
            </div>
            <div className='product-detail'>
              <div className='rating'>
                <i className='fa fa-star' /> <i className='fa fa-star' />{" "}
                <i className='fa fa-star' /> <i className='fa fa-star' />{" "}
                <i className='fa fa-star' />
              </div>
              <a href='product-page(no-sidebar).html' tabIndex={-1}>
                <h6>{props.product.productName}</h6>
              </a>
              <h4>{props.product.productPrice}</h4>
              <ul className='color-variant'>
                <li className='bg-light0' />
                <li className='bg-light1' />
                <li className='bg-light2' />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecommendedProductView;
