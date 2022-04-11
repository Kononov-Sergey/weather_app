import { createSlice } from "@reduxjs/toolkit";

const positionSlice = createSlice({
  name: "positionReducer",
  initialState: {
    latitude: undefined,
    longitude: undefined,
    woeid: undefined,
    city: undefined,
  },
  reducers: {
    setFullLocaion(state, action) {
      const { latitude, longitude, woeid, city } = action.payload;
      state.latitude = latitude;
      state.longitude = longitude;
      state.woeid = woeid;
      state.city = city;
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
        const [latitude, longitude] = data[0].latt_long.split(",");
        const { woeid, city } = data[0];
        dispath(
          positionAction.setFullLocaion({ woeid, city, latitude, longitude })
        );
      });
  };
};

export const positionAction = positionSlice.actions;

export default positionSlice.reducer;
