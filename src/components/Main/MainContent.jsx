import React from "react";
import { useSelector } from "react-redux";
import { getHightlights } from "../../store/selectors";

import CardWide from "../UI/Card/CardWide";

import Loader from "../UI/Loader/Loader";

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
        {Object.keys(hightlights).length === 0 ? (
          <Loader />
        ) : (
          <>
            <CardWide
              title={"Wind status"}
              type="WS"
              currentValue={hightlights.wind_speed}
              bottomContentValues={{
                wind_direction_compass: hightlights.wind_direction_compass,
                wind_direction: hightlights.wind_direction,
              }}
            />

            <CardWide
              title={"Humidity"}
              type="H"
              currentValue={hightlights.humidity}
              bottomContentValues={{ humidity: hightlights.humidity }}
            />

            <CardWide
              title={"Visibility"}
              type="V"
              currentValue={hightlights.visibility}
            />

            <CardWide
              title={"Air pressure"}
              type="AP"
              currentValue={hightlights.air_pressure}
            />
          </>
        )}
      </div>
    </article>
  );
}

export default MainContent;
