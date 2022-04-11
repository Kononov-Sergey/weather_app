import React from "react";
import classes from "./Button.module.scss";

function Button({ onClick, type, children }) {
  return (
    <button
      className={`${type ? classes[type] : classes.gray} ${classes.btn}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
