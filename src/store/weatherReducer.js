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
      const {
        wind_direction_compass,
        wind_speed,
        wind_direction,
        humidity,
        visibility,
        air_pressure,
      } = weatherArray[0];

      state.forecast = weatherArray.slice(1);
      state.todayWeatherInfo = weatherArray[0];

      state.hightlights = {
        wind_direction_compass,
        wind_speed,
        wind_direction,
        humidity,
        visibility,
        air_pressure,
      };
    },
    resetWeatherInfo(state) {
      state.forecast = [];
      state.hightlights = {};
      state.todayWeatherInfo = {};
    },
  },
});

export const getFullWeatherInfo = (woeid, isLoadingFunc) => {
  return (dispath) => {
    fetch(
      `https://mycorsproxy-crossdomainyz.herokuapp.com/https://www.metaweather.com/api/location/${woeid}`
    )
      .then((res) => res.json())
      .then((data) => {
        dispath(
          weatherActions.setWeatherInfo({
            consolidated_weather: data.consolidated_weather,
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
