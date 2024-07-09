import { SET_SEARCH_RESULTS } from "../action/actionRename";

const initialState = {
  results: [],
};

const searchResultsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SEARCH_RESULTS:
      return {
        ...state,
        results: action.payload,
      };
    default:
      return state;
  }
};

export default searchResultsReducer;
