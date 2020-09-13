import React, { Component } from "react";
import ReactMarkdown from "react-markdown";

import { editPoint, deletePoint } from "../../store/action";
import { connect } from "react-redux";

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
    console.log(payload);
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
    let { pointInfo } = this.props;
    return (
      <div>
        {enableEditMode ? (
          <>
            {preview ? (
              <div className="text_wrapper">
                <ReactMarkdown source={editPoint} escapeHtml={false} />
                <input
                  type="checkbox"
                  name="preview"
                  checked={preview}
                  onChange={this.handlePreview}
                />
                <span className="small_text">Preview text</span>
              </div>
            ) : (
              <>
                <div className="input_point">
                  <textarea
                    name="editPoint"
                    value={editPoint}
                    rows="4"
                    onChange={this.handleInput}
                  ></textarea>
                  {pointInfo.point.trim() && (
                    <>
                      <input
                        type="checkbox"
                        name="preview"
                        checked={preview}
                        onClick={this.handlePreview}
                      />
                      <span className="small_text">Preview text</span>
                    </>
                  )}
                </div>
                <div className="btn_wrapper">
                  <button
                    type="submit"
                    onClick={(event) => this.handleSubmit(event, pointInfo)}
                    className="btn save_btn"
                  >
                    Add
                  </button>

                  <button
                    type="submit"
                    onClick={this.closeInputBox}
                    className="btn cancel_btn"
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
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
              <div>
                <nobr>
                  <button
                    onClick={(event) => this.handleEditMode(event, pointInfo)}
                  >
                    <i className="far fa-edit edit_point"></i>
                  </button>
                  <button
                    onClick={(event) => this.handleDelete(event, pointInfo)}
                  >
                    <i className="fas fa-trash-alt delete_point"></i>
                  </button>
                </nobr>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { state };
}

export default connect(mapStateToProps)(SinglePoint);
