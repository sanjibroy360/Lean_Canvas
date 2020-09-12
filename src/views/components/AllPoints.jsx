import React, { Component } from "react";
import { connect } from "react-redux";
import SinglePoint from "./SinglePoint";
import { Draggable } from "react-beautiful-dnd";
import { getCardList } from "../../utils";

class AllPoints extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editPoint: "",
      preview: "",
      enableEditMode: false,
    };
  }

  render() {
    let { topic, state } = this.props;
    let list = getCardList(topic, state);
    console.log({ list });
    return (
      <>
        {list.map((listItem, index) => {
          return (
            <Draggable
              key={listItem.id}
              draggableId={listItem.id}
              index={index}
            >
              {(provided, snapshot) => (
                <div
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                >
                  <SinglePoint pointInfo={listItem} />
                </div>
              )}
            </Draggable>
          );
        })}
      </>
    );
  }
}

function mapStateToProps(state) {
  return { state };
}

export default connect(mapStateToProps)(AllPoints);
