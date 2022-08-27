import { all } from "redux-saga/effects";
import watchAuthActions from "./auth/authSaga";
import watchMarketActions from "./market/marketSaga"
export default function* rootSaga() {
  yield all([watchAuthActions(),watchMarketActions()]);
}
