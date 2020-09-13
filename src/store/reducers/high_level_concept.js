import {
  ADD_HIGH_LEVEL_CONCEPT,
  EDIT_HIGH_LEVEL_CONCEPT,
  REORDER_HIGH_LEVEL_CONCEPT,
  DELETE_HIGH_LEVEL_CONCEPT,
} from "../action/types";
let initialState = [];

function highLevelConceptReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_HIGH_LEVEL_CONCEPT:
      return [...state, action.payload];
    case EDIT_HIGH_LEVEL_CONCEPT:
      state = state.map((point) => {
        if (point.id === action.payload.id) {
          return action.payload;
        }
        return point;
      });
      return [...state];

    case REORDER_HIGH_LEVEL_CONCEPT:
      return [...action.payload];

    case DELETE_HIGH_LEVEL_CONCEPT:
      return state.filter((topic) => topic.id !== action.payload.id);
    default:
      return state;
  }
}

export default highLevelConceptReducer;
