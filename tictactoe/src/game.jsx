import React, { Component } from "react";
import Board from "./board";
import "./square.css";

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return [squares[a], lines[i]];
    }
  }
  return null;
}

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      xIsNext: true,
      stepNumber: 0,
      buttonStyle: {
        style: "normal",
        key: 1,
      },
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";

    const newButtonStyles = this.state.buttonStyle;

    const moves = history.map((step, move) => {
      this.setState({
        history: history.concat([{ squares: squares }]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext,
        buttonStyle: {
          key: move + 2,
          style: "normal",
        },
      });
    });

    //console.log(this.state.buttonStyle);
  }

  jumpTo(position) {
    const newbuttonStyles = this.state.buttonStyle;

    // console.log(step);
    // const history = this.state.history.slice(0, this.state.stepNumber + 1);

    const history = this.state.history;
    //  console.log(position);
    //   console.log(this.state.buttonStyle);
    const moves = history.map((step, move) => {
      console.log(move);
      console.log(position);
      console.log(newbuttonStyles);
      if (step.newButtonStyles.key == move) {
        step.newButtonStyles.style = "bold";
      }

      this.setState({
        stepNumber: position,
        xIsNext: position % 2 === 0,
        buttonStyle: {
          key: move,
          style: this.newButtonStyles.style,
        },
      });
    });
    //  console.log(newbuttonStyles.key);
    // buttonStyles.map((buttonStyle) => {
    // if (newbuttonStyles.key === step + 1) {
    //   buttonStyle.key = "bold";
    // }
    // });

    // this.setState({
    //   stepNumber: position,
    //   xIsNext: position % 2 === 0,
    //   buttonStyle: {
    //     style: newbuttonStyles.key === position ? "bold" : "normal",
    //   },
    // });
    // console.log(this.state.id);
    // console.log("HERE");
    // console.log(this.state.buttonStyle);
  }

  boldSelectedMove(step) {
    // setUpdate(text, key) {
    //   const items = this.state.items;
    //   items.map((item) => {
    //     if (item.key === key) {
    //       item.text = text;
    //     }
    //   });
    //   this.setState({
    //     items: items,
    //   });
    // }
    let fontStyle = "normal";
    const items = this.state.history;
    items.map((item, move) => {
      if (item.key === step) {
        fontStyle = "bold";
      }
    });

    // fontStyle = "fontWeight: bold";
    // console.log(fontStyle);
    return fontStyle;
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const moves = history.map((step, move) => {
      //each moves are stored in the param step, whereas the position in the array is stored in move
      const desc = move ? "Go to move #" + move : "Go to game start";

      return (
        <li key={move}>
          <button
            onClick={() => this.jumpTo(move)}
            style={{ fontWeight: this.boldSelectedMove(move) }}
          >
            {desc}
          </button>
        </li>
      );
    });

    // console.log({ moves });

    let status;
    if (winner) {
      status = "Winner: " + winner[0];
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
      // let temp = this.current.squares;
      //   const notNullable = data.filter(
      //     (temp) => !Object.values(temp).includes(null)
      //   );
      //   console.log(notNullable);
      //   console.log(notNullable.length);
      //   console.log(current.squares);
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
            winner={winner}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
