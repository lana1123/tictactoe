import React, { Component } from "react";
import ListFavFood from "./listFavFood";
import { library } from "@fortawesome/fontawesome-svg-core"; //to add the icon into the library?
import { faTrash } from "@fortawesome/free-solid-svg-icons"; //for the trash icon

library.add(faTrash); //to add the trash icon into the library

class FavFoodInput extends Component {
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

  render() {
    return (
      <div>
        <div>
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
        </div>
        <div>
          <ListFavFood food={this.state.food} />
        </div>
      </div>
    );
  }
}

export default FavFoodInput;
