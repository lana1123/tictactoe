import React from "react";
import "./randomPick.css";

//Child list items component / function
const RandomPick = ({ food, handleClick, pickedFood }) => {
  return (
    <div className="randomPickContainer">
      <h2>Suggest me food for the time</h2>
      <button onClick={handleClick}>Pick</button>
      <div className="randomPick">
        {pickedFood.map((food) => (
          <div>{food.text}</div>
        ))}
      </div>
    </div>
  );
};
export default RandomPick;
