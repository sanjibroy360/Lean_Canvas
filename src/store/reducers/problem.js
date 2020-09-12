import { ADD_PROBLEM, EDIT_PROBLEM, REORDER_PROBLEM } from "../action/types";
let initialState = [];

function problemReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PROBLEM:
      return [...state, action.payload];
    case EDIT_PROBLEM:
      state = state.map((point) => {
        if (point.id === action.payload.id) {
          return action.payload;
        }
        return point;
      });
      return [...state];

    case REORDER_PROBLEM: 
      return [...action.payload];
    default:
      return state;
  }
}

export default problemReducer;
