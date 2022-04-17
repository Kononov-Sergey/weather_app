import React from "react";
import { useSelector } from "react-redux";
import { getCurrentMeasurement } from "../../../store/selectors";

import makePrettyDate from "../../../function/makePrettyDate";

import classes from "./CardMini.module.scss";
import measurement from "../../../function/measurement";

function CardMini({ date, img, dayTemp, nightTemp }) {
  const currentMeasurement = useSelector(getCurrentMeasurement);

  const unitsOfMeasurement = currentMeasurement[0].toUpperCase();
  const MaxTemp = measurement(dayTemp.toFixed(0), currentMeasurement);
  const MinTemp = measurement(nightTemp.toFixed(0), currentMeasurement);
  return (
    <div className={classes.card}>
      <h3>{makePrettyDate(date)}</h3>
      <img src={img} alt="weather info" />
      <div className={classes["temp-info"]}>
        <p>
          {MaxTemp}°{unitsOfMeasurement}
        </p>
        <p>
          {MinTemp}°{unitsOfMeasurement}
        </p>
      </div>
    </div>
  );
}

export default CardMini;
