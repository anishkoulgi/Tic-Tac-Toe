import React from "react";

import { OIcon, XIcon } from "../../../assets/svg";
import { Player } from "../../../types";
import styles from "./Scorecard.module.css";

interface Props {
  player: Player;
  isMyTurn: boolean;
}

const Scorecard: React.FC<Props> = ({ player, isMyTurn }) => {
  return (
    <div
      className={styles.box}
      style={{ borderColor: isMyTurn ? "white" : "transparent" }}
    >
      <div>{player.name}</div>
      <p className={styles.score}>{player.score}</p>
      <div className={styles.icon_container}>
        {player.name === "Player 1" ? <XIcon /> : <OIcon />}
      </div>
    </div>
  );
};

export default Scorecard;
