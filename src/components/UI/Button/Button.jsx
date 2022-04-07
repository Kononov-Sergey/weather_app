import React from "react";
import classes from "./Button.module.scss";

function Button({ onClick, type, children }) {
  return (
    <button className={classes.type} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
