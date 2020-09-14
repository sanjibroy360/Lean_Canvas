import React, { Component } from "react";
import LeanCanvasBoard from "./LeanCanvas/LeanCanvasBoard";
import { connect } from "react-redux";
import uuid from "react-uuid";
import { addTopics } from "../store/action";
import Home from "./HomePage/Home";

class App extends Component {
  componentDidMount() {
    let topics = [
      "Problem",
      "Existing alternative",
      "Solution",
      "Key Metrics",
      "Unique value proposition",
      "High-Level concept",
      "Unfair advantage",
      "Channels",
      "Customer segment",
      "Early addopters",
      "Cost structure",
      "Revenue streams",
    ];
    let payload = topics.map((topic) => {
      return {
        topicId: uuid(),
        topicName: topic,
        points: [],
      };
    });

    return addTopics(payload, this.props.dispatch);
  }
  render() {
    return (
      <>
        <Home />
        <LeanCanvasBoard />
      </>
    );
  }
}

function mapStateToProps(state) {
  return { state };
}

export default connect(mapStateToProps)(App);
