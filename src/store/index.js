import { createStore, combineReducers, compose } from "redux";
import problemReducer from "../store/reducers/problem";
import existingAlternativeReducer from "../store/reducers/alternative";

var rootReducer = combineReducers({
  problems: problemReducer,
  existingAlternative: existingAlternativeReducer,
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(rootReducer, composeEnhancers());
