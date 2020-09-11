import React, { Component } from "react";
import { connect } from "react-redux";
import ReactMarkdown from "react-markdown";

class AllPoints extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editPoint: "",
      preview: "",
      enableEditMode: false,
    };
  }

  getPoints = (topic, state) => {
    switch (topic) {
      case "Problem":
        return state.problems;
      case "Existing alternative":
        return state.existingAlternative;
      default:
        return [];
    }
  };

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

  handleEdit = (point) => {
    console.log(point);
    this.setState({ editPoint: point, enableEditMode: true });
  };

  render() {
    let { topic, state } = this.props;
    let { enableEditMode, editPoint, preview } = this.state;
    let points = this.getPoints(topic, state) || [];
    return (
      <>
        {points.map((point, index) => {
          return (
            <>
              {editPoint && enableEditMode ? (
                <>
                  <div className="input_point">
                    <textarea
                      name="editPoint"
                      value={editPoint}
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
                          //   onClick={this.handlePreview}
                        />
                        <span className="small_text">Preview text</span>
                      </>
                    )}
                  </div>
                </>
              ) : (
                <div
                  className="points_card"
                  onClick={() => this.handleEdit(point)}
                >
                  <ReactMarkdown source={point} escapeHtml={false} />
                </div>
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
