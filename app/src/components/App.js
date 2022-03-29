import { BrowserRouter, Route, Link, Switch} from "react-router-dom";
import './App.css';
import Item from "./Item"
import Navbar from "./Navbar";
import Home from "./Home";

function App() {
  return <div className="App">
        <Navbar />
      <Switch>
      <Route exact path="/Item">
        <Item />
      </Route>
      <Route exact path="/" >
        <Home />
      </Route>
      </Switch>
  </div>

}

export default App;
