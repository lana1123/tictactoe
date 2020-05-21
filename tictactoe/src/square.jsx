import React, { Component } from "react";
import "./square.css";

class Square extends Component {
  state = {
    value: 0,
  };

  handleClick(value) {
    this.setState({ value: value + 1 });
  }

  render() {
    return (
      <button
        className="square"
        onClick={(value) => this.handleClick(this.state.value)}
      >
        {this.state.value}
      </button>
    );
  }
}

export default Square;
