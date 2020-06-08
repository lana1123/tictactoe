import React, { useState } from "react";
import "./randomPickResults.css";

//Child list items component / function
function RandomPickResults({ pickedFood }) {
  const listRandomPickResults =
    pickedFood &&
    pickedFood.map((food) => {
      return (
        <div className="randomPickResults">
          <div key={food.text}>{food.text}</div>
        </div>
      );
    });

  return (
    <div>
      <div className="randomPickResultsPage">{listRandomPickResults}</div>
    </div>
  );
}
export default RandomPickResults;
