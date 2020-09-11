import React, { Component } from "react";
import { connect } from "react-redux";
import { addProblem } from "../../store/action";
import ReactMarkdown from "react-markdown";

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
    topic = topic.toLowerCase();
    this.setState({ point: "", preview: false });
    return addProblem(point, topic, this.props.dispatch);
  };
  render() {
    let { point, preview } = this.state;
    let { topic } = this.props;
    return (
      <div className="add_points_form">
        {preview ? (
          <p className="text_wrapper">
            <ReactMarkdown source={point} escapeHtml={false} />
            <input
              type="checkbox"
              name="preview"
              checked={preview}
              onClick={this.handlePreview}
            />
            <span className="small_text">Preview text</span>
          </p>
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
                {" "}
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
        )}

        <button
          type="submit"
          onClick={(event) => this.handleSubmit(event, topic)}
          className="btn"
        >
          Add
        </button>

        <button
          type="submit"
          onClick={(event) => this.handleSubmit(event, topic)}
          className="btn"
        >
          X
        </button>
      </div>
    );
  }
}

export default connect()(AddPoints);
