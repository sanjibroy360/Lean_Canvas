import ReactDOM from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./views/App";
import "semantic-ui-css/semantic.min.css";
import "./assets/stylesheets/index.scss";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
