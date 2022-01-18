import React, { useState } from "react";
import { Button, Grid, Scoreboard } from "..";
import { Game as GameType } from "../../types";
import { generateEmptyState, getInitialState, updateGrid } from "../../utils";

import styles from "./Game.module.css";

const Game = () => {
  const [state, setState] = useState<GameType>(() => getInitialState());

  const { grid, isComplete, player1, player2, toPlay, winner, isDraw } = state;

  const handleClick = (row: number, col: number) => {
    setState((prev) => {
      const { updatedGrid, isComplete, isDraw } = updateGrid(
        row,
        col,
        prev.toPlay,
        prev.grid
      );
      let winningPlayer = {};
      if (isComplete) {
        const player = prev.toPlay === 1 ? "player1" : "player2";
        winningPlayer = {
          [player]: { ...prev[player], score: prev[player].score + 1 },
        };
      }
      return {
        ...prev,
        grid: updatedGrid,
        toPlay: prev.toPlay === 1 ? 2 : 1,
        isComplete,
        winner: isComplete ? prev.toPlay : null,
        isDraw,
        ...winningPlayer,
      };
    });
  };

  const resetGame = () => {
    setState((prev) => ({
      ...prev,
      isComplete: false,
      winner: null,
      toPlay: 1,
      isDraw: false,
      grid: generateEmptyState(),
    }));
  };

  return (
    <div className={styles.container}>
      <Scoreboard player1={player1} player2={player2} toPlay={toPlay} />
      {isComplete || isDraw ? (
        <div className={styles.overlay}>
          {isComplete ? <>Player {winner} Won!</> : <>Game is a Draw!</>}
        </div>
      ) : (
        <Grid grid={grid} handleClick={handleClick} />
      )}
      {(isComplete || isDraw) && (
        <Button onClick={resetGame} style={{ marginTop: "20px" }}>
          Restart
        </Button>
      )}
    </div>
  );
};

export default Game;
