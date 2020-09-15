import React, { Component } from "react";
import LeanCanvasBoard from "./LeanCanvas/LeanCanvasBoard";
import Home from "./HomePage/Home";
import Header from "./components/Header";
import uuid from "react-uuid";
import { connect } from "react-redux";
import { addTopics } from "../store/action";
import { Route, Switch } from "react-router-dom";
import PageNotFound from "./PageNotFound/PageNotFound";

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
        <Header />
        <Switch>
          <Home path="/" exact />
          <Route path="/canvas" exact component={LeanCanvasBoard} />
          <Route path="/_error" component={PageNotFound} />
        </Switch>
      </>
    );
  }
}

function mapStateToProps(state) {
  return { state };
}

export default connect(mapStateToProps)(App);
