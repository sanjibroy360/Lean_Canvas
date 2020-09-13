import {
  ADD_UNFAIR_ADVANTAGE,
  EDIT_UNFAIR_ADVANTAGE,
  REORDER_UNFAIR_ADVANTAGE,
  DELETE_UNFAIR_ADVANTAGE,
} from "../action/types";

let initialState = [];

function unfairAdvantageReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_UNFAIR_ADVANTAGE:
      return [...state, action.payload];
    case EDIT_UNFAIR_ADVANTAGE:
      state = state.map((point) => {
        if (point.id === action.payload.id) {
          return action.payload;
        }
        return point;
      });
      return [...state];

    case REORDER_UNFAIR_ADVANTAGE:
      return [...action.payload];

    case DELETE_UNFAIR_ADVANTAGE:
      return state.filter((topic) => topic.id !== action.payload.id);
    default:
      return state;
  }
}

export default unfairAdvantageReducer;
