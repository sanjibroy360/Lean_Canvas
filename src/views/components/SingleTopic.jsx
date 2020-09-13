import React, { Component } from "react";
import AddPoints from "./AddPoints";
import AllPoints from "./AllPoints";
import { Droppable } from "react-beautiful-dnd";

class SingleTopic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAddingPoints: false,
    };
  }

  handleInputTaking = () => {
    let { isAddingPoints } = this.state;
    return this.setState({ isAddingPoints: !isAddingPoints });
  };

  render() {
    let { topic } = this.props;
    let {topicName, topicId} = topic;
    let { isAddingPoints } = this.state;
    return (
      <Droppable droppableId={topic.topicId}>
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="topic"
            key={topicName+topicId}
          >
            <p className="title" key={topicId + 1}>
              {topicName}
            </p>
            <AllPoints topic={topic} />
            {isAddingPoints ? (
              <AddPoints topic={topic} closeInputBox={this.handleInputTaking} />
            ) : (
              <button onClick={this.handleInputTaking}>
                <i className="fa fa-plus-circle"></i> Add card
              </button>
            )}
          </div>
        )}
      </Droppable>
    );
  }
}

export default SingleTopic;
