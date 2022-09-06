import * as types from "./marketActionTypes";
const initValue = {
  loading: false,
  list: [],
  error: null,
  cart: [],
  bought: [],
};
export default function marketReducer(state = initValue, { type, payload }) {
  switch (type) {
    case types.DATA_REQUEST:
    case types.ADD_PRODUCT_REQUEST:
    case types.DATA_CART_REQUEST:
    case types.REMOVE_PRODUCT_REQUEST:
    case types.DATA_BOUGHT_REQUEST:
    case types.BOUGHT_PRODUCT_REQUEST:
    case types.REMOVE_BOUGHT_REQUEST:
      return {
        list: [],
        loading: true,
        error: null,
        cart: [],
      };
    case types.DATA_FAILURE:
    case types.ADD_PRODUCT_FAILURE:
    case types.DATA_CART_FAILURE:
    case types.REMOVE_PRODUCT_FAILURE:
    case types.DATA_BOUGHT_FAILURE:
    case types.BOUGHT_PRODUCT_FAILURE:
    case types.REMOVE_BOUGHT_FAILURE:
      return {
        list: [],
        loading: true,
        error: payload,
        cart: [],
      };
    case types.DATA_SUCCESS:
    case types.DATA_CART_SUCCESS:
    case types.DATA_BOUGHT_SUCCESS:
      return {
        ...state,
        loading: false,
        list: payload,
        cart: payload,
        bought: payload,
      };
    case types.ADD_PRODUCT_SUCCESS:
    case types.BOUGHT_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        cart: [...state.cart, payload],
        bought: [...state.bought, payload],
      };
    case types.REMOVE_PRODUCT_SUCCESS:
    case types.REMOVE_BOUGHT_SUCCESS:
      return {
        ...state,
        loading: false,
        cart: state.cart.filter((product) => product.id !== payload.id),
        bought: state.bought.filter((product) => product.id !== payload.id),
      };
    default:
      return state;
  }
}
