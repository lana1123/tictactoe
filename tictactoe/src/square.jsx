//Not using this component. Converted square to function in Board.jsx
import React, { Component } from "react";
import "./square.css";

class Square extends Component {
  render() {
    return (
      <button className="square" onClick={() => this.props.onClick()}>
        {this.props.value}
      </button>
    );
  }
}

export default Square;
