import React from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
import "./index.css";

import store from "./store/index";
import Room from "./Room";

function mapStateToProp(state) {
  return {
    isLightOn: state.isLightOn,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggle: () => {
      dispatch({ type: "TOGGLE" });
    },
  };
};

const ConnectedRoom = connect(mapStateToProp, mapDispatchToProps)(Room);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRoom />
  </Provider>,
  document.getElementById("root")
);
