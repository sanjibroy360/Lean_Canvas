import React, { Component } from "react";
import AddPoints from "../AddPoints";
import AllPoints from "../AllPoints";
import { Droppable } from "react-beautiful-dnd";
import { Popup } from "semantic-ui-react";
import Icon from "../../../utils/Icon";

const popupStyle = {
  opacity: 0.7,
  padding: "0.375rem",
};

class DroppableTopic extends Component {
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
    let { topic, boxNo } = this.props;
    let { topicName, topicId } = topic;
    let { isAddingPoints } = this.state;

    
    return (
      <Droppable droppableId={topic.topicId}>
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={`topic box${boxNo}`}
            key={topicName + topicId}
          >
            <div className="topic_card_header">
              <p className="title" key={topicId + 1}>
                {topicName}
              </p>
              <div>
                <Icon topicNo={boxNo-1} />
              </div>
            </div>

            {isAddingPoints ? (
              <AddPoints topic={topic} closeInputBox={this.handleInputTaking} />
            ) : (
              <Popup
                content="Add Point"
                position="right center"
                size="mini"
                style={popupStyle}
                trigger={
                  <button
                    className="add_card_btn"
                    onClick={this.handleInputTaking}
                  >
                    <i className="fa fa-plus-circle"></i>
                  </button>
                }
              />
            )}
            <AllPoints topic={topic} />
          </div>
        )}
      </Droppable>
    );
  }
}

export default DroppableTopic;
