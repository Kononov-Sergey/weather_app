import classes from "./SideBar.module.scss";

import Shower from "../../assets/Shower.png";

import Button from "../UI/Button/Button";
import ButtonCircle from "../UI/Button/ButtonCircle";

function SideBar() {
  return (
    <aside className={classes.aside}>
      <div className={classes["btn-secction"]}>
        <Button>Search for places</Button>
        <ButtonCircle>
          <span className="material-icons-outlined">my_location</span>
        </ButtonCircle>
      </div>
      <img className={classes.img} src={Shower} alt="" />
      <div className={classes.temp}>
        <h1>15</h1>
        <h2>°С</h2>
      </div>
      <h2 className={classes.weather}></h2>
      <div className={classes.day}>
        <h3></h3>
        <p>·</p>
        <h3></h3>
      </div>
      <h3 className={classes.locaion}>
        <span class="material-icons">location_on</span>
      </h3>
    </aside>
  );
}

export default SideBar;
