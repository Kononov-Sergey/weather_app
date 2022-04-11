import React from "react";
import Button from "../UI/Button/Button";
import classes from "./SideBarMenu.module.scss";
function SideBarMenu({ toggleMenu }) {
  return (
    <div className={classes.aside}>
      <div className={classes["top-content"]}>
        <div className={classes.search}>
          <span className="material-icons-outlined">search</span>
          <input placeholder="search location" type="text" />
        </div>
        <Button type="blue">Search</Button>
      </div>
      <div className={classes.countries}></div>
      <span onClick={toggleMenu} className="material-icons-outlined">
        close
      </span>
    </div>
  );
}

export default SideBarMenu;
