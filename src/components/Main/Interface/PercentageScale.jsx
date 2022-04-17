import React from "react";
import classes from "./PercentageScale.module.scss";

function PercentageScale({ percentages }) {
  return (
    <div className={classes.wrapper}>
      <div className={classes.number}>
        <p>0</p>
        <p>50</p>
        <p>100</p>
      </div>
      <div className={classes.scale}>
        <div
          style={{ width: `${percentages}%` }}
          className={classes.percentages}
        ></div>
      </div>
      <div className={classes.percent}>
        <p>%</p>
      </div>
    </div>
  );
}

export default PercentageScale;
