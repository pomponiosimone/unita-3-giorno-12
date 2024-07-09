import { combineReducers } from "redux";
import favouriteReducer from "./index";
import searchResultsReducer from "./searchReducer";

const rootReducer = combineReducers({
  favourite: favouriteReducer,
  searchResults: searchResultsReducer,
});

export default rootReducer;
