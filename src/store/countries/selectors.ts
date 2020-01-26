import { Country, CountriesState } from './types';

export const getIsLoading = (state: CountriesState): boolean => {
  return state ? state.isLoading : false;
};

export const getCountriesKeys = (state: CountriesState): string[] => {
  return Object.keys(state.data);
};

export const getCountryByKey = (state: CountriesState, key: string | null): Country | null => {
  return key ? state.data[key] : null;
};

export const getRandomCountryKey = (state: CountriesState): string | null => {
  const countriesKeys = getCountriesKeys(state);
  return countriesKeys && countriesKeys.length > 0
    ? countriesKeys[Math.floor(Math.random() * countriesKeys.length)]
    : null;
};
