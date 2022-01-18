export interface Player {
  score: number;
  name: string;
}

export interface Game {
  grid: number[][];
  toPlay: 1 | 2;
  player1: Player;
  player2: Player;
  isComplete: boolean;
  winner: number | null;
  isDraw: boolean;
}
