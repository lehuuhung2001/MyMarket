import { all } from "redux-saga/effects";
import watchAuthActions from "./auth/authSaga";

export default function* rootSaga() {
  yield all([watchAuthActions()]);
}
