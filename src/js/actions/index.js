import * as actionTypes from "../../Constants/action-types";

export const setSearchedItem = searchedItem => ({
  type: actionTypes.SET_SEARCHED_ITEM,
  payload: searchedItem
});

export const setFoundDetails = foundDetails => ({
  type: actionTypes.SET_FOUND_DETAILS,
  payload: foundDetails
})