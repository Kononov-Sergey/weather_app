import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: "weatherInfo",
  initialState: {
    todayWeatherInfo: {},
    forecast: [],
  },
});
