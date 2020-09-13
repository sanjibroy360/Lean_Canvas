// KEY_METRICS
import {
  ADD_KEY_METRICS,
  EDIT_KEY_METRICS,
  REORDER_KEY_METRICS,
  DELETE_KEY_METRICS,
} from "../action/types";
let initialState = [];

function keyMetricsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_KEY_METRICS:
      return [...state, action.payload];
    case EDIT_KEY_METRICS:
      state = state.map((point) => {
        if (point.id === action.payload.id) {
          return action.payload;
        }
        return point;
      });
      return [...state];

    case REORDER_KEY_METRICS:
      return [...action.payload];

    case DELETE_KEY_METRICS:
      return state.filter((topic) => topic.id !== action.payload.id);
    default:
      return state;
  }
}

export default keyMetricsReducer;
