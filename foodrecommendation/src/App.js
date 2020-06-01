import React from "react";
import FoodList from "./components/foodList";
import NavBar from "./components/navbar";
import RandomPick from "./components/randomPick";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <header className="App-header">
        <Switch>
          <Route path="/" exact component={RandomPick} />
          <Route path="/foodlist" component={FoodList} />
          <Route path="/randompick" component={RandomPick} />
        </Switch>
      </header>
    </Router>
  );
}

export default App;
