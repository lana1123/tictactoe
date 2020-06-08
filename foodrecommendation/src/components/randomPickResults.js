import React from "react";
import "./randomPickResults.css";

//Child list items component / function
const RandomPickResults = ({ pickedFood }) => {
  return (
    <div className="randomPickResultsPage">
      <div className="randomPickResults">
        {pickedFood && pickedFood.map((food) => <div>{food.text}</div>)}
      </div>
    </div>
  );
};
export default RandomPickResults;
