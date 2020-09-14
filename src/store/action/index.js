import {
  ADD_TOPICS,
  ADD_POINT,
  EDIT_POINT,
  REORDER_POINTS,
  DELETE_POINT,
  TOGGLE_PRESENTATION_MODE
} from "./types";

export function addTopics(payload, dispatch) {
  return dispatch({
    type: ADD_TOPICS,
    payload,
  });
}

export function addPoint(payload, dispatch) {
  return dispatch({
    type: ADD_POINT,
    payload,
  });
}

export function editPoint(payload, dispatch) {
  return dispatch({
    type: EDIT_POINT,
    payload,
  });
}

export function reorderPoints(payload, dispatch) {
  return dispatch({
    type: REORDER_POINTS,
    payload,
  });
}

export function deletePoint(payload, dispatch) {
  return dispatch({
    type: DELETE_POINT,
    payload,
  });
}

export function togglePresentationMode(payload, dispatch) {
  return dispatch({
    type: TOGGLE_PRESENTATION_MODE,
    payload
  })
}