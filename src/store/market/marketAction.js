import { call, put } from "redux-saga/effects";
import * as types from "./marketActionTypes";
import {
  getMarkets as marketsApi,
  addProduct as addApiProduct,
  getCart as cartsApi,
  removeProduct as removeApiProduct,
  getBought as BoughtApi,
  addBought as addApiBought,
  removeBought as removeApiBought
} from "../../services/market";

export function* getMarket() {
  try {
    const response = yield call(marketsApi);
    if (response.status === 200) {
      yield put({
        type: types.DATA_SUCCESS,
        payload: response.data,
      });
    }
  } catch (error) {
    yield put({
      type: types.DATA_FAILURE,
      payload: error,
    });
  }
}


//Cart
export function* addProduct(action) {
  try {
    const response = yield call(addApiProduct, action.payload);
    if (response.status === 201) {
      yield put({
        type: types.ADD_PRODUCT_SUCCESS,
        payload: response.data,
      });
    }
  } catch (error) {
    yield put({
      type: types.ADD_PRODUCT_FAILURE,
      payload: error,
    });
  }
}

export function* getCart() {
  try {
    const response = yield call(cartsApi);
    if (response.status === 200) {
      yield put({
        type: types.DATA_CART_SUCCESS,
        payload: response.data,
      });
    }
  } catch (error) {
    yield put({
      type: types.DATA_CART_FAILURE,
      payload: error,
    });
  }
}

export function* removeProduct({ payload }) {
  try {
    const response = yield call(removeApiProduct, payload);
    if (response.status === 200) {
      yield put({
        type: types.REMOVE_PRODUCT_SUCCESS,
        payload: payload,
      });
    }
  } catch (error) {
    yield put({
      type: types.REMOVE_PRODUCT_FAILURE,
      payload: error,
    });
  }
}

//Bought
export function* boughtProduct(action) {
  try {
    const response = yield call(addApiBought, action.payload);
    if (response.status === 201) {
      yield put({
        type: types.BOUGHT_PRODUCT_SUCCESS,
        payload: response.data,
      });
    }
  } catch (error) {
    yield put({
      type: types.BOUGHT_PRODUCT_FAILURE,
      payload: error,
    });
  }
}

export function* getBought() {
  try {
    const response = yield call(BoughtApi);
    if (response.status === 200) {
      yield put({
        type: types.DATA_BOUGHT_SUCCESS,
        payload: response.data,
      });
    }
  } catch (error) {
    yield put({
      type: types.DATA_BOUGHT_FAILURE,
      payload: error,
    });
  }
}


export function* removeBought({ payload }) {
  try {
    const response = yield call(removeApiBought, payload);
    if (response.status === 200) {
      yield put({
        type: types.REMOVE_BOUGHT_SUCCESS,
        payload: payload,
      });
    }
  } catch (error) {
    yield put({
      type: types.REMOVE_BOUGHT_FAILURE,
      payload: error,
    });
  }
}
