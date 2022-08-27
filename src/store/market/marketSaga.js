import { takeLatest } from "redux-saga/effects";
import {DATA_REQUEST} from "./marketActionTypes"
import {market} from "./marketAction"
export default function* watchMarketActions() {
  yield takeLatest(DATA_REQUEST, market);
}
