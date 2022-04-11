import { configureStore } from "@reduxjs/toolkit";
import positionReducer from "./positionReducer";

export const store = configureStore({
  reducer: {
    position: positionReducer,
  },
});
