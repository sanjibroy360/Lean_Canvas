import React, { Component } from "react";
import SingleTopic from "./SingleTopic";
import { connect } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";
import { reorderPoints } from "../../store/action";

class LeanCanvasBoard extends Component {
  reorder = (list, sourceIndex, destIndex) => {
    let card = list.points.splice(sourceIndex, 1)[0];
    list.points.splice(destIndex, 0, card);
    return reorderPoints(list, this.props.dispatch);
  };
  onDragEnd = (response) => {
    let { topics } = this.props;
    let { droppableId } = response.source;
    let sourceIndex = response.source.index;
    let destIndex = response.destination.index;
    let list = topics.filter((topic) => topic.topicId === droppableId)[0];
    console.log(response);
    return this.reorder(list, sourceIndex, destIndex);
  };
  render() {
    let { topics } = this.props;

    return (
      <div className="container">
        <DragDropContext onDragEnd={this.onDragEnd}>
          <ul className="grid_container" key="wrapper">
            {topics.map((topic, collumnNo) => {
              return (
                <React.Fragment key={topic.topicId+collumnNo}>
                  {!(collumnNo % 2) ? (
                    <li className="inner_wrapper" key={`${collumnNo}`}>
                      <SingleTopic
                        topic={topics[collumnNo]}
                        key={`${topic.topicId}card`}
                      />
                      <SingleTopic
                        topic={topics[collumnNo + 1]}
                        key={`${topic.topicId + 1}card`}
                      />
                    </li>
                  ) : (
                    <></>
                  )}
                </React.Fragment>
              );
            })}
          </ul>
        </DragDropContext>
      </div>
    );
  }
}

function mapStateToProps({ topics }) {
  return { topics };
}

export default connect(mapStateToProps)(LeanCanvasBoard);
