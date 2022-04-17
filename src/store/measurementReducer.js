import { createSlice } from "@reduxjs/toolkit";

const measurementSlice = createSlice({
  name: "measurementReducer",
  initialState: { unitsOfMeasurement: "celsius" },
  reducers: {
    unitsOfMeasurement(state, action) {
      state.unitsOfMeasurement = action.payload.currentUnitsOfMeasurement;
    },
  },
});

export const measurementActions = measurementSlice.actions;

export default measurementSlice.reducer;
