import { useSelector } from "react-redux";
import { getCurrentMeasurement } from "../store/selectors";

export default function (value) {
  const measurement = useSelector(getCurrentMeasurement);

  if (measurement === "celsius") {
    return (5 / 9) * (value - 32);
  }
  if (measurement === "fahrenheit") {
    return value;
  }
}
