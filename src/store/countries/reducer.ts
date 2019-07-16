import { FETCH, FETCH_ALL, FETCH_ALL_SUCCESS, FETCH_ALL_ERROR, CountriesActionTypes, CountriesState } from './types';

export const initialState: CountriesState = {
  isLoading: false,
  error: '',
  countries: [],
};

export const countriesReducer = (state = initialState, action: CountriesActionTypes): CountriesState => {
  switch (action.type) {
    case FETCH_ALL:
      console.log('REDUCER FETCHALL', state);
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_ALL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        countries: [...state.countries, { code: 'aus', name: 'australia' }],
      };
    case FETCH_ALL_ERROR:
      return {
        ...state,
        isLoading: false,
        error: 'There was an error :(',
      };
    case FETCH:
    default:
      return state;
  }
};
