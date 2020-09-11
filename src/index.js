import ReactDOM from "react-dom";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import App from "./views/App";
import "./assets/stylesheets/index.scss";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
