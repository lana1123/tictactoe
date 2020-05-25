import React, { Component } from "react";
import "./ListItems.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; //For nice fonts
import FlipMove from "react-flip-move"; //For animation

//Child list items component / function
function ListItems(props) {
  //passing props as param
  const items = props.items; //assigning props.items as const items
  const listItems = items.map((item) => {
    //assigning each item in items as listItems
    return (
      <div className="list" key={item.key}>
        <p>
          <input
            type="text"
            id={item.key}
            value={item.text}
            onChange={(e) => props.setUpdate(e.target.value, item.key)}
          />
          <span>
            <FontAwesomeIcon
              className="faicons"
              icon="trash"
              onClick={() => props.deleteItem(item.key)}
            />
          </span>
        </p>
      </div>
    );
  });
  return (
    <div>
      <FlipMove duration={300} easing="ease-in-out">
        {listItems}
      </FlipMove>
    </div>
  );
}
export default ListItems;
