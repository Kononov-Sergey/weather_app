import React from "react";
import { useSelector } from "react-redux";
import { getForecast } from "../../store/selectors";

import CardMini from "../UI/Card/CardMini";
import Loader from "../UI/Loader/Loader";

import classes from "./MainTopContent.module.scss";

import Clear from "../../assets/Clear.png";
import Hail from "../../assets/Hail.png";
import HeavyCloud from "../../assets/HeavyCloud.png";
import HeavyRain from "../../assets/HeavyRain.png";
import LightCloud from "../../assets/LightCloud.png";
import LightRain from "../../assets/LightRain.png";
import Showers from "../../assets/Showers.png";
import Sleet from "../../assets/Sleet.png";
import Snow from "../../assets/Snow.png";
import Thunderstorm from "../../assets/Thunderstorm.png";

const weatherImges = {
  Clear,
  Hail,
  HeavyCloud,
  HeavyRain,
  LightCloud,
  LightRain,
  Showers,
  Sleet,
  Snow,
  Thunderstorm,
};

function MainTopContent() {
  const forecast = useSelector(getForecast);

  return (
    <article className={classes["card-wrapper"]}>
      {forecast.length === 0 ? (
        <Loader />
      ) : (
        forecast.map((item) => {
          const imgName = item.weather_state_name.split(" ").join("");
          const imgSrc = weatherImges[imgName];
          return (
            <CardMini
              key={item.id}
              date={item.applicable_date}
              img={imgSrc}
              dayTemp={item.max_temp}
              nightTemp={item.min_temp}
            />
          );
        })
      )}
    </article>
  );
}

export default MainTopContent;
