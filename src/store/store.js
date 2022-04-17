import { configureStore } from "@reduxjs/toolkit";
import positionReducer from "./positionReducer";
import weatherReducer from "./weatherReducer";
import measurementReducer from "./measurementReducer";

export const store = configureStore({
  reducer: {
    position: positionReducer,
    weatherInfo: weatherReducer,
    measurement: measurementReducer,
  },
});
