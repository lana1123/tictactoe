import React, { Component } from "react";
import ListFavFood from "./listFavFood";
import "./foodList.css";
import { library } from "@fortawesome/fontawesome-svg-core"; //to add the icon into the library?
import { faTrash } from "@fortawesome/free-solid-svg-icons"; //for the trash icon
import TotalFavFood from "./totalFavFood";

library.add(faTrash); //to add the trash icon into the library

class FoodList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //declaring a state where items containing text and key
      food: [],
      currentFood: {
        text: "",
        key: "",
      },
    };
  }

  handleInput = (e) => {
    this.setState({
      currentFood: {
        text: e.target.value,
        key: Date.now(),
      },
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
      <div className="favFoodInput">
        What's your favourite food?
        <form id="fav-food-form" onSubmit={this.addFood}>
          <input
            type="text"
            placeholder="Enter your favourite food..."
            value={this.state.currentFood.text}
            onChange={this.handleInput}
          />
          <button type="submit">Add</button>
        </form>
        <TotalFavFood totalFood={this.state.food.length} />
        <ListFavFood
          food={this.state.food}
          deleteFood={this.deleteFood}
          updateFood={this.updateFood}
        />
      </div>
    );
  }
}

export default FoodList;
