import shopData from "./shopData";
import { UPDATE_COLLECTIONS } from "../actionTypes";

const initialState = {
  collections: shopData,
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
