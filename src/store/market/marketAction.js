import { call, put } from "redux-saga/effects";
import {DATA_FAILURE,DATA_SUCCESS} from "./marketActionTypes"
import { getMarkets as marketsApi } from "../../services/market"

export function* market() {
  try {
    const response = yield call(marketsApi);
    if (response.status === 200) {
      yield put({
        type: DATA_SUCCESS,
        payload: response.data,
      });
    }
  } catch (error) {
    yield put({
      type: DATA_FAILURE,
      payload: error,
    });
  }
}

