import * as types from "./marketActionTypes";
const initValue = {
  loading: false,
  list: [],
  error: null,
};
export default function marketReducer(state = initValue, { type, payload }) {
  switch (type) {
    case types.DATA_REQUEST:
      return {
        list: [],
        loading: true,
        error: null
      }
    case types.DATA_FAILURE:
      return{
        list: [],
        loading: true,
        error: payload
      }
    case types.DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        list: payload
      };
    default:
      return state;
  }
};
