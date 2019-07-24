import { SETUP, GameState, GameStateActionTypes } from './types';

const initialState: GameState = {
  isLoading: false,
  totalCorrect: 0,
  totalGuesses: 0,
  solution: {
    countryClue: [],
    countryKey: null,
  },
};

export const gameStateReducer = (state = initialState, action: GameStateActionTypes): GameState => {
  switch (action.type) {
    case SETUP:
      return {
        ...state,
        isLoading: true,
      };

    default:
      return state;
  }
};
