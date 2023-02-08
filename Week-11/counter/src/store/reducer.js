import state from "./state";

const initialState = state;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT": {
      return { count: state.count + 1 };
    }
    case "RESET": {
      return { count: 0 };
    }
    default:
      return state;
  }
};

export default reducer;
