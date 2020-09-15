import React, { Component } from "react";
import { connect } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";
import { reorderPoints, togglePresentationMode } from "../../store/action";
import { Checkbox } from "semantic-ui-react";
import CanvasGridUi from "./CanvasGridUi";

class LeanCanvasBoard extends Component {
  constructor() {
    super();
    this.state = {
      enablePresentationMode: false,
      gridView: true,
    };
  }

  handlePresentationMode = () => {
    let { enablePresentationMode } = this.state;

    this.setState({ enablePresentationMode: !enablePresentationMode }, () => {
      return togglePresentationMode(
        this.state.enablePresentationMode,
        this.props.dispatch
      );
    });
  };

  handleRowView = () => {
    console.log("Clicked");
    return this.setState({ gridView: false });
  };

  handleGridView = () => {
    return this.setState({ gridView: true });
  };

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
    let { enablePresentationMode, gridView } = this.state;

    return (
      <div className="container">
        <div className="board_wrapper">
          <DragDropContext onDragEnd={this.onDragEnd}>
            <div className="canvas_header">
              <div className="toggle_btn">
                <Checkbox
                  toggle
                  checked={enablePresentationMode}
                  onChange={this.handlePresentationMode}
                />
                <nobr> Presentation Mode</nobr>
              </div>
              <div className="view">
                <div onClick={this.handleGridView}>
                  <img
                    src="https://img.icons8.com/fluent-systems-regular/30/000000/activity-grid.png"
                    alt=""
                  />
                </div>

                <div onClick={this.handleRowView}>
                  <i className="fas fa-bars"></i>
                </div>
              </div>
            </div>

            <CanvasGridUi gridView={gridView} />
          </DragDropContext>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ topics }) {
  return { topics };
}

export default connect(mapStateToProps)(LeanCanvasBoard);
