import { createStore, combineReducers, compose } from "redux";
import problemReducer from "./reducers/problem";
import existingAlternativeReducer from "./reducers/existing_alternative";
import solutionReducer from "./reducers/solution";
import keyMetricsReducer from "./reducers/key_metrics";
import uniqueValuePropositionReducer from "./reducers/unique_value_proposition";
import highLevelConceptReducer from "./reducers/high_level_concept";
import unfairAdvantageReducer from "./reducers/unfair_advantage";

var rootReducer = combineReducers({
  problems: problemReducer,
  existingAlternative: existingAlternativeReducer,
  solutions: solutionReducer,
  keyMetrics: keyMetricsReducer,
  uniqueValuePropositions: uniqueValuePropositionReducer,
  highLevelConcepts: highLevelConceptReducer,
  unfairAdvantages: unfairAdvantageReducer,
});

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(rootReducer, composeEnhancers());
