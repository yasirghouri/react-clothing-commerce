import { takeLatest, put, all, call } from "redux-saga/effects";

import {
  GOOGLE_SIGN_IN_FAILURE,
  GOOGLE_SIGN_IN_SUCCESS,
  GOOGLE_SIGN_IN_START,
  EMAIL_SIGN_IN_FAILURE,
  EMAIL_SIGN_IN_SUCCESS,
  EMAIL_SIGN_IN_START,
} from "../actionTypes";
import { googleSignInSuccess, googleSignInFailure } from "./userActions";
import {
  auth,
  googleProvider,
  createUserProfileDocument,
} from "../../firebase/firebase";

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    const userRef = yield call(createUserProfileDocument, user);
    const userSnapshot = yield userRef.get();
    yield put(
      googleSignInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    );
  } catch (error) {
    yield put(googleSignInFailure(error));
  }
}

export function* onGoogleSignInStart() {
  yield takeLatest(GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSagas() {
  yield all([call(onGoogleSignInStart)]);
}
