import React from "react";
import { OIcon, XIcon } from "../../assets/svg";

import styles from "./Box.module.css";

interface Props {
  row: number;
  col: number;
  handleClick: (row: number, col: number) => void;
  val: number;
}

const Box: React.FC<Props> = ({ row, col, handleClick, val }) => {
  return (
    <button
      disabled={val !== 0}
      className={styles.box}
      onClick={() => {
        handleClick(row, col);
      }}
    >
      {val === 0 ? null : val === 1 ? <XIcon /> : <OIcon />}
    </button>
  );
};

export default Box;
