import { ADD_PROBLEM } from "../action/types";
let initialState = [];

function problemReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PROBLEM:
      return [...state, action.payload];
    default:
      return state;
  }
}

export default problemReducer;
