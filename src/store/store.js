import { configureStore } from "@reduxjs/toolkit";
import positionReducer from "./positionReducer";
import weatherReducer from "./weatherReducer";

export const store = configureStore({
  reducer: {
    position: positionReducer,
    weatherInfo: weatherReducer,
  },
});
