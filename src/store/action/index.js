export function addProblem(point, topic, dispatch) {
  let type = "ADD_" + topic.toUpperCase().split(" ").join("_");
  return dispatch({
    type,
    payload: point,
  });
}
