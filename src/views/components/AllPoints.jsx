import React, { Component } from "react";
import { connect } from "react-redux";
import SinglePoint from "./SinglePoint";
import DraggableCards from "./BuildMode/DraggableCards";

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
    let { enablePresentationMode } = state;

    return (
      <div>
        {topic.points.map((point, index) => {
          return (
            <React.Fragment key={point.pointId}>
              {enablePresentationMode ? (
                <SinglePoint pointInfo={point} />
              ) : (
                <DraggableCards point={point} index={index} />
              )}
            </React.Fragment>
          );
        })}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { state };
}

export default connect(mapStateToProps)(AllPoints);
