import { FETCH, FETCH_ALL, CountriesActionTypes, CountriesState } from './types';

export const initialState: CountriesState = {
  isLoading: false,
  countries: [],
};

export const countriesReducer = (state = initialState, action: CountriesActionTypes): CountriesState => {
  switch (action.type) {
    case FETCH_ALL:
      console.log('REDUCER FETCHALL', state);
      return {
        ...state,
        countries: [...state.countries, { code: 'aus', name: 'australia' }],
      };
    case FETCH:
    default:
      return state;
  }
};
