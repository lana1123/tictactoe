import React from "react";
import RandomPickResults from "./randomPickResults";
import "./randomPick.css";

//Child list items component / function
const RandomPick = ({ food, handleClick, pickedFood }) => {
  return (
    <div className="randomPickContainer">
      <h2>Suggest me food for the time</h2>
      <button onClick={handleClick}>Pick</button>
      <RandomPickResults pickedFood={pickedFood} />
    </div>
  );
};
export default RandomPick;
