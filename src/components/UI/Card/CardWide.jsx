import React from "react";
import classes from "./CardWide.module.scss";

function CardWide({ children, title }) {
  return (
    <div className={classes["wide_card"]}>
      <h3>{title}</h3>
      <div className={classes.content}></div>
      {children}
    </div>
  );
}

export default CardWide;
