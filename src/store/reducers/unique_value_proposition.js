import {
  ADD_UNIQUE_VALUE_PROPOSITION,
  EDIT_UNIQUE_VALUE_PROPOSITION,
  REORDER_UNIQUE_VALUE_PROPOSITION,
  DELETE_UNIQUE_VALUE_PROPOSITION,
} from "../action/types";
let initialState = [];

function uniqueValuePropositionReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_UNIQUE_VALUE_PROPOSITION:
      return [...state, action.payload];
    case EDIT_UNIQUE_VALUE_PROPOSITION:
      state = state.map((point) => {
        if (point.id === action.payload.id) {
          return action.payload;
        }
        return point;
      });
      return [...state];

    case REORDER_UNIQUE_VALUE_PROPOSITION:
      return [...action.payload];

    case DELETE_UNIQUE_VALUE_PROPOSITION:
      return state.filter((topic) => topic.id !== action.payload.id);
    default:
      return state;
  }
}

export default uniqueValuePropositionReducer;
