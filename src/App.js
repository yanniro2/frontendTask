import "./App.css";
import Section from "./Components/Section";
import Css from "./Components/Css";
import Html from "./Components/Html";
import Js from "./Components/Js";
import Dom from "./Components/Dom";
function App() {
  return (
    <div className="App">
      <header></header>
      <div className="heading">
        <h3>25 Questions Completed out of 25</h3>
        <div className="completed">
          <p>100%</p>
        </div>
      </div>
      <main>
        <Css name="HTML" />
        <Html name="CSS" />
        <Js name="JavaScript" />
        <Dom name="DOM Manipulation" />
      </main>
    </div>
  );
}

export default App;
