import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Meals from "./components/Meals/Meal";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Meals></Meals>
      </div>
  );
}

export default App;
