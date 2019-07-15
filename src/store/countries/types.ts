// Interfaces
export interface Country {
  code: string;
  name: string;
  emoji: string;
  native: string;
  phone: string;
  currency: string;
  languages: Language;
}

export interface Language {
  code: string;
  name: string;
}

export interface CountriesState {
  isLoading: boolean;
  countries: Country[];
}

// Action names
export const FETCH = '@@app/countries/FETCH';
export const FETCH_ALL = '@@app/countries/FETCH_ALL';

// Action definitions
interface FetchAction {
  type: typeof FETCH;
}

interface FetchAllAction {
  type: typeof FETCH_ALL;
}

export type CountriesActionTypes = FetchAction | FetchAllAction;
