import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"; //For redux purposes
import store from "./Redux/store"; //For redux purposes
import "./bootstrap.min.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
reportWebVitals();
