import { Country, CountriesState } from './types';

export const getCountries = (state: CountriesState): Country[] => {
  return state.countries;
};

export const getRandomCountry = (state: CountriesState): Country => {
  const { countries } = state;
  return countries.length > 0 ? countries[Math.floor(Math.random() * countries.length)] : null;
};
