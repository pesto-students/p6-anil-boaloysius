export default (dispatch) => {
  return {
    increment: () => {
      dispatch({ type: "INCREMENT" });
    },
    reset: () => {
      dispatch({ type: "RESET" });
    },
  };
};
