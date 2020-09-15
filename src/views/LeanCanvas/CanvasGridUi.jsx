import React from "react";
import { connect } from "react-redux";
import SingleTopic from "../components/SingleTopic";

class CanvasGridUi extends React.Component {
  render() {
    let { topics, gridView } = this.props;

    return (
      <>
        <ul
          className={gridView ? "grid_container" : "grid_container row_view"}
          key="wrapper"
        >
          {topics.map((topic, collumnNo) => {
            return (
              <React.Fragment key={topic.topicId + collumnNo}>
                {!(collumnNo % 2) ? (
                  <li className="inner_wrapper" key={`${collumnNo}`}>
                    <SingleTopic
                      topic={topic}
                      key={`${topic.topicId}card`}
                      boxNo={collumnNo + 1}
                    />
                    <SingleTopic
                      topic={topics[collumnNo + 1]}
                      boxNo={collumnNo + 2}
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
      </>
    );
  }
}

function mapStateToProps({ topics }) {
  return { topics };
}

export default connect(mapStateToProps)(CanvasGridUi);
