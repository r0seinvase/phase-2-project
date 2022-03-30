import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import '../App.css';
import Item from "./Item"
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Seating from "./Seating";
import Storage from "./Storage";
import Electronics from "./Electronics";

function App() {
  return <div className="App">
    <div>
      <Navbar />
    </div>
    <Home />
    <Switch>
      <Route exact path="/Item">
        <Item />
      </Route>
      <Route exact path="/" >

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
