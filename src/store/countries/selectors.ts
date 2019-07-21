import { AppState } from '../';
import { Country, CountriesState } from './types';

export const getCountryByCode = (state: any, code: string): Country | undefined => {
  return state.countries ? state.countries.countriesData[code] : undefined;
};

export const getRandomCountryCode = (state: any): Country | null => {
  const { countriesKeys } = state.countries;
  return countriesKeys && countriesKeys.length > 0
    ? countriesKeys[Math.floor(Math.random() * countriesKeys.length)]
    : null;
};
