import React from "react";

function ButtonCircle({ onClick, type, children }) {
  return (
    <button className={`${classes.type} ${classes.btn}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default ButtonCircle;
