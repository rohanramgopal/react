import React, { useState } from "react";

export default function XOGame() {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "" , ""]);
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState("");

  function checkWinner(newBoard) {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let pattern of winningPatterns) {
      const a = pattern[0];
      const b = pattern[1];
      const c = pattern[2];

      if (
        newBoard[a] !== "" &&
        newBoard[a] === newBoard[b] &&
        newBoard[a] === newBoard[c]
      ) {
        return newBoard[a];
      }
    }

    return "";
  }

  function handleClick(index) {
    if (board[index] !== "" || winner !== "") {
      return;
    }

    const newBoard = [...board];

    newBoard[index] = player;

    setBoard(newBoard);

    const gameWinner = checkWinner(newBoard);

    if (gameWinner !== "") {
      setWinner(gameWinner);
    } else {
      setPlayer(player === "X" ? "O" : "X");
    }
  }

  function restartGame() {
    setBoard(["", "", "", "", "", "", "", ""]);
    setPlayer("X");
    setWinner("");
  }

  return (
    <div className="game">
      <h1>XO Game</h1>

      {winner ? (
        <h2>Player {winner} Wins!</h2>
      ) : (
        <h2>Player {player}'s Turn</h2>
      )}

      <div className="board">
        {board.map((value, index) => (
          <button
            className="box"
            key={index}
            onClick={() => handleClick(index)}
          >
            {value}
          </button>
        ))}
      </div>

      <button className="restart" onClick={restartGame}>
        Restart Game
      </button>
    </div>
  );
}