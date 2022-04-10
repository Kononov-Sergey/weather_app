import SideBar from "./components/SideBar/SideBar";
import classes from "./App.module.scss";
import CardMini from "./components/UI/Card/CardMini";

import shower from "./assets/Shower.png";

function App() {
  return (
    <div className={classes.container}>
      <SideBar />
      <main>
        <CardMini date="Tomorrow" img={shower} dayTemp={16} nightTemp={11} />
      </main>
    </div>
  );
}

export default App;
