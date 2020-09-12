export function getCardList(topic, state) {
  console.log(state);
  switch (topic) {
    case "Problem":
      return state.problems;
    case "Existing alternative":
      return state.existingAlternative;
    default:
      return [];
  }
}
