import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weatherInfo",
  initialState: {
    todayWeatherInfo: {},
    forecast: [],
    hightlights: {},
  },
  reducers: {
    setWeatherInfo(state, action) {
      const weatherArray = action.payload.consolidated_weather;
      const currentCity = action.payload.currentCity;
      const {
        wind_direction_compass,
        wind_speed,
        wind_direction,
        humidity,
        visibility,
        air_pressure,
      } = weatherArray[currentCity];

      state.forecast = weatherArray;
      state.todayWeatherInfo = weatherArray[currentCity];

      state.hightlights = {
        wind_direction_compass,
        wind_speed,
        wind_direction,
        humidity,
        visibility,
        air_pressure,
      };
    },
  },
});

export const getFullWeatherInfo = (woeid, currentCity, isLoadingFunc) => {
  return (dispath) => {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispath(
          weatherActions.setWeatherInfo({
            consolidated_weather: data.consolidated_weather,
            currentCity: currentCity,
          })
        );
      })
      .then(() => {
        isLoadingFunc(false);
      });
  };
};

export const weatherActions = weatherSlice.actions;

export default weatherSlice.reducer;
