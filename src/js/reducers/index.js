import { SET_SEARCHED_ITEM } from "../../Constants/action-types";

const initialState = {
  searchedItem: { text: "", key: "" }
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCHED_ITEM:
    console.log(action,'actionnnnnnn')
      return {
        ...state,
        searchedItem: { text: action.payload.text, key: action.payload.key}
      };
    default:
      return state;
  }
};
export default rootReducer;
