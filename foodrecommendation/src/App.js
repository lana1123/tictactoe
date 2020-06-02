import React, { Component } from "react";
import FoodList from "./components/foodList";
import NavBar from "./components/navbar";
import RandomPick from "./components/randomPick";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

class App extends Component {
  state = {
    //declaring a state where items containing text and key
    pickedFood: [],
    food: [],
    currentFood: {
      text: "",
      key: "",
    },
  };

  constructor(props) {
    super(props);
  }

  handleInput = (e) => {
    this.text = e.target.value;
    this.setState({
      currentFood: {
        text: e.target.value,
        key: Date.now(),
      },
    });
  };

  handleClick = () => {
    const foodList = this.state.food;
    console.log("INSIDE");

    this.setState({
      pickedFood: foodList.sort(() => 0.5 - Math.random()).slice(0, 1),
    });
  };

  addFood = (e) => {
    e.preventDefault();
    const newFav = this.state.currentFood;
    if (newFav.text !== "") {
      const newFavs = [...this.state.food, newFav];
      this.setState({
        food: newFavs,
        currentFood: {
          text: "",
          key: "",
        },
      });
    }
  };

  deleteFood = (key) => {
    const filteredFavFood = this.state.food.filter((food) => food.key !== key);
    this.setState({
      food: filteredFavFood,
    });
  };

  updateFood = (text, key) => {
    const favFoods = this.state.food;
    favFoods.map((food) => {
      if (food.key === key) {
        food.text = text;
      }
    });
    this.setState({
      food: favFoods,
    });
  };

  render() {
    return (
      <Router>
        <NavBar />
        <header className="App-header">
          <Switch>
            <Route path="/" exact component={RandomPick} />
            <Route
              path="/foodlist"
              render={(props) => (
                <FoodList
                  {...props}
                  food={this.state.food}
                  handleInput={this.handleInput}
                  addFood={this.addFood}
                  updateFood={this.updateFood}
                  deleteFood={this.deleteFood}
                  currentFood={this.state.currentFood}
                />
              )}
            />
            <Route
              path="/randompick"
              component={() => (
                <RandomPick
                  food={this.state.food}
                  handleClick={this.handleClick}
                  pickedFood={this.state.pickedFood}
                />
              )}
            />
          </Switch>
        </header>
      </Router>
    );
  }
}

export default App;
