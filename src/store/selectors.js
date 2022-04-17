export const getCurrentCity = (state) => state.position.currentCity;
export const getFullLocationData = (state) => state.position.data;

export const getTodayWeather = (state) => state.weatherInfo.todayWeatherInfo;
export const getForecast = (state) => state.weatherInfo.forecast;
export const getHightlights = (state) => state.weatherInfo.hightlights;

export const getCurrentMeasurement = (state) =>
  state.measurement.unitsOfMeasurement;
