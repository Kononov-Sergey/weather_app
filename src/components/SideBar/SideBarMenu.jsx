import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { positionActions } from "../../store/positionReducer";
import { getCurrentCity, getFullLocationData } from "../../store/selectors";
import { weatherActions } from "../../store/weatherReducer";
import Button from "../UI/Button/Button";
import classes from "./SideBarMenu.module.scss";

const data = [
  {
    distance: 1836,
    title: "Santa Cruz",
    location_type: "City",
    woeid: 2488853,
    latt_long: "36.974018,-122.030952",
  },
  {
    distance: 43722,
    title: "San Jose",
    location_type: "City",
    woeid: 2488042,
    latt_long: "37.338581,-121.885567",
  },
  {
    distance: 49177,
    title: "Mountain View",
    location_type: "City",
    woeid: 2455920,
    latt_long: "37.39999,-122.079552",
  },
  {
    distance: 96531,
    title: "Oakland",
    location_type: "City",
    woeid: 2463583,
    latt_long: "37.80508,-122.273071",
  },
  {
    distance: 97420,
    title: "San Francisco",
    location_type: "City",
    woeid: 2487956,
    latt_long: "37.777119, -122.41964",
  },
  {
    distance: 185820,
    title: "Sacramento",
    location_type: "City",
    woeid: 2486340,
    latt_long: "38.579060,-121.491013",
  },
  {
    distance: 200162,
    title: "Fresno",
    location_type: "City",
    woeid: 2407517,
    latt_long: "36.740681,-119.785728",
  },
  {
    distance: 287032,
    title: "Lake Tahoe",
    location_type: "City",
    woeid: 23511744,
    latt_long: "39.021400,-120.044823",
  },
  {
    distance: 322803,
    title: "Bakersfield",
    location_type: "City",
    woeid: 2358492,
    latt_long: "35.351189,-119.024063",
  },
  {
    distance: 469934,
    title: "Los Angeles",
    location_type: "City",
    woeid: 2442047,
    latt_long: "34.053490,-118.245323",
  },
];

function SideBarMenu({ toggleMenu }) {
  const [filteredCities, setFilteredCities] = useState([]);
  const searchRef = useRef();

  const dispatch = useDispatch();
  const currentCityIndex = useSelector(getCurrentCity);
  const citeisData = useSelector(getFullLocationData);

  const citiesBtnHandler = (cityIndex) => {
    dispatch(weatherActions.resetWeatherInfo());
    dispatch(positionActions.setCurrentCity({ currentCityIndex: cityIndex }));
    toggleMenu();
  };

  useEffect(() => {
    if (citeisData) {
      const citiesArray = citeisData.map((item, index) => {
        if (currentCityIndex !== index) {
          return item.title;
        }
      });

      setFilteredCities(citiesArray);
    }
  }, [citeisData, currentCityIndex]);

  const onSearchHandler = () => {
    const citiesArray = citeisData.map((item, index) => {
      if (
        currentCityIndex !== index &&
        item.title.includes(searchRef.current.value)
      ) {
        return item.title;
      }
    });
    setFilteredCities(citiesArray);
  };

  return (
    <div className={classes.aside}>
      <div className={classes["top-content"]}>
        <div className={classes.search}>
          <span className="material-icons-outlined">search</span>
          <input ref={searchRef} placeholder="search location" type="text" />
        </div>
        <Button onClick={onSearchHandler} type="blue">
          Search
        </Button>
      </div>
      <div className={classes.countries}>
        {filteredCities.map((city, index) => {
          return city === undefined ? (
            ""
          ) : (
            <button key={city} onClick={citiesBtnHandler.bind(null, index)}>
              {city}
            </button>
          );
        })}
      </div>
      <span onClick={toggleMenu} className="material-icons-outlined">
        close
      </span>
    </div>
  );
}

export default SideBarMenu;
