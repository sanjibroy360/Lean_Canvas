import React, { Component } from "react";
import ReactToPrint from "react-to-print";
import CanvasGridUi from "../LeanCanvas/CanvasGridUi";

class Print extends Component {
  constructor() {
      super();
      let refUi = React.createRef();
  }
  render() {
    
    return (
      <div className="container">
        <ReactToPrint
          trigger={() => (
            <a href="#">
              <label htmlFor="printBtn">
                <button>Print2</button>
              </label>
            </a>
          )}
          content={() =>this.refUi}
        />
        <CanvasGridUi gridView={true} ref={this.refUi} />
      </div>
    );
  }
}

export default Print;
