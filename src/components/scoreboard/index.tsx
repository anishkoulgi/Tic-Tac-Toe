import React from "react";
import { Player } from "../../types";

import styles from "./Scoreboard.module.css";
import Scorecard from "./scorecard";

interface Props {
  player1: Player;
  player2: Player;
  toPlay: number;
}

const Scoreboard: React.FC<Props> = ({ player1, player2, toPlay }) => {
  return (
    <div className={styles.container}>
      <Scorecard player={player1} isMyTurn={toPlay === 1} />
      <Scorecard player={player2} isMyTurn={toPlay === 2} />
    </div>
  );
};

export default Scoreboard;
