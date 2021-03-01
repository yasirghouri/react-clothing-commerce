import { takeLatest, all, call, put, select } from "redux-saga/effects";

import { clearCart, setCartFromFirebase } from "./cartActions";
import {
  SIGN_OUT_SUCCESS,
  SIGN_IN_SUCCESS,
  ADD_ITEM,
  REMOVE_ITEM,
  CLEAR_ITEM_FROM_CART,
} from "../actionTypes";
import { getUserCartRef } from "../../firebase/firebase";
import { selectCurrentUser } from "../user/userSelectors";
import { selectCartItems } from "./cartSelectors";

export function* updateCartInFirebase() {
  const currentUser = yield select(selectCurrentUser);
  if (currentUser) {
    try {
      const cartRef = yield getUserCartRef(currentUser.id);
      const cartItems = yield select(selectCartItems);
      yield cartRef.update({ cartItems });
    } catch (error) {
      console.log(error);
    }
  }
}

export function* checkCartFromFirebase({ payload: user }) {
  const cartRef = yield getUserCartRef(user.id);
  const cartSnapshot = yield cartRef.get();
  yield put(setCartFromFirebase(cartSnapshot.data().cartItems));
}

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* onUserSignIn() {
  yield takeLatest(SIGN_IN_SUCCESS, checkCartFromFirebase);
}

export function* onCartChange() {
  yield takeLatest(
    [ADD_ITEM, REMOVE_ITEM, CLEAR_ITEM_FROM_CART],
    updateCartInFirebase
  );
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess), call(onCartChange), call(onUserSignIn)]);
}
