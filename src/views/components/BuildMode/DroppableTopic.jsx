import React, { Component } from "react";
import AddPoints from "../AddPoints";
import AllPoints from "../AllPoints";
import { Droppable } from "react-beautiful-dnd";
import { Popup } from "semantic-ui-react";

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

    let icons = [
      "https://img.icons8.com/dusk/32/000000/lock-2.png",
      "",
      "https://img.icons8.com/ultraviolet/26/000000/key.png",
      "https://img.icons8.com/officel/22/000000/bar-chart.png",
      "https://img.icons8.com/material-two-tone/30/000000/gift.png",
      "",
      "https://img.icons8.com/dusk/31/000000/fantasy.png",
      "https://img.icons8.com/windows/28/000000/three-way-direction.png",
      "https://img.icons8.com/dusk/34/000000/gender-neutral-user--v1.png",
      "",
      "https://img.icons8.com/pastel-glyph/32/000000/transaction-list--v5.png",
      "https://img.icons8.com/plasticine/55/000000/economic-improvement.png",
    ];
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
                <img src={icons[boxNo - 1]} alt="" />
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
