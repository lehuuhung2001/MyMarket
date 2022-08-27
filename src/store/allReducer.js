import { combineReducers } from "redux";

import authReducer from "./auth/authReducer";
import marketReducer from "./market/marketReducer";
export default combineReducers({
  auth: authReducer, 
  market: marketReducer
});
