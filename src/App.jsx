import SideBar from "./components/SideBar/SideBar";
import classes from "./App.module.scss";
import WeatherCard from "./components/UI/Card/WeatherCard";
import CardWide from "./components/UI/Card/CardWide";

import shower from "./assets/Shower.png";
import MainHeader from "./components/Main/MainHeader";

function App() {
  return (
    <div className={classes.container}>
      <SideBar />
      <div className={classes["main-container"]}>
        <MainHeader />
      </div>

      <main>
        {/* <WeatherCard date="Tomorrow" img={shower} dayTemp={16} nightTemp={11} />
        <CardWide title="Wind status">
          <h1>Content</h1>
        </CardWide> */}
      </main>
    </div>
  );
}

export default App;
