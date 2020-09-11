import { ADD_EXISTING_ALTERNATIVE } from "../action/types";
let initialState = [];

function existingAlternativeReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_EXISTING_ALTERNATIVE:
      return [...state, action.payload];
    default:
      return state;
  }
}

export default existingAlternativeReducer;
