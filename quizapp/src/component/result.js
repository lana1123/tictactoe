import React, { Component } from "react";

const Result = ({ score, playAgain }) => (
  <div className="score-board">
    <div className="score">
      You scored {score} / 5 correct answers!
      <button className="playBtn" onClick={playAgain}>
        Play again!
      </button>
    </div>
  </div>
);

export default Result;
