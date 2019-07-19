import { FETCH_ALL, FETCH_ALL_SUCCESS, FETCH_ALL_ERROR, CountriesActionTypes, CountriesState } from './types';

const initialState: CountriesState = {
  isLoading: false,
  error: '',
  countries: [],
};

export const countriesReducer = (state = initialState, action: CountriesActionTypes): CountriesState => {
  switch (action.type) {
    case FETCH_ALL:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_ALL_SUCCESS:
      const { countries } = action.payload;
      console.log('FETCH SUCCESS', countries);
      return {
        ...state,
        isLoading: false,
        countries: [...countries],
      };

    case FETCH_ALL_ERROR:
      const { error } = action.payload;
      return {
        ...state,
        isLoading: false,
        error: error || 'There was an error fetching countries :(',
      };

    default:
      return state;
  }
};
