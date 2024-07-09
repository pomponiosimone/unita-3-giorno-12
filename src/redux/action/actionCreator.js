import {
  ADD_TO_FAVOURITE,
  REMOVE_FROM_FAVOURITE,
  SET_SEARCH_RESULTS,
} from "./actionRename";

export const addToFavourite = item => {
  return {
    type: ADD_TO_FAVOURITE,
    payload: item,
  };
};

export const removeFromFavourite = item => {
  return {
    type: REMOVE_FROM_FAVOURITE,
    payload: item,
  };
};

export const setSearchResults = results => {
  return {
    type: SET_SEARCH_RESULTS,
    payload: results,
  };
};
