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
      <>
        {topic.points.map((point, index) => {
          return (
            <>
              {enablePresentationMode ? (
                <>
                  {" "}
                  <SinglePoint pointInfo={point} />
                </>
              ) : (
                <>
                  {" "}
                  <DraggableCards point={point} index={index} />
                </>
              )}
            </>
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
