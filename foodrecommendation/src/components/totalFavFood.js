import React from "react";
import "./totalFavFood.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //For nice fonts
import FlipMove from "react-flip-move"; //For animation

//Child list items component / function
function TotalFavFood({ totalFood }) {
  return (
    <div className="totalfavfood">
      You have added <span>{totalFood}</span> favourite food!
    </div>
  );
}
export default TotalFavFood;
