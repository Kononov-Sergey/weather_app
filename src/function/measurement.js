export default function measurement(value, currentMeasurement) {
  if (currentMeasurement === "celsius") {
    return ((5 / 9) * (value - 32)).toFixed(0);
  }
  if (currentMeasurement === "fahrenheit") {
    return (+value).toFixed(0);
  }
}
