import { createStore, combineReducers } from "redux";

var rootReducer = combineReducers({
  key: reducerName,
});

export const store = createStore(rootReducer);
