import SideBar from "./components/SideBar/SideBar";
import classes from "./App.module.scss";

function App() {
  return (
    <div className={classes.container}>
      <SideBar />
      <main>main</main>
    </div>
  );
}

export default App;
