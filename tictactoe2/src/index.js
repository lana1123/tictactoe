import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Square(props) {
  return (
    <div className="squareButton">
      <button onClick={props.onClick}>{props.value}</button>
    </div>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        winnerSquares={this.props.winnerSquares}
      />
    );
  }

  gettingWinnerSquares = (z) => {
    const winnerSquares = this.props.winnerSquares;

    const firstSquare = winnerSquares[0];
    const secondSquare = winnerSquares[1];
    const thirdSquare = winnerSquares[2];

    return z == firstSquare || z == secondSquare || z == thirdSquare
      ? "squareWin"
      : "square";
  };

  boardRendering = () => {
    const winnerSquares = this.props.winnerSquares;
    let board = [];
    var z = 0;
    // Outer loop to create parent
    for (let i = 0; i < 3; i++) {
      let children = [];
      //Inner loop to create children
      for (let j = 0; j < 3; j++) {
        children.push(
          <div
            className={
              winnerSquares === null ? "square" : this.gettingWinnerSquares(z)
            }
          >
            {this.renderSquare(z++)}
          </div>
        );
      }
      //Create the parent and add the children
      board.push(<div className="board-row">{children}</div>);
    }
    return board;
  };

  render() {
    return <div>{this.boardRendering()}</div>;
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{ squares: Array(9).fill(null) }],
      xIsNext: true,
      stepNumber: 0,
      ascending: true,
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

    this.setState({
      history: history.concat([{ squares: squares }]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length,
    });
  }

  handleToggleClick() {
    this.setState({
      ascending: !this.state.ascending,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);
    const moves = history.map((step, move) => {
      const desc = move ? "Go to move #" + move : "Go to game start";
      return (
        <li key={move}>
          <button
            style={
              this.state.stepNumber == move
                ? { fontWeight: "bold" }
                : { fontWeight: "normal" }
            }
            onClick={() => this.jumpTo(move)}
          >
            {desc}
          </button>
        </li>
      );
    });

    let status;
    if (winner) {
      status = "Winner: " + winner[0];
    } else if (this.state.stepNumber == 9) {
      status = "Draw";
    } else {
      status = "Next player:" + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
            winnerSquares={winner ? winner[1] : null}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <div>
            <button onClick={() => this.handleToggleClick()}>Toggle</button>
          </div>
          <ol className={this.state.ascending ? "ascending" : "descending"}>
            {moves}
          </ol>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));

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
      return [squares[a], [[a], [b], [c]]];
    }
  }
  return null;
}
