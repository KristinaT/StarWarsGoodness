import * as actionTypes from "../../Constants/action-types";

const initialState = {
  searchedItem: { text: "", key: "" },
  foundDetails: null
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SEARCHED_ITEM:
      return {
        ...state,
        searchedItem: { text: action.payload.text, key: action.payload.key }
      };
    case actionTypes.SET_FOUND_DETAILS:
      return { ...state, foundDetails: action.payload };
    default:
      return state;
  }
};
export default rootReducer;
