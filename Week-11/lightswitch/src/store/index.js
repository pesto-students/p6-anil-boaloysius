import { createStore } from "redux";

const initialState = { isLightOn: true };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE": {
      return { isLightOn: !state.isLightOn };
    }
    default:
      return state;
  }
};

export default createStore(reducer);
