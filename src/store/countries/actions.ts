import { Action, ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';
import { keyBy } from 'lodash';
import {
  Country,
  FETCH_ALL,
  FETCH_ALL_SUCCESS,
  FETCH_ALL_ERROR,
  countriesQuery,
  CountriesState,
  CountriesActionTypes,
} from './types';

// export const fetchCountries = (): ThunkAction<Promise<Action>, CountriesState, void> => {
export const fetchCountries = (): any => {
  return (dispatch: any) => {
    dispatch(fetchAll()); // action to set isLoading to true

    // axios
    //   .post('https://countries.trevorblades.com/', {
    //     query: countriesQuery,
    //   })
    //   .then(response => {
    //     const { data } = response;

    //     if (data && data.data) {
    //       const { countries } = data.data;
    //       dispatch(fetchCountriesSuccess(countries));
    //     }
    //   })
    //   .catch(error => {
    //     console.log('ERROR:', error);
    //     dispatch(fetchCountriesError(error));
    //   });

    // Test data
    dispatch(
      fetchCountriesSuccess([
        { code: 'aus', name: 'australia' },
        { code: 'ch', name: 'china' },
        { code: 'nz', name: 'new zealand' },
        { code: 'kr', name: 'south korea' },
      ]),
    );
  };
};

export const fetchAll = (): CountriesActionTypes => ({
  type: FETCH_ALL,
});

export const fetchCountriesSuccess = (countries: Country[]): CountriesActionTypes => {
  const data = keyBy(countries, 'code');

  return {
    type: FETCH_ALL_SUCCESS,
    payload: {
      countriesKeys: Object.keys(data),
      countriesData: data,
    },
  };
};

export const fetchCountriesError = (error: any): CountriesActionTypes => ({
  type: FETCH_ALL_ERROR,
  payload: { error },
});
