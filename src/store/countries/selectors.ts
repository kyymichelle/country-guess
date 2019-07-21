import { Country } from './types';

export const getIsLoading = (state: any): boolean => {
  return state.countries ? state.countries.isLoading : false;
};

export const getCountryByCode = (state: any, code: string | null): Country | undefined => {
  return state.countries && code ? state.countries.countriesData[code] : undefined;
};

export const getRandomCountryCode = (state: any): string | null => {
  const { countriesKeys } = state.countries;
  return countriesKeys && countriesKeys.length > 0
    ? countriesKeys[Math.floor(Math.random() * countriesKeys.length)]
    : null;
};
