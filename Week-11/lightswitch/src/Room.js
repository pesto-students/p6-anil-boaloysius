import React from "react";

const Room = (props) => {
  const { isLightOn, toggle } = props;
  const lightedness = isLightOn ? "lit" : "dark";

  return (
    <div className={`room ${lightedness}`}>
      the room is {lightedness}
      <br />
      <button onClick={toggle}>flip</button>
    </div>
  );
};

export default Room;
