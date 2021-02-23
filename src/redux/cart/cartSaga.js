import { takeLatest, all, call, put } from "redux-saga/effects";

import { clearCart } from "./cartActions";
import { SIGN_OUT_SUCCESS } from "../actionTypes";

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
