import React from "react";
import classes from "./CardWide.module.scss";

import WindCompass from "../Interface/WindCompass";
import PercentageScale from "../Interface/PercentageScale";
const types = { WS: "WS", H: "H", V: "V", AP: "AP" };

function CardWide({ title, type, currentValue, bottomContentValues }) {
  let value, valuePostfix, additionalContent;
  if (type === types.WS) {
    value = (currentValue * 0.44704).toFixed(1);
    valuePostfix = "m/s";
    additionalContent = (
      <>
        <WindCompass rotation={bottomContentValues.wind_direction} />
        <p>{bottomContentValues.wind_direction_compass}</p>
      </>
    );
  }

  if (type === types.H) {
    value = currentValue;
    valuePostfix = "%";
    additionalContent = (
      <PercentageScale percentages={bottomContentValues.humidity} />
    );
  }

  if (type === types.V) {
    value = (currentValue * 1.609344).toFixed(1);
    valuePostfix = "km";
  }

  if (type === types.AP) {
    value = (currentValue * 0.750064).toFixed(0);
    valuePostfix = "mmhg";
  }

  return (
    <div className={`${classes["wide_card"]}`}>
      <h3>{title}</h3>
      <div></div>
      <div className={classes["top-content"]}>
        <h1>{value}</h1>
        <p>{valuePostfix}</p>
      </div>
      <div className={classes["bottom-content"]}>{additionalContent}</div>
    </div>
  );
}

export default CardWide;
