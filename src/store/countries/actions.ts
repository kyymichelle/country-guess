import { FETCH, FETCH_ALL } from './types';

export const fetchCountryByCode = (code: string) => {
  return {
    type: FETCH,
    payload: { code },
  };
};

export const fetchCountries = () => {
  return {
    type: FETCH_ALL,
  };
};
