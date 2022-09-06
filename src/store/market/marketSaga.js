import { takeEvery, takeLatest } from "redux-saga/effects";
import {
  DATA_REQUEST,
  ADD_PRODUCT_REQUEST,
  DATA_CART_REQUEST,
  REMOVE_PRODUCT_REQUEST,
  BOUGHT_PRODUCT_REQUEST,
  DATA_BOUGHT_REQUEST,
  REMOVE_BOUGHT_REQUEST,
} from "./marketActionTypes";
import {
  getMarket,
  addProduct,
  getCart,
  removeProduct,
  boughtProduct,
  removeBought,
  getBought,
} from "./marketAction";
export default function* watchMarketActions() {
  yield takeLatest(DATA_REQUEST, getMarket);
  yield takeLatest(DATA_CART_REQUEST, getCart);
  yield takeEvery(ADD_PRODUCT_REQUEST, addProduct);
  yield takeEvery(REMOVE_PRODUCT_REQUEST, removeProduct);
  yield takeLatest(DATA_BOUGHT_REQUEST, getBought);
  yield takeEvery(BOUGHT_PRODUCT_REQUEST, boughtProduct);
  yield takeEvery(REMOVE_BOUGHT_REQUEST, removeBought);

}
