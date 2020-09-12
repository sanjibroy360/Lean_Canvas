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
    let { title } = this.props;
    let { isAddingPoints } = this.state;
    return (
      <Droppable droppableId={title}>
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className="topic"
            key={title}
          >
            <p className="title" key={title + 1}>
              {title}
            </p>
            <AllPoints topic={title} />
            {isAddingPoints ? (
              <AddPoints topic={title} closeInputBox={this.handleInputTaking} />
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
