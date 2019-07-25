import { ThunkAction } from 'redux-thunk';
import { fetchCountries } from '../countries/actions';
import { SETUP, SETUP_SUCCESS, SETUP_ERROR, GameStateActionTypes } from './types';

export const setupGameState = (): any => {};

export const setup = (): GameStateActionTypes => ({
  type: SETUP,
});

export const setupGameStateSuccess = (): GameStateActionTypes => ({
  type: SETUP_SUCCESS,
});

export const setupGameStateError = (error: any): GameStateActionTypes => ({
  type: SETUP_ERROR,
  payload: { error },
});
