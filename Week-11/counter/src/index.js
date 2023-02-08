import React from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
import "./index.css";

import store from "./store/store";
import Counter from "./Counter";
import actions from "./store/actions";

function mapStateToProp(state) {
  return state;
}

const ConnectedRoom = connect(mapStateToProp, actions)(Counter);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRoom />
  </Provider>,
  document.getElementById("root")
);
