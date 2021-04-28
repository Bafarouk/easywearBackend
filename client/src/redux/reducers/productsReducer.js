export default function productsReducer(state = [], action) {
    switch (action.type) {
      case "LOAD_PRODUCTS_SUCCESS":
        return action.products;
      
      default:
        return state;
    }
}