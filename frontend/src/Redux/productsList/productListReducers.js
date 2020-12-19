import * as A from "./productListActionsType";
 const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case A.PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case A.PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case A.PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export default productListReducer