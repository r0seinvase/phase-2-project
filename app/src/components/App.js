import { BrowserRouter, Route, Link, Switch} from "react-router-dom";
import './App.css';
import Item from "./components/Item"
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Seating from "./components/Seating";
import Storage from "./components/Storage";
import Electronics from "./components/Electronics";

function App() {
  return <div className="App">
    <div>
      Modern and Organic Furniture: The Space Age of the Sixties
    </div>
    <Navbar />
    <Switch>
      <Route exact path="/Item">
        <Item />
      </Route>
      <Route exact path="/" >
        <Home />
      </Route>
      <Route exact path="/About">
        <About />
      </Route>
      <Route exact path="/Seating">
        <Seating />
      </Route>
      <Route exact path="/Storage">
        <Storage />
      </Route>
      <Route exact path="/Electronics">
        <Electronics />
      </Route>
    </Switch>
  </div>

}

export default App;
