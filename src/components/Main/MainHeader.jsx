import React from "react";
import ButtonCircle from "../UI/Button/ButtonCircle";
import classes from "./MainHeader.module.scss";

function MainHeader() {
  return (
    <header className={classes.header}>
      <ButtonCircle type="switch_light">
        <p>°С</p>
      </ButtonCircle>
      <ButtonCircle type="switch_dark">
        <p>°F</p>
      </ButtonCircle>
    </header>
  );
}

export default MainHeader;
