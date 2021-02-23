import {
  GOOGLE_SIGN_IN_START,
  EMAIL_SIGN_IN_START,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  CHECK_USER_SESSION,
} from "../actionTypes";

export const googleSignInStart = () => {
  return {
    type: GOOGLE_SIGN_IN_START,
  };
};
export const signInSuccess = (user) => {
  return {
    type: SIGN_IN_SUCCESS,
    payload: user,
  };
};
export const signInFailure = (error) => {
  return {
    type: SIGN_IN_FAILURE,
    payload: error,
  };
};
export const emailSignInStart = (emailAndPassword) => {
  return {
    type: EMAIL_SIGN_IN_START,
    payload: emailAndPassword,
  };
};
export const checkUserSession = () => {
  return {
    type: CHECK_USER_SESSION,
  };
};
