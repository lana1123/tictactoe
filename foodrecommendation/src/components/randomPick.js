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
    <div className="randomPickContainer">
      <h2>
        Suggest me food for the
        <span className="drop-down">
          <select value={duration} onChange={handleDuration}>
            <option selected value="duration">
              (Choose your duration)
            </option>
            <option value="timebeing">Time being</option>
            <option value="day">Day</option>
            <option value="week">Week</option>
            <option value="month">Month</option>
          </select>
        </span>
      </h2>
      <button onClick={handleClick}>Pick</button>
      {food.length > 0 ? (
        <RandomPickResults pickedFood={pickedFood} />
      ) : (
        <p>You have not entered any favourite food</p>
      )}
    </div>
  );
};
export default RandomPick;
