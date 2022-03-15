import "./assets/styles/styles.css";
import React from "react";
import ReactDOM from "react-dom";

// Components
import Main from "./Main";

import products from "./assets/data/data.js";

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<Main products={products} />, document.getElementById("app"));
