import { createStore, compose } from "redux";

import {
  ADD_TOPICS,
  ADD_POINT,
  EDIT_POINT,
  REORDER_POINTS,
  DELETE_POINT,
} from "./action/types";

let initialState = {
  projectName: "",
  date: "",
  topics: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TOPICS:
      return { ...state, topics: [...action.payload] };

    case ADD_POINT:
      state.topics = state.topics.map((topic) => {
        if (topic.topicId === action.payload.topicId) {
          return { ...topic, points: [...topic.points, action.payload] };
        }
        return topic;
      });
      return { ...state };

    case EDIT_POINT:
      state.topics = state.topics.map((topic) => {
        if (topic.topicId === action.payload.topicId) {
          topic.points = topic.points.map((point) => {
            if (point.pointId === action.payload.pointId) {
              return action.payload;
            }
            return point;
          });
        }
        return topic;
      });
      return { ...state };

    case REORDER_POINTS:
      state.topics = state.topics.map((topic) => {
        if (topic.topicId === action.payload.topicId) {
          topic.points = action.payload.points;
        }
        return topic;
      });
      return { ...state };

    case DELETE_POINT:
      state.topics = state.topics.map((topic) => {
        if (topic.topicId === action.payload.topicId) {
          topic.points = topic.points.filter(
            (point) => point.pointId !== action.payload.pointId
          );
        }
        return topic;
      });
      return { ...state };

    default:
      return state;
  }
}

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const store = createStore(reducer, composeEnhancers());
