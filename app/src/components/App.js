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
  const [favorites, setFavorites] = useState([{ "type": "placeholder" }])

  const [images, setImages] = useState([])

  const [index, setIndex] = useState(0)

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
      .then(data => setImages(data))

  }, []);
  console.log(images);

  let displayImage = images.slice(index, index + 1)

  const nextImage = () => {
    if (index < 15) {
      setIndex(index + 1)
    } else {
      setIndex(0)
    }
  }


  const previousImage = () => {
    if (index > 0) {
      setIndex(index - 1)
    } else {
      setIndex(15)
    }
  }


  return <div className="App">
    <div>
      <Navbar />
    </div>
    <Switch>
      <Route exact path="/Item">
        <Item />
      </Route>
      <Route exact path="/About">
        <Home nextImage={nextImage} displayImage={displayImage} previousImage={previousImage} />
      </Route>
      <Route exact path="/Seating">
        <Seating seating={seating} favorites={favorites} setFavorites={setFavorites} />
      </Route>
      <Route exact path="/Storage">
        <Storage storage={storage} favorites={favorites} setFavorites={setFavorites} />
      </Route>
      <Route exact path="/Electronics">
        <Electronics electronics={electronics} favorites={favorites} setFavorites={setFavorites} />
      </Route>
      <Route exact path="/Favorites">
        <Favorites seating={seating} storage={storage} electronics={electronics} favorites={favorites} />
      </Route>
    </Switch>
  </div>

}

export default App;









