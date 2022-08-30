import { takeLatest } from "redux-saga/effects";
import {DATA_REQUEST} from "./marketActionTypes"
import {getMarket} from "./marketAction"
export default function* watchMarketActions() {
  yield takeLatest(DATA_REQUEST, getMarket);
}
