import React, { Component } from "react";
import { connect } from "react-redux";
import { addPoint } from "../../store/action";
import ReactMarkdown from "react-markdown";
import uuid from "uuid/v4";

class AddPoints extends Component {
  constructor(props) {
    super(props);
    this.state = {
      point: "",
      preview: false,
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

  handleSubmit = (event, topic) => {
    let { point } = this.state;
    point = point.trim();
    topic = topic.toLowerCase();
    let payload = {
      id: uuid(),
      point,
      topic,
    };
    if (point) {
      this.setState({ point: "", preview: false });
      this.props.closeInputBox();
      return addPoint(payload, this.props.dispatch);
    }
  };

  closeInputBox = () => {
    this.setState({ point: "", preview: false });
    return this.props.closeInputBox();
  };
  render() {
    let { point, preview } = this.state;
    let { topic } = this.props;
    return (
      <div className="add_points_form">
        {preview ? (
          <div className="text_wrapper">
            <ReactMarkdown source={point} escapeHtml={false} />
            <input
              type="checkbox"
              name="preview"
              checked={preview}
              onChange={this.handlePreview}
            />
            <span className="small_text">Preview text</span>
          </div>
        ) : (
          <div className="input_point">
            <textarea
              name="point"
              rows="2"
              onChange={this.handleInput}
              value={point}
            ></textarea>
            {point.trim() && (
              <>
                <input
                  type="checkbox"
                  name="preview"
                  checked={preview}
                  onChange={this.handlePreview}
                />
                <span className="small_text">Preview text</span>
              </>
            )}
          </div>
        )}

        <div className="btn_wrapper">
          <button
            type="submit"
            onClick={(event) => this.handleSubmit(event, topic)}
            className="btn save_btn"
          >
            Add
          </button>

          <button onClick={this.closeInputBox} className="btn cancel_btn">
            <i className="fas fa-times"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default connect()(AddPoints);
