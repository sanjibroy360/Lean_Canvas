import {
  ADD_EXISTING_ALTERNATIVE,
  EDIT_EXISTING_ALTERNATIVE,
  REORDER_EXISTING_ALTERNATIVE,
  DELETE_EXISTING_ALTERNATIVE,
} from "../action/types";
let initialState = [];

function existingAlternativeReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_EXISTING_ALTERNATIVE:
      return [...state, action.payload];
    case EDIT_EXISTING_ALTERNATIVE:
      state = state.map((point) => {
        if (point.id === action.payload.id) {
          return action.payload;
        }
        return point;
      });
      console.log({ state });
      return [...state];

    case REORDER_EXISTING_ALTERNATIVE:
      return [...action.payload];
    case DELETE_EXISTING_ALTERNATIVE:
      return state.filter((topic) => topic.id !== action.payload.id);
    default:
      return state;
  }
}

export default existingAlternativeReducer;
