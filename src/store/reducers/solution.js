import {
    ADD_SOLUTION,
    EDIT_SOLUTION,
    REORDER_SOLUTION,
    DELETE_SOLUTION,
  } from "../action/types";
  let initialState = [];
  
  function solutionReducer(state = initialState, action) {
    switch (action.type) {
      case ADD_SOLUTION:
        return [...state, action.payload];
      case EDIT_SOLUTION:
        state = state.map((point) => {
          if (point.id === action.payload.id) {
            return action.payload;
          }
          return point;
        });
        return [...state];
  
      case REORDER_SOLUTION:
        return [...action.payload];
  
      case DELETE_SOLUTION:
        return state.filter((topic) => topic.id !== action.payload.id);
      default:
        return state;
    }
  }
  
  export default solutionReducer;
  