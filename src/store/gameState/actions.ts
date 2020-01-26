import { ActionCreator } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { SETUP, SETUP_SUCCESS, SETUP_ERROR, GameStateActionTypes } from './types';

export const setupGameState: ActionCreator<ThunkAction<Promise<any>, {}, null, GameStateActionTypes>> = (
  initialCountry: string,
) => {
  return async (dispatch: ThunkDispatch<any, any, any>, getState: any) => {
    // action to set isLoading to true
    dispatch({ type: SETUP });
    console.log('STATE', initialCountry, getState());

    // dispatch(fetchCountries()).then((wut: any) => {
    //   console.log('WUT', wut);
    //   console.log('woah', getState());
    // });

    // let wut = await dispatch(fetchCountries());
    // console.log('WUT', wut);

    // setTimeout(() => {
    //   console.log('LOL');
    //   console.log('woah', getState());
    // });
  };
};

export const setupGameStateSuccess = (): GameStateActionTypes => ({
  type: SETUP_SUCCESS,
});

export const setupGameStateError = (error: any): GameStateActionTypes => ({
  type: SETUP_ERROR,
  payload: { error },
});
