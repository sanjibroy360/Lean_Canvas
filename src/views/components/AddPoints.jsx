import React, { Component } from "react";
import { connect } from "react-redux";
import { addPoint } from "../../store/action";
import uuid from "react-uuid";
import InputBox from "./InputBox";
import Preview from "./Preview";

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

  handleSubmit = (event) => {
    let { point } = this.state;
    point = point.trim();
    let payload = {
      pointId: uuid(),
      point,
      topicId: this.props.topic.topicId,
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
          <Preview
            source={point}
            enablePreview={preview}
            handlePreview={this.handlePreview}
          />
        ) : (
          <InputBox
            textareaName={"point"}
            value={point}
            enablePreview={preview}
            handleInput={this.handleInput}
            handlePreview={this.handlePreview}
            closeInputBox={this.closeInputBox}
            handleSubmit={this.handleSubmit}
            pointInfo={topic}
          />
        )}
      </div>
    );
  }
}

export default connect()(AddPoints);
