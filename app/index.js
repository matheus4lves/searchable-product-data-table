import "./assets/styles/styles.css";
import React from "react";
import ReactDOM from "react-dom";

// Components
import Main from "./Main";

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<Main />, document.getElementById("app"));
