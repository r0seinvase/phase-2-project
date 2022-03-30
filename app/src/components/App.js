import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import '../App.css';
import Item from "./Item"
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Seating from "./Seating";
import Storage from "./Storage";
import Electronics from "./Electronics";
import Favorites from "./Favorites";

function App() {
  const [seating, setSeating] = useState([])
  const [storage, setStorage] = useState([])
  const [electronics, setElectronics] = useState([])
  const [home, setHome] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/chairs")
      .then(res => res.json())
      .then(data => setSeating(data))

    fetch("http://localhost:3000/Storage")
      .then(res => res.json())
      .then(data => setStorage(data))

    fetch("http://localhost:3000/Electronics")
      .then(res => res.json())
      .then(data => setElectronics(data))

    fetch("http://localhost:3000/about")
      .then(res => res.json())
      .then(data => setHome(data))
  }, []);

  return <div className="App">
    <div>
      <Navbar />
    </div>
    <Home home={home} />
    <Switch>
      <Route exact path="/Item">
        <Item />
      </Route>
      <Route exact path="/" >
      </Route>
      <Route exact path="/About">
        <Home home={home} />
      </Route>
      <Route exact path="/Seating">
        <Seating seating={seating} />
      </Route>
      <Route exact path="/Storage">
        <Storage storage={storage} />
      </Route>
      <Route exact path="/Electronics">
        <Electronics electronics={electronics} />
      </Route>
      <Route exact path="/Favorites">
        <Favorites seating={seating} storage={storage} electronics={electronics} />
      </Route>
    </Switch>
  </div>

}

export default App;
