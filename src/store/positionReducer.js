import { createSlice } from "@reduxjs/toolkit";

const positionSlice = createSlice({
  name: "positionReducer",
  initialState: {
    data: [],
    currentCity: 0,
  },

  reducers: {
    setFullLocaion(state, action) {
      if (action.payload.city && state.currentCity !== action.payload.city) {
        state.currentCity = action.payload.city;
      }
      state.data = action.payload;
    },
    setCurrentCity(state, action) {
      state.currentCity = action.payload.currentCityIndex;
    },
    resetAllInfo(state) {
      state.currentCity = 0;
      state.data = [];
    },
  },
});

export const getFullLocaion = (latitude, longitude) => {
  return (dispath) => {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=${latitude},${longitude}`
    )
      .then((res) => res.json())
      .then((data) => {
        dispath(positionActions.setFullLocaion(data));
      });
  };
};

export const positionActions = positionSlice.actions;

export default positionSlice.reducer;
