import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';
import { keyBy } from 'lodash';
import { Country, FETCH_ALL, FETCH_ALL_SUCCESS, FETCH_ALL_ERROR, countriesQuery, CountriesActionTypes } from './types';

export const fetchCountries: ActionCreator<ThunkAction<Promise<any>, Country[], null, CountriesActionTypes>> = () => {
  return async (dispatch: Dispatch) => {
    // action to set isLoading to true
    dispatch(fetchAll());

    // Using API call
    // axios
    //   .post('https://countries.trevorblades.com/', {
    //     query: countriesQuery,
    //   })

    // Using test data #1
    axios
      .get('data/countries.json')

      // Using test data #2
      // new Promise((resolve, reject) => {
      //   setTimeout(() => {
      //     resolve({
      //       data: {
      //         data: {
      //           countries: [
      //             { code: 'aus', name: 'australia' },
      //             { code: 'ch', name: 'china' },
      //             { code: 'nz', name: 'new zealand' },
      //             { code: 'kr', name: 'south korea' },
      //           ],
      //         },
      //       },
      //     });
      //   }, 2000);
      // })

      // Resolve promises
      .then((response: any) => {
        const { data } = response;

        if (data && data.data) {
          const { countries } = data.data;
          dispatch(fetchCountriesSuccess(countries));
        }
      })
      .catch(error => {
        console.log('ERROR:', error);
        dispatch(fetchCountriesError(error));
      });
  };
};

export const fetchAll = (): CountriesActionTypes => ({
  type: FETCH_ALL,
});

export const fetchCountriesSuccess = (countries: Country[]): CountriesActionTypes => {
  const data = keyBy(countries, 'code');

  return {
    type: FETCH_ALL_SUCCESS,
    payload: { data },
  };
};

export const fetchCountriesError = (error: any): CountriesActionTypes => ({
  type: FETCH_ALL_ERROR,
  payload: { error },
});
