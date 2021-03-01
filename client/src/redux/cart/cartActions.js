import {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM,
  CLEAR_CART,
  SET_CART_FROM_FIREBASE,
  UPDATE_CART_IN_FIREBASE,
} from "../actionTypes";

export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN,
});

export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

export const removeItem = (item) => ({
  type: REMOVE_ITEM,
  payload: item,
});

export const clearItemFromCart = (item) => ({
  type: CLEAR_ITEM_FROM_CART,
  payload: item,
});

export const clearCart = () => ({
  type: CLEAR_CART,
});

export const updateCartInFirebase = () => ({
  type: UPDATE_CART_IN_FIREBASE,
});

export const setCartFromFirebase = (cartItems) => ({
  type: SET_CART_FROM_FIREBASE,
  payload: cartItems,
});
