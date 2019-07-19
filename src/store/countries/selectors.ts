import { AppState } from '../';
import { Country, CountriesState } from './types';

// export const getCountries = (state: CountriesState): Country[] => {
//   return state.countries;
// };

export const getRandomCountry = (state: any): Country | null => {
  const { countries } = state.countries;
  const country = countries.length > 0 ? countries[Math.floor(Math.random() * countries.length)] : null;
  console.log('GET', country);
  return country;
};
