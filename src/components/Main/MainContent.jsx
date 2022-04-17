import React from "react";

import classes from "./MainContent.module.scss";

function MainContent() {
  return (
    <article>
      <h1>Today's Hightlights</h1>
      <div className={classes["card-wrapper"]}></div>
    </article>
  );
}

export default MainContent;
