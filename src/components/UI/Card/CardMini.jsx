import React from "react";
import makePrettyDate from "../../../function/makePrettyDate";
import classes from "./CardMini.module.scss";

function CardMini({ date, img, dayTemp, nightTemp }) {
  return (
    <div className={classes.card}>
      <h3>{makePrettyDate(date)}</h3>
      <img src={img} alt="weather info" />
      <div className={classes["temp-info"]}>
        <p>{dayTemp.toFixed(0)}°С</p>
        <p>{nightTemp.toFixed(0)}°С</p>
      </div>
    </div>
  );
}

export default CardMini;
