export function getCardList(topic, state) {
  topic = topic.toLowerCase();
  switch (topic) {
    case "problem":
      return state.problems;
    case "existing alternative":
      return state.existingAlternative;
    case "solution":
      return state.solutions;
    case "key metrics":
      return state.keyMetrics;
    case "unique value proposition":
      return state.uniqueValuePropositions;
    case "high level concept":
      return state.highLevelConcepts;
    case "unfair advantage":
      return state.unfairAdvantages
    default:
      return [];
  }
}
