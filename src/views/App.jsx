import React, { Component } from "react";
import LeanCanvasBoard from "./LeanCanvas/LeanCanvasBoard";
import Home from "./HomePage/Home";
import Header from "./components/Header";
import uuid from "react-uuid";
import { connect } from "react-redux";
import { addTopics } from "../store/action";
import { Route, Switch } from "react-router-dom";
import PageNotFound from "./PageNotFound/PageNotFound";
import { defaultInput } from "../utils/defaultInput";

class App extends Component {
  componentDidMount() {
    let payload = [];
    for (let i = 0; i < defaultInput.length; i++) {
      let currentTopic = defaultInput[i];
      currentTopic.topicId = uuid();

      for (let j = 0; j < currentTopic.points.length; j++) {
        currentTopic.points[j].topicId = currentTopic.topicId;
        currentTopic.points[j].pointId = uuid();
      }
      payload.push(currentTopic);
    }

    return addTopics(payload, this.props.dispatch);
  }
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Home path="/" exact />
          <Route path="/canvas" exact component={LeanCanvasBoard} />
          <Route component={PageNotFound} />
        </Switch>
      </>
    );
  }
}

function mapStateToProps(state) {
  return { state };
}

export default connect(mapStateToProps)(App);
