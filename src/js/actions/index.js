import { SET_SEARCHED_ITEM } from "../../Constants/action-types";

export const setSearchedItem = searchedItem => ({
  type: SET_SEARCHED_ITEM,
  payload: searchedItem
});
