import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //For nice fonts
import FlipMove from "react-flip-move"; //For animation

//Child list items component / function
function ListFavFood({ food, deleteFood }) {
  const listFavFood = food.map((food) => {
    return (
      <div>
        <p>
          <input type="text" id={food.key} value={food.text} />
          <span>
            <FontAwesomeIcon
              className="faicons"
              icon="trash"
              onClick={() => deleteFood(food.key)}
            />
          </span>
        </p>
      </div>
    );
  });

  return (
    <div>
      <FlipMove duration={300} easing="ease-in-out">
        {listFavFood}
      </FlipMove>
    </div>
  );
}
export default ListFavFood;
