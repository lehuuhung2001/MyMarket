import * as types from "./marketActionTypes";
const initValue = {
 list: []
};
export default function marketReducer(state = initValue, { type, payload }) {
  switch (type) {
    case types.DATA_REQUEST:
    case types.DATA_SUCCESS:
      return {
        ...state,
       list: payload
      };
    case types.DATA_FAILURE:
    default:
      return state;
  }
};
