export function addPoint(payload, dispatch) {
  let type = "ADD_" + payload.topic.toUpperCase().split(" ").join("_");
  return dispatch({
    type,
    payload,
  });
}

export function editPoint(payload, dispatch) {
  let type = "EDIT_" + payload.topic.toUpperCase().split(" ").join("_");
  return dispatch({
    type,
    payload,
  });
}

export function reorderPoints(payload, topic, dispatch) {
  let type = "REORDER_" + topic.toUpperCase().split(" ").join("_");
  return dispatch({
    type,
    payload,
  });
}
