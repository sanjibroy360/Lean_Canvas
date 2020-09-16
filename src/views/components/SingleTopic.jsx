import React from "react";
import { connect } from "react-redux";
import DroppableTopic from "./BuildMode/DroppableTopic";
import AllPoints from "./AllPoints";
import Icon from "../../utils/Icon";

function SingleTopic(props) {
  let { topic, boxNo, enablePresentationMode } = props;

  let { topicName, topicId } = topic;

  return (
    <>
      {enablePresentationMode ? (
        <div className={`topic box${boxNo}`}>
          <div className="topic_card_header">
            <p className="title" key={topicId + 1}>
              {topicName}
            </p>
            <div>
              <Icon topicNo={boxNo - 1} />
            </div>
          </div>
          <AllPoints topic={topic} />
        </div>
      ) : (
        <DroppableTopic topic={topic} boxNo={boxNo} />
      )}
    </>
  );
}

function mapStateToProps({ enablePresentationMode }) {
  return { enablePresentationMode };
}

export default connect(mapStateToProps)(SingleTopic);
