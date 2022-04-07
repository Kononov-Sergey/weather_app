import React from "react";

import classes from "./ButtonCircle.module.scss";

function ButtonCircle({ onClick, type, children }) {
  return (
    <button
      className={`${type ? classes.type : classes.gray} ${classes.btn}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ButtonCircle;
