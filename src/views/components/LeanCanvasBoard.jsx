import React, { Component } from "react";
import SingleTopic from "./SingleTopic";
import { connect } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";
import { getCardList } from "../../utils";
import { reorderPoints } from "../../store/action";

class LeanCanvasBoard extends Component {
  reorder = (list, topic, sourceIndex, destIndex) => {
    let card = list.splice(sourceIndex, 1)[0];
    list.splice(destIndex, 0, card);
    return reorderPoints(list, topic, this.props.dispatch);
  };
  onDragEnd = (response) => {
    let topic = response.source.droppableId;
    let sourceIndex = response.source.index;
    let destIndex = response.destination.index;
    let list = getCardList(topic, this.props.state);
    return this.reorder(list, topic, sourceIndex, destIndex);
  };
  render() {
    let challenges = [
      ["Problem", "Existing alternative"],
      ["Solution", "Key Metrics"],
      ["Unique value proposition", "High-Level concept"],
      ["Unfair advantage", "Channels"],
      ["Customer segment", "Early addopters"],
      ["Cost structure", "Revenue streams"],
    ];

    return (
      <div className="container">
        <DragDropContext onDragEnd={this.onDragEnd}>
          <ul className="grid_container" key="wrapper">
            {challenges.map((topic, collumnNo) => {
              return (
                <li className="inner_wrapper" key={`${collumnNo}`}>
                  <SingleTopic title={topic[0]} key={`${topic[0]}card`} />
                  <SingleTopic title={topic[1]} key={`${topic[1]}card`} />
                </li>
              );
            })}
          </ul>
        </DragDropContext>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { state };
}

export default connect(mapStateToProps)(LeanCanvasBoard);
