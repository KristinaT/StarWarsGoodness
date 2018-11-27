import { createStore } from "redux";
import { connect, Provider } from "react-redux";
import { SET_SEARCHED_ITEM } from "../../Constants/action-types";

const initialState = {
  searchedItem: { text: "", key: "" }
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCHED_ITEM:
      return {
        ...state,
        searchedItem: { text: action.payload, key: Date.now() }
      };
    default:
      return state;
  }
};
export default rootReducer;
