export default function measurement(value, currentMeasurement) {
  if (currentMeasurement === "celsius") {
    return (+value).toFixed(0);
  }
  if (currentMeasurement === "fahrenheit") {
    return ((9 / 5) * value + 32).toFixed(0);
  }
}
