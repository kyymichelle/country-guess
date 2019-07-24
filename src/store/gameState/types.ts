// Interfaces
export interface GameState {
  isLoading: boolean;
  totalCorrect: number;
  totalGuesses: number;
  solution: {
    countryClue: string[];
    countryKey: string | null; // used to fetch the country data from countries reducer
  };
}

// Action names
export const SETUP = '@@app/countries/SETUP';
export const SETUP_SUCCESS = '@@app/countries/SETUP_SUCCESS';
export const SETUP_ERROR = '@@app/countries/SETUP_ERROR';

// Action definitions
interface SetupGameStateAction {
  type: typeof SETUP;
}

interface SetupGameStateSuccessAction {
  type: typeof SETUP_SUCCESS;
}

interface SetupGameStateErrorAction {
  type: typeof SETUP_ERROR;
  payload: {
    error: any;
  };
}

export type GameStateActionTypes = SetupGameStateAction | SetupGameStateSuccessAction | SetupGameStateErrorAction;
