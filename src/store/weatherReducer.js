import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weatherInfo",
  initialState: {
    todayWeatherInfo: {},
    forecast: [],
  },
  reducers: {
    setWeatherInfo(state, action) {
      const weatherArray = action.payload.consolidated_weather;
      const currentCity = action.payload.currentCity;
      state.forecast = weatherArray;
      state.todayWeatherInfo = weatherArray[currentCity];
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
            consolidated_weather: data,
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
