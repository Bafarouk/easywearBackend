import * as productApi from '../../api/productApi'


const loadBrandSuccess = (productfilters) => {
  return { type: "LOAD_PRODUCTSFILTER_SUCCESS", productfilters };
};


export const loadfilters = () => {
  return function (dispatch) {
    return productApi
      .getfilters()
      .then((productfilters) => {
        dispatch(loadBrandSuccess(productfilters));
      })
      .catch((error) => {
        throw error;
      });
  };
};

