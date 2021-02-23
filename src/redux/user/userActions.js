import {
  SET_CURRENT_USER,
  GOOGLE_SIGN_IN_START,
  GOOGLE_SIGN_IN_SUCCESS,
  GOOGLE_SIGN_IN_FAILURE,
  EMAIL_SIGN_IN_START,
  EMAIL_SIGN_IN_SUCCESS,
  EMAIL_SIGN_IN_FAILURE,
} from "../actionTypes";

export const setCurrentUser = (user) => {
  return {
    type: SET_CURRENT_USER,
    payload: user,
  };
};

export const googleSignInStart = () => {
  return {
    type: GOOGLE_SIGN_IN_START,
  };
};
export const googleSignInSuccess = (user) => {
  return {
    type: GOOGLE_SIGN_IN_SUCCESS,
    payload: user,
  };
};
export const googleSignInFailure = (error) => {
  return {
    type: GOOGLE_SIGN_IN_FAILURE,
    payload: error,
  };
};
export const emailSignInStart = (emailAndPassword) => {
  return {
    type: EMAIL_SIGN_IN_START,
    payload: emailAndPassword,
  };
};
export const emailSignInSuccess = (user) => {
  return {
    type: EMAIL_SIGN_IN_SUCCESS,
    payload: user,
  };
};
export const emailSignInFailure = (error) => {
  return {
    type: EMAIL_SIGN_IN_FAILURE,
    payload: error,
  };
};
