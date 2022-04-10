import React from "react";
import classes from "./WeatherCard.module.scss";

function CardMini({ date, img, dayTemp, nightTemp }) {
  return (
    <div className={classes.card}>
      <h3>{date}</h3>
      <img src={img} alt="weather info" />
      <div className={classes["temp-info"]}>
        <p>{dayTemp}°С</p>
        <p>{nightTemp}°С</p>
      </div>
    </div>
  );
}

export default CardMini;
