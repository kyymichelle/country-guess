// Interfaces
export interface GameState {
  totalCorrect: number;
  totalGuesses: number;
  currentSolution: string;
}

export const SETUP = '@@app/gameState/SETUP';
export const SETUP_SUCCESS = '@@app/gameState/SETUP_SUCCESS';
