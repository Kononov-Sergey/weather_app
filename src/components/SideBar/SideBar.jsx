import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePosition } from "../../hooks/use-position";

import classes from "./SideBar.module.scss";

import Button from "../UI/Button/Button";
import ButtonCircle from "../UI/Button/ButtonCircle";
import SideBarMenu from "./SideBarMenu";
import Loader from "../UI/Loader/Loader";

import { getFullLocaion, positionActions } from "../../store/positionReducer";
import { getFullWeatherInfo, weatherActions } from "../../store/weatherReducer";
import {
  getCurrentCity,
  getCurrentMeasurement,
  getFullLocationData,
  getTodayWeather,
} from "../../store/selectors";
import makePrettyDate from "../../function/makePrettyDate";
import measurement from "../../function/measurement";

import Clear from "../../assets/Clear.png";
import Hail from "../../assets/Hail.png";
import HeavyCloud from "../../assets/HeavyCloud.png";
import HeavyRain from "../../assets/HeavyRain.png";
import LightCloud from "../../assets/LightCloud.png";
import LightRain from "../../assets/LightRain.png";
import Showers from "../../assets/Showers.png";
import Sleet from "../../assets/Sleet.png";
import Snow from "../../assets/Snow.png";
import Thunder from "../../assets/Thunder.png";

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
  Thunder,
};

const dummy_data = {
  consolidated_weather: [
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
  ],
  time: "2022-04-15T19:38:16.985380+03:00",
  sun_rise: "2022-04-15T05:42:56.919201+03:00",
  sun_set: "2022-04-15T20:16:22.270708+03:00",
  timezone_name: "LMT",
  parent: {
    title: "Russia",
    location_type: "Country",
    woeid: 23424936,
    latt_long: "59.453751,108.830719",
  },
  sources: [
    {
      title: "BBC",
      slug: "bbc",
      url: "http://www.bbc.co.uk/weather/",
      crawl_rate: 360,
    },
    {
      title: "Forecast.io",
      slug: "forecast-io",
      url: "http://forecast.io/",
      crawl_rate: 480,
    },
    {
      title: "HAMweather",
      slug: "hamweather",
      url: "http://www.hamweather.com/",
      crawl_rate: 360,
    },
    {
      title: "Met Office",
      slug: "met-office",
      url: "http://www.metoffice.gov.uk/",
      crawl_rate: 180,
    },
    {
      title: "OpenWeatherMap",
      slug: "openweathermap",
      url: "http://openweathermap.org/",
      crawl_rate: 360,
    },
    {
      title: "Weather Underground",
      slug: "wunderground",
      url: "https://www.wunderground.com/?apiref=fc30dc3cd224e19b",
      crawl_rate: 720,
    },
    {
      title: "World Weather Online",
      slug: "world-weather-online",
      url: "http://www.worldweatheronline.com/",
      crawl_rate: 360,
    },
  ],
  title: "St Petersburg",
  location_type: "City",
  woeid: 2123260,
  latt_long: "59.932739,30.306721",
  timezone: "Europe/Moscow",
};

let currentTemperature, weatherState, date;

function SideBar() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [menuIsShown, setMenuIsShown] = useState(false);
  const { latitude, longitude, status } = usePosition();

  const cityNumber = useSelector(getCurrentCity);
  const data = useSelector(getFullLocationData);
  const weatherInfo = useSelector(getTodayWeather);
  const currentMeasurement = useSelector(getCurrentMeasurement);

  const unitsOfMeasurement = currentMeasurement[0].toUpperCase();

  const makeWeatherImg = (weatherState) => {
    if (weatherState) {
      const weatherImg = weatherState.split(" ").join("");
      const img = weatherImges[weatherImg];
      return <img className={classes.img} src={img} alt="weather" />;
    }
  };

  const onMenuToggleHandler = () => {
    setMenuIsShown((state) => !state);
  };

  const getLocationHandler = () => {
    setIsLoading(true);
    dispatch(positionActions.resetAllInfo());
    dispatch(weatherActions.resetWeatherInfo());
    dispatch(getFullLocaion(latitude, longitude));
  };

  useEffect(() => {
    if (status === "Completed") {
      dispatch(getFullLocaion(latitude, longitude));
    }
  }, [latitude, longitude]);

  useEffect(() => {
    if (data.length > 0) {
      setIsLoading(true);
      const woeid = data[cityNumber].woeid;
      dispatch(getFullWeatherInfo(woeid, setIsLoading));
    }
  }, [cityNumber, data]);

  useEffect(() => {
    if (Object.keys(weatherInfo).length > 0) {
      currentTemperature = weatherInfo.the_temp.toFixed(0);
      weatherState = weatherInfo.weather_state_name;
      date = makePrettyDate(weatherInfo.created);
    }
  }, [weatherInfo]);

  return (
    <aside className={classes.aside}>
      <div className={`${classes.menu} ${menuIsShown && classes.shown}`}>
        <SideBarMenu toggleMenu={onMenuToggleHandler} />
      </div>
      <div className={classes["btn-secction"]}>
        <Button disabled={isLoading} onClick={onMenuToggleHandler}>
          Search for places
        </Button>
        <ButtonCircle disabled={isLoading} onClick={getLocationHandler}>
          <span className="material-icons-outlined">my_location</span>
        </ButtonCircle>
      </div>
      {isLoading || Object.keys(weatherInfo).length === 0 ? (
        <Loader />
      ) : (
        <>
          {weatherState ? makeWeatherImg(weatherState) : ""}
          <div className={classes.temp}>
            <h1>{measurement(currentTemperature, currentMeasurement)}</h1>
            <h2>°{unitsOfMeasurement}</h2>
          </div>
          <h2 className={classes.weather}>{weatherState}</h2>
          <div className={classes["day-container"]}>
            <h3>Today</h3>
            <p>·</p>
            <h3>{date}</h3>
          </div>
          <h3 className={classes.locaion}>
            <span className="material-icons">location_on</span>
            {data[cityNumber].title}
          </h3>
        </>
      )}
    </aside>
  );
}

export default SideBar;
