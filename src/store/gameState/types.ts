// Interfaces
export interface GameState {
  totalCorrect: number;
  totalGuesses: number;
  currentSolution: string | null;
}

// Action names
export const SETUP = '@@app/countries/SETUP';

// Action definitions
interface SetupAction {
  type: typeof SETUP;
}

export type GameStateActionTypes = SetupAction;
