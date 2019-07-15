import { FETCH, FETCH_ALL, CountriesActionTypes, CountriesState } from './types';

export const initialState: CountriesState = {
  isLoading: false,
  countries: [],
};

export const countriesReducer = (state = initialState, action: CountriesActionTypes): CountriesState => {
  console.log('Countries reducer:', action);

  switch (action.type) {
    default:
      return state;
  }
};
