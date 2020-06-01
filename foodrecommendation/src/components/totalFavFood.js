import React from "react";
import "./totalFavFood.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //For nice fonts
import FlipMove from "react-flip-move"; //For animation

//Child list items component / function
function TotalFavFood({ food }) {
  return <div className="totalfavfood">You have added X favourite food!</div>;
}
export default TotalFavFood;
