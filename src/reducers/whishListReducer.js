import {
  wishlist_ADD_PRODUCT,
  wishlist_REMOVE_PRODUCT
} from "../actions/types";

export default function(state = [], action) {
  var product = action.payload;
  switch (action.type) {
    case wishlist_ADD_PRODUCT:
      var exist = false;
      state.forEach(e => {
        if (e._id === product._id) {
          exist = true;
        }
      });

      if (exist) {
        return state;
      } else {
        return [product, ...state];
      }

    case wishlist_REMOVE_PRODUCT:
      state = state.filter(function(e) {
        return e._id !== product._id;
      });
      return state;

    default:
      return state;
  }
}
