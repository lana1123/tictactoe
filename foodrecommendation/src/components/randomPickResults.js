import React from "react";
import "./randomPick.css";

//Child list items component / function
const RandomPickResults = ({ pickedFood }) => {
  return (
    <div className="randomPick">
      {pickedFood.map((food) => (
        <div>{food.text}</div>
      ))}
    </div>
  );
};
export default RandomPickResults;
