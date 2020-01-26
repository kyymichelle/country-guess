import { GameState } from './types';

export const getSolutionKey = (state: GameState): string | null => {
  return state.solutionKey;
};
