import React from "react";
import { connect } from "react-redux";
import SingleTopic from "../components/SingleTopic";
import ReactToPrint from "react-to-print";

class CanvasGridUi extends React.Component {
  render() {
    let { topics, gridView } = this.props;
    
    return (
      <>
        <ul
          className={
            gridView
              ? "grid_container page-break"
              : "grid_container row_view page-break"
          }
          key="wrapper"
          id="divcontents"
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

class Print extends React.Component {
  render() {
    if(this.props.isPrinting) {
      document.getElementById("printBtn").click();
    }
    return (
      <>
        <ReactToPrint
          trigger={() => {
            return <button id="printBtn"> Print this </button> ;
          }}
          content={() => this.componentRef}
        />
        <CanvasGridUi
          gridView={this.props.gridView}
          topics={this.props.topics}
          ref={(el) => (this.componentRef = el)}
        />
      </>
    );
  }
}

export default connect(mapStateToProps)(Print);
