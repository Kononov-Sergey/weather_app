import React from "react";

import classes from "./ButtonCircle.module.scss";

function ButtonCircle({ onClick, type, children, disabled }) {
  return (
    <button
      disabled={disabled}
      className={`${type ? classes[type] : classes.gray} ${classes.btn} ${
        disabled && classes.disabled
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default ButtonCircle;
