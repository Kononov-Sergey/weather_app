import SideBar from "./components/SideBar/SideBar";
import classes from "./App.module.scss";
import WeatherCard from "./components/UI/Card/CardMini";
import CardWide from "./components/UI/Card/CardWide";

import MainHeader from "./components/Main/MainHeader";
import MainTopContent from "./components/Main/MainTopContent";

function App() {
  return (
    <div className={classes.container}>
      <SideBar />
      <div className={classes["main-container"]}>
        <MainHeader />
        <MainTopContent />
        {/* <WeatherCard date="Tomorrow" img={shower} dayTemp={16} nightTemp={11} />
        <CardWide title="Wind status">
          <h1>Content</h1>
        </CardWide> */}
      </div>
    </div>
  );
}

export default App;
