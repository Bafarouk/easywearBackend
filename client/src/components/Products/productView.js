import React from "react";
import { Link, useHistory } from "react-router-dom";

const ProductView = (props) => {
  const history = useHistory();
  const handleGoToProduct = () => {
    history.push("/ProductDetails/" + props.product.id);
  };
  return (
    <>
      <div className='col-xl-2 col-md-4 col-sm-6'>
        <div className='product-box'>
          <div className='img-wrapper'>
            <div className='front'>
              <a
                href='#'
                className='bg-size blur-up lazyloaded'
                style={{
                  backgroundImage: `url(${props.product.image_url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  display: "block",
                }}
              >
                <img
                  src={props.product.image_url}
                  className='img-fluid blur-up lazyload bg-img'
                  style={{ display: "none" }}
                />
              </a>
            </div>
            <div className='back'>
              <a
                href='#'
                className='bg-size blur-up lazyloaded'
                style={{
                  backgroundImage: `url(${props.product.image_url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center center",
                  display: "block",
                }}
              >
                <img
                  src={props.product.image_url}
                  className='img-fluid blur-up lazyload bg-img'
                  style={{ display: "none" }}
                />
              </a>
            </div>
            <div className='cart-info cart-wrap'>
              <button onClick={handleGoToProduct} title='Compare'>
                <i className='fa fa-eye' aria-hidden='true' />
              </button>
            </div>
          </div>
          <div className='product-detail'>
            <a href='product-page(no-sidebar).html'>
              <h6>{props.product.productName}</h6>
            </a>
            <h4>
              {props.product.productPrice}{" "}
              {props.product.productPrice < props.priceCompare ? (
                <p style={{ textShadow: "0 0 10px #fff700" }}>Better Deal</p>
              ) : (
                ""
              )}
            </h4>
            <ul className='color-variant'>
              <li className='bg-light0' />
              <li className='bg-light1' />
              <li className='bg-light2' />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductView;
