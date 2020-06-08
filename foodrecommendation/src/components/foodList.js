import React, { Component } from "react";
import ListFavFood from "./listFavFood";
import "./foodList.css";
import { library } from "@fortawesome/fontawesome-svg-core"; //to add the icon into the library?
import { faTrash } from "@fortawesome/free-solid-svg-icons"; //for the trash icon
import TotalFavFood from "./totalFavFood";

library.add(faTrash); //to add the trash icon into the library

class FoodList extends Component {
  render() {
    const {
      food,
      deleteFood,
      addFood,
      handleInput,
      updateFood,
      currentFood,
    } = this.props;

    return (
      <div className="favFoodInput">
        What's your favourite food?
        <form id="fav-food-form" onSubmit={addFood}>
          <input
            type="text"
            placeholder="Enter your favourite food..."
            value={currentFood ? currentFood.text : ""}
            onChange={handleInput}
          />
          <button type="submit">Add</button>
        </form>
        <TotalFavFood totalFood={food ? food.length : null} />
        {food ? (
          <ListFavFood
            food={food}
            deleteFood={deleteFood}
            updateFood={updateFood}
          />
        ) : null}
      </div>
    );
  }
}

export default FoodList;
