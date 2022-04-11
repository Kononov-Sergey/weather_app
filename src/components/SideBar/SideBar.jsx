import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usePosition } from "../../hooks/use-position";

import classes from "./SideBar.module.scss";

import Shower from "../../assets/Shower.png";

import Button from "../UI/Button/Button";
import ButtonCircle from "../UI/Button/ButtonCircle";
import SideBarMenu from "./SideBarMenu";
import { getFullLocaion } from "../../store/positionReducer";

function SideBar() {
  const dispatch = useDispatch();
  const [menuIsShown, setMenuIsShown] = useState(false);
  const { latitude, longitude, error } = usePosition();
  const city = useSelector((state) => state.position.city);

  const onMenuToggle = () => {
    setMenuIsShown((state) => !state);
  };

  const getLocationHandler = () => {
    dispatch(getFullLocaion(latitude, longitude));
  };

  return (
    <aside className={classes.aside}>
      <div className={`${classes.menu} ${menuIsShown && classes.shown}`}>
        <SideBarMenu toggleMenu={onMenuToggle} />
      </div>
      <div className={classes["btn-secction"]}>
        <Button onClick={onMenuToggle}>Search for places</Button>
        <ButtonCircle onClick={getLocationHandler}>
          <span className="material-icons-outlined">my_location</span>
        </ButtonCircle>
      </div>
      <img className={classes.img} src={Shower} alt="" />
      <div className={classes.temp}>
        <h1>15</h1>
        <h2>°С</h2>
      </div>
      <h2 className={classes.weather}>Shower</h2>
      <div className={classes["day-container"]}>
        <h3>Today</h3>
        <p>·</p>
        <h3>Fri, 5 Jun</h3>
      </div>
      <h3 className={classes.locaion}>
        <span className="material-icons">location_on</span>
        {city}
      </h3>
    </aside>
  );
}

export default SideBar;
