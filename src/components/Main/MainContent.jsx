import React from "react";
import { useSelector } from "react-redux";
import { getHightlights } from "../../store/selectors";
import CardWide from "../UI/Card/CardWide";
import PercentageScale from "./Interface/PercentageScale";

import classes from "./MainContent.module.scss";

const dummy_data = {
  wind_direction_compass: "SSE",
  wind_speed: 6.173739518608659,
  wind_direction: 154.16657727779,
  humidity: 43,
  visibility: 12.539581344945518,
  air_pressure: 1023.0,
};

function MainContent() {
  const hightlights = useSelector(getHightlights);
  return (
    <article>
      <h1>Today's Hightlights</h1>
      <div className={classes["card-wrapper"]}>
        <CardWide title={"Wind status"}>
          <div className={classes["top-content"]}>
            <h1>{(dummy_data.wind_speed * 0.44704).toFixed(0)}</h1>
            <p>meters per second</p>
          </div>
          <div className={classes["bottom-content"]}>
            {/* <div>
              <span className="material-icons">near_me</span>
            </div>
            <p>{dummy_data.wind_direction_compass}</p> */}
            <PercentageScale percentages={dummy_data.humidity} />
          </div>
        </CardWide>
      </div>
    </article>
  );
}

export default MainContent;
