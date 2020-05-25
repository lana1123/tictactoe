import React, { Component } from "react";
import "./square.css";
//import Square from "./square";

function Square(props) {
  return (
    <button
      //className={props.winner ? "square-winner" : "square"}
      className="square"
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
}

class Board extends Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        winner={this.props.winner}
      />
    );
  }

  createBoard = () => {
    const winData = this.props.winner;
    let winSymbol;
    let winSquare;
    let board = [];
    let z = 0;

    if (winData) {
      winSymbol = winData[0];

      winSquare = winData[1];
    }

    for (let i = 0; i < 3; i++) {
      let smallSquare = [];
      for (let j = 0; j < 3; j++) {
        if (i === 0) z = 0;
        else if (i === 1) z = 3;
        else z = 6;

        smallSquare.push(
          <div
            className={
              (winData && j + z === winSquare[0]) ||
              (winData && j + z === winSquare[1]) ||
              (winData && j + z === winSquare[2])
                ? "square-win"
                : "square"
            }
          >
            {this.renderSquare(j + z)}
          </div>
        );
      }
      board.push(<div className="board-row">{smallSquare}</div>);
    }
    return board;
  };

  render() {
    return <div>{this.createBoard()}</div>;
  }
}

export default Board;
