import React from "react";
import RandomPickResults from "./randomPickResults";
import "./randomPick.css";

//Child list items component / function
const RandomPick = ({
  food,
  handleClick,
  pickedFood,
  duration,
  handleDuration,
}) => {
  return (
    <div className="randomPickPage">
      <div className="randomPickContainer">
        <div className="promptText">Suggest me food for the</div>
        <div className="drop-down">
          <select value={duration} onChange={handleDuration}>
            <option value="duration">(Choose your duration)</option>
            <option value="timebeing">Time being</option>
            <option value="day">Day</option>
            <option value="week">Week</option>
            <option value="month">Month</option>
          </select>
        </div>
        <div>
          <button onClick={handleClick}>Pick</button>
        </div>
        <div>
          {food && food.length > 0 ? (
            <RandomPickResults pickedFood={pickedFood} />
          ) : (
            <p>You have not entered any favourite food</p>
          )}
        </div>
      </div>
    </div>
  );
};
export default RandomPick;
