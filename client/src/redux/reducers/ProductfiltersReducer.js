export default function productfilterReducer(state = [], action) {
    switch (action.type) {
      case "LOAD_PRODUCTSFILTER_SUCCESS":
        return action.productfilters;
      
      default:
        return state;
    }
}