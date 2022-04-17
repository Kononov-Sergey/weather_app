import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { measurementActions } from "../../store/measurementReducer";
import { getCurrentMeasurement } from "../../store/selectors";
import ButtonCircle from "../UI/Button/ButtonCircle";
import classes from "./MainHeader.module.scss";

function MainHeader() {
  const dispatch = useDispatch();
  const measurement = useSelector(getCurrentMeasurement);

  const celsiusBtnHandler = () => {
    dispatch(
      measurementActions.unitsOfMeasurement({
        currentUnitsOfMeasurement: "celsius",
      })
    );
  };

  const fahrenheitBtnHandler = () => {
    dispatch(
      measurementActions.unitsOfMeasurement({
        currentUnitsOfMeasurement: "fahrenheit",
      })
    );
  };
  return (
    <header className={classes.header}>
      <ButtonCircle
        onClick={celsiusBtnHandler}
        type={measurement === "celsius" ? "switch_light" : "switch_dark"}
      >
        <p>°С</p>
      </ButtonCircle>
      <ButtonCircle
        onClick={fahrenheitBtnHandler}
        type={measurement === "fahrenheit" ? "switch_light" : "switch_dark"}
      >
        <p>°F</p>
      </ButtonCircle>
    </header>
  );
}

export default MainHeader;
