import React from "react";
import { connect } from "react-redux";
import SingleTopic from "../components/SingleTopic";
import { exportComponentAsJPEG } from "react-component-export-image";

class ExportableModel extends React.Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();
  }

  exportCanvas = () => {
    exportComponentAsJPEG(this.componentRef);
  };
  render() {
    let { topics, gridView } = this.props;
    let printBtn = document.getElementById("print_btn") || "";
    if (this.props.isPrinting) {
      console.log();
      printBtn.click();
    }
    return (
      <>
        <ul
          className={
            gridView
              ? "grid_container page-break"
              : "grid_container row_view page-break"
          }
          ref={this.componentRef}
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

        <button id="print_btn" onClick={this.exportCanvas}>
          Export As JPEG
        </button>
      </>
    );
  }
}
function mapStateToProps({ topics }) {
  return { topics };
}

export default connect(mapStateToProps)(ExportableModel);
