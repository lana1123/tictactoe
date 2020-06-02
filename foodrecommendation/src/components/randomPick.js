import React from "react";
import "./totalFavFood.css";

//Child list items component / function
const RandomPick = ({ food }) => {
  return (
    <div className="">
      <h2>Suggest me food for the time</h2>
      {food.map((food) => (
        <div>{food.text}</div>
      ))}
    </div>
  );
};
export default RandomPick;
