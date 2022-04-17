import React from "react";
import { useSelector } from "react-redux";
import { getForecast } from "../../store/selectors";

import CardMini from "../UI/Card/CardMini";
import Loader from "../UI/Loader/Loader";

import classes from "./MainTopContent.module.scss";

const dunny_data = [
  {
    id: 6340953997574144,
    weather_state_name: "Light Rain",
    weather_state_abbr: "lr",
    wind_direction_compass: "NE",
    created: "2022-04-15T14:08:07.082067Z",
    applicable_date: "2022-04-15",
    min_temp: 11.405,
    max_temp: 16.715,
    the_temp: 16.935,
    wind_speed: 5.0132240191945705,
    wind_direction: 51.5,
    air_pressure: 1018.5,
    humidity: 74,
    visibility: 8.895549988069673,
    predictability: 75,
  },
  {
    id: 4933579114020864,
    weather_state_name: "Light Cloud",
    weather_state_abbr: "lc",
    wind_direction_compass: "NE",
    created: "2022-04-15T14:08:10.259622Z",
    applicable_date: "2022-04-16",
    min_temp: 10.525,
    max_temp: 15.7,
    the_temp: 16.365000000000002,
    wind_speed: 6.519533806378749,
    wind_direction: 47.32164673893466,
    air_pressure: 1023.0,
    humidity: 66,
    visibility: 11.875956911636045,
    predictability: 70,
  },
  {
    id: 6628004210933760,
    weather_state_name: "Light Cloud",
    weather_state_abbr: "lc",
    wind_direction_compass: "WNW",
    created: "2022-04-15T14:08:13.561363Z",
    applicable_date: "2022-04-17",
    min_temp: 10.665000000000001,
    max_temp: 17.05,
    the_temp: 16.9,
    wind_speed: 3.809794569471619,
    wind_direction: 286.71867207862005,
    air_pressure: 1022.5,
    humidity: 62,
    visibility: 14.623038952517298,
    predictability: 70,
  },
  {
    id: 5041397255110656,
    weather_state_name: "Heavy Cloud",
    weather_state_abbr: "hc",
    wind_direction_compass: "NW",
    created: "2022-04-15T14:08:16.858226Z",
    applicable_date: "2022-04-18",
    min_temp: 11.03,
    max_temp: 17.61,
    the_temp: 17.835,
    wind_speed: 4.139666431763833,
    wind_direction: 305.35469728952563,
    air_pressure: 1020.5,
    humidity: 68,
    visibility: 11.752925415573053,
    predictability: 71,
  },
  {
    id: 6694703006220288,
    weather_state_name: "Heavy Cloud",
    weather_state_abbr: "hc",
    wind_direction_compass: "ENE",
    created: "2022-04-15T14:08:19.658878Z",
    applicable_date: "2022-04-19",
    min_temp: 11.545,
    max_temp: 20.25,
    the_temp: 19.415,
    wind_speed: 4.408660944272118,
    wind_direction: 59.289600908295625,
    air_pressure: 1022.0,
    humidity: 65,
    visibility: 11.139321363238686,
    predictability: 71,
  },
  {
    id: 4597165767786496,
    weather_state_name: "Light Cloud",
    weather_state_abbr: "lc",
    wind_direction_compass: "ENE",
    created: "2022-04-15T14:08:22.165361Z",
    applicable_date: "2022-04-20",
    min_temp: 10.35,
    max_temp: 19.564999999999998,
    the_temp: 25.57,
    wind_speed: 7.391077706195817,
    wind_direction: 71.49999999999999,
    air_pressure: 1021.0,
    humidity: 58,
    visibility: 9.999726596675416,
    predictability: 70,
  },
];

function MainTopContent() {
  const forecast = useSelector(getForecast);

  return (
    <article className={classes["card-wrapper"]}>
      {forecast.length === 0 ? (
        <Loader />
      ) : (
        forecast.map((item, index) => {
          if (index !== 0) {
            const imgName = item.weather_state_name.split(" ").join("");
            const img = require(`../../assets/${imgName}.png`);
            return (
              <CardMini
                key={item.id}
                date={item.applicable_date}
                img={img}
                dayTemp={item.max_temp}
                nightTemp={item.min_temp}
              />
            );
          }
        })
      )}
    </article>
  );
}

export default MainTopContent;
