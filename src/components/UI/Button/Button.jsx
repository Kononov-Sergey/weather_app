import React from "react";
import classes from "./Button.module.scss";

function Button({ onClick, type, children, disabled }) {
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

export default Button;
