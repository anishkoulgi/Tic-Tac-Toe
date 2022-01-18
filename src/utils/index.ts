import { Game } from "../types";

const generateRow = (): number[] => {
  return [...Array(3).fill(0)];
};

export const generateEmptyState = () => {
  return [...Array(3)].map(generateRow);
};

export const getInitialState = (): Game => {
  return {
    grid: generateEmptyState(),
    player1: {
      score: 0,
      name: "Player 1",
    },
    player2: {
      score: 0,
      name: "Player 2",
    },
    toPlay: 1,
    isComplete: false,
    winner: null,
    isDraw: false,
  };
};

export const cloneGrid = (grid: number[][]) => {
  return [...grid].map((item) => [...item]);
};

const checkEmptyInRow = (grid: number[][], row: number) => {
  return grid[row][0] && grid[row][1] && grid[row][2];
};

const checkEmptyInCol = (grid: number[][], col: number) => {
  return grid[0][col] && grid[1][col] && grid[2][col];
};

const checkEmptyInFirstDiag = (grid: number[][]) => {
  return grid[0][0] && grid[1][1] && grid[2][2];
};

const checkEmptyInSecondDiag = (grid: number[][]) => {
  return grid[0][2] && grid[1][1] && grid[2][0];
};

const checkGrid = (grid: number[][]) => {
  let rowsCheck = false,
    colsCheck = false,
    diagCheck = false;

  for (let i = 0; i < 3; ++i) {
    if (checkEmptyInRow(grid, i)) {
      rowsCheck =
        rowsCheck || (grid[i][0] === grid[i][1] && grid[i][0] === grid[i][2]);
    }
    if (checkEmptyInCol(grid, i)) {
      colsCheck =
        colsCheck || (grid[0][i] === grid[1][i] && grid[0][i] === grid[2][i]);
    }
  }
  if (rowsCheck || colsCheck) return true;

  if (checkEmptyInFirstDiag(grid)) {
    diagCheck =
      diagCheck || (grid[0][0] === grid[1][1] && grid[0][0] === grid[2][2]);
  }
  if (checkEmptyInSecondDiag(grid)) {
    diagCheck =
      diagCheck || (grid[0][2] === grid[1][1] && grid[0][2] === grid[2][0]);
  }

  return diagCheck;
};

const checkDraw = (grid: number[][]) => {
  for (let row = 0; row < 3; ++row) {
    for (let col = 0; col < 3; ++col) {
      if (grid[row][col] === 0) return false;
    }
  }
  return true;
};

export const updateGrid = (
  row: number,
  col: number,
  val: number,
  grid: number[][]
) => {
  const clonedGrid = cloneGrid(grid);
  clonedGrid[row][col] = val;
  const isComplete = checkGrid(clonedGrid);
  let isDraw = false;
  if (!isComplete) isDraw = checkDraw(clonedGrid);

  return { updatedGrid: clonedGrid, isComplete, isDraw };
};
