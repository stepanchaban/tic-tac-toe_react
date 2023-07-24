import React, { useState } from 'react';
import './App.css';
import Board from './components/Board';
import ScoreBoard from './components/ScoreBoard';
import ResetButton from './components/ResetButton';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [scores, setScores] = useState({ xScore: 0, oScore: 0, drawScore: 0 });
  const [gameOver, setGameOver] = useState(false);

  const handleBoxClick = boxIdx => {
    // Update the board
    const updatedBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying ? 'X' : 'O';
      } else {
        return value;
      }
    });

    setBoard(updatedBoard);

    // Check if either player has won the game
    const winner = checkWinner(updatedBoard);

    if (winner) {
      if (winner === 'O') {
        let { oScore } = scores;
        oScore += 1;
        setScores({ ...scores, oScore });
      } else if (winner === 'X') {
        let { xScore } = scores;
        xScore += 1;
        setScores({ ...scores, xScore });
      }
    }

    const emptyCells = updatedBoard.filter(cell => cell === null);
    const isDraw = emptyCells.length === 0;

    if (isDraw) {
      let { drawScore } = scores;
      drawScore += 1;
      setScores({ ...scores, drawScore });
    }

    // Change active player
    setXPlaying(!xPlaying);
  };

  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  const checkWinner = cells => {
    for (let i = 0; i < lines.length; i++) {
      const [x, y, z] = lines[i];

      if (cells[x] && cells[x] === cells[y] && cells[y] === cells[z]) {
        setGameOver(true);
        return cells[x];
      }
    }
    return null;
  };

  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
  };

  return (
    <div className="App">
      <ScoreBoard scores={scores} xPlaying={xPlaying} />
      <Board board={board} onClick={gameOver ? resetBoard : handleBoxClick} />
      <ResetButton resetBoard={resetBoard} />
    </div>
  );
}

export default App;
