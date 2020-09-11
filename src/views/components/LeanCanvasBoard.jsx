import React, { Component } from "react";
import Card from "./Card";

class LeanCanvasBoard extends Component {
  render() {
    let challenges = [
      ["Problem", "Existing alternative"],
      ["Solution", "Key Metrics"],
      ["Unique value proposition", "High-Level concept"],
      ["Unfair advantage", "Channels"],
      ["Customer segment", "Early addopters"],
      ["Cost structure", "Revenue streams"],
    ];

    return (
      <div className="container">
        <ul className="grid_container" key="wrapper">
          {challenges.map((topic, collumnNo) => {
            return (
              <li className="inner_wrapper" key={`${collumnNo}`}>
                <Card title={topic[0]} key={`${topic[0]}card`} />
                <Card title={topic[1]} key={`${topic[1]}card`} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default LeanCanvasBoard;
