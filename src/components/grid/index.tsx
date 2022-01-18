import React from "react";
import { Box } from "..";

import styles from "./Grid.module.css";

interface Props {
  grid: number[][];
  handleClick: (row: number, col: number) => void;
}

const Grid: React.FC<Props> = ({ grid, handleClick }) => {
  return (
    <div className={styles.grid}>
      {grid.map((row, rowId) =>
        row.map((box, colId) => (
          <Box
            key={rowId * 3 + colId}
            val={box}
            col={colId}
            row={rowId}
            handleClick={handleClick}
          />
        ))
      )}
    </div>
  );
};

export default Grid;
