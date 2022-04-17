import React from "react";
import { useSelector } from "react-redux";
import { getHightlights } from "../../store/selectors";
import CardWide from "../UI/Card/CardWide";

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
    <article className={classes.article}>
      <h1>Today's Hightlights</h1>
      <div className={classes["card-wrapper"]}>
        <CardWide
          title={"Wind status"}
          type="WS"
          currentValue={dummy_data.wind_speed}
          bottomContentValues={{
            wind_direction_compass: dummy_data.wind_direction_compass,
            wind_direction: dummy_data.wind_direction,
          }}
        />

        <CardWide
          title={"Humidity"}
          type="H"
          currentValue={dummy_data.humidity}
          bottomContentValues={{ humidity: dummy_data.humidity }}
        />

        <CardWide
          title={"Visibility"}
          type="V"
          currentValue={dummy_data.visibility}
        />

        <CardWide
          title={"Air pressure"}
          type="AP"
          currentValue={dummy_data.air_pressure}
        />
      </div>
    </article>
  );
}

export default MainContent;
