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
        console.log(data);
        dispath(positionActions.setFullLocaion(data));
      });
  };
};

export const positionActions = positionSlice.actions;

export default positionSlice.reducer;
