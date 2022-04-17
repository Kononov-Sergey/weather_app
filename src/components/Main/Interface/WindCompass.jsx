import React from "react";
import classes from "./WindCompass.module.scss";

function WindCompass({ rotation }) {
  return (
    <div
      style={{ transform: `rotate(${rotation - 45}deg)` }}
      className={classes.circle}
    >
      <span className="material-icons">near_me</span>
    </div>
  );
}

export default WindCompass;
