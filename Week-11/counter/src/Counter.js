import React from "react";

const Counter = (props) => {
  const { count, increment, reset } = props;

  return (
    <div className="container">
      <div className="text">
        You have walked <b>{count}</b> steps today!
      </div>
      <div className="buttonsWrap">
        <button onClick={increment}>Add a Step</button>
        <button onClick={reset}>Reset steps</button>
      </div>
    </div>
  );
};

export default Counter;
