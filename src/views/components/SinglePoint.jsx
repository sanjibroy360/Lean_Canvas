import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import { editPoint, deletePoint } from "../../store/action";
import { connect } from "react-redux";
import InputBox from "./InputBox";
import Preview from "./Preview";

class SinglePoint extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editPoint: "",
      preview: "",
      enableEditMode: false,
    };
  }
  handleInput = (event) => {
    event.target.style.height = "inherit";
    event.target.style.height = `${event.target.scrollHeight}px`;
    let {
      target: { name, value },
    } = event;
    return this.setState({ [name]: value });
  };

  handlePreview = ({ target: { name, checked } }) => {
    return this.setState({ [name]: checked });
  };

  handleSubmit = (event, payload) => {
    payload = { ...payload, point: this.state.editPoint };
    this.setState({ editPoint: "", enableEditMode: false });
    return editPoint(payload, this.props.dispatch);
  };

  handleEditMode = (event, payload) => {
    let { point } = payload;
    this.setState({ editPoint: point, enableEditMode: true });
  };

  handleDelete = (event, payload) => {
    return deletePoint(payload, this.props.dispatch);
  };

  closeInputBox = () => {
    return this.setState({ editPoint: "", enableEditMode: false });
  };

  render() {
    let { enableEditMode, editPoint, preview } = this.state;
    let { pointInfo, enablePresentationMode } = this.props;
    return (
      <div>
        {enableEditMode && !enablePresentationMode ? (
          <>
            {preview ? (
              <Preview
                source={editPoint}
                enablePreview={preview}
                handlePreview={this.handlePreview}
              />
            ) : (
              <>
                <InputBox
                  textareaName={"editPoint"}
                  value={editPoint}
                  enablePreview={preview}
                  handleInput={this.handleInput}
                  handlePreview={this.handlePreview}
                  closeInputBox={this.closeInputBox}
                  handleSubmit={this.handleSubmit}
                  pointInfo={pointInfo}
                />
              </>
            )}
          </>
        ) : (
          <div className="card">
            <div className="content">
              <div className="text">
                <ReactMarkdown escapeHtml={false}>
                  {pointInfo.point}
                </ReactMarkdown>
              </div>
              {!enablePresentationMode && (
                <nobr>
                  <div className="btns">
                    <button
                      onClick={(event) => this.handleEditMode(event, pointInfo)}
                    >
                      Edit
                    </button>

                    <button
                      onClick={(event) => this.handleDelete(event, pointInfo)}
                    >
                      Delete
                    </button>
                  </div>
                </nobr>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps({ enablePresentationMode }) {
  return { enablePresentationMode };
}

export default connect(mapStateToProps)(SinglePoint);
