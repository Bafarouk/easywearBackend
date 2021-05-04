import * as productApi from "../../api/productApi";

const loadProductSuccess = (products) => {
  return { type: "LOAD_PRODUCTS_SUCCESS", products };
};

export const loadProducts = (page) => {
  return function (dispatch) {
    return productApi
      .getProducts(page)
      .then((products) => {
        dispatch(loadProductSuccess(products));
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const loadAllProducts = () => {
  return function (dispatch) {
    return productApi
      .getAllProducts()
      .then((products) => {
        dispatch(loadProductSuccess(products));
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const loadProductsbyName = (name) => {
  return function (dispatch) {
    return productApi
      .getProductsbyname(name)
      .then((products) => {
        dispatch(loadProductSuccess(products));
      })
      .catch((error) => {
        throw error;
      });
  };
};
export const loadProductsbybrands = (brands, name) => {
  return function (dispatch) {
    return productApi
      .getProductsbybrands(brands, name)
      .then((products) => {
        dispatch(loadProductSuccess(products));
      })
      .catch((error) => {
        throw error;
      });
  };
};
