import React, { useState } from "react";
import "./randomPickResults.css";

//Child list items component / function
function RandomPickResults({ pickedFood }) {
  return (
    <div className="randomPickResultsPage">
      <div>
        {pickedFood &&
          pickedFood.map((food) => (
            <div className="randomPickResults">{food.text}</div>
          ))}
      </div>
    </div>
  );
}
export default RandomPickResults;
