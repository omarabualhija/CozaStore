import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { createStore } from "redux";
import App from "./App";
import { reducers } from "./Redux/Reducers/combineReducers";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

const store = createStore(reducers);
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
