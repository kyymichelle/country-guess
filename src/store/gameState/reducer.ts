import { SETUP, GameState, GameStateActionTypes } from './types';

const initialState: GameState = {
  totalCorrect: 0,
  totalGuesses: 0,
  currentSolution: null,
};

export const gameStateReducer = (state = initialState, action: GameStateActionTypes): GameState => {
  switch (action.type) {
    case SETUP:
      return {
        ...state,
      };

    default:
      return state;
  }
};
