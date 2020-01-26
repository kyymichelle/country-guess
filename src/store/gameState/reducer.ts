import { SETUP, SETUP_SUCCESS, SETUP_ERROR, GameState, GameStateActionTypes } from './types';

const initialState: GameState = {
  isLoading: false,
  totalCorrect: 0,
  totalGuesses: 0,
  solutionKey: null,
};

export const gameStateReducer = (state = initialState, action: GameStateActionTypes): GameState => {
  switch (action.type) {
    case SETUP:
      return {
        ...state,
        isLoading: true,
      };

    case SETUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };

    case SETUP_ERROR:
      const { error } = action.payload;
      return {
        ...state,
        isLoading: false,
        error: error || 'There was an error fetching setting up :(',
      };

    default:
      return state;
  }
};
