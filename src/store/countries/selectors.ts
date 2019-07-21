import { AppState } from '../';
import { Country, CountriesState } from './types';

export const getCountries = (state: any): Country[] | null => {
  return state.countries;
};

export const getRandomCountry = (state: any): Country | null => {
  const { countries } = state.countries;
  return countries && countries.length > 0 ? countries[Math.floor(Math.random() * countries.length)] : null;
};
