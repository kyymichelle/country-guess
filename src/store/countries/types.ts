// Interfaces
export interface Country {
  code: string;
  name: string;
  emoji?: string;
  native?: string;
  phone?: string;
  currency?: string;
  languages?: Language;
}

export interface Language {
  code: string;
  name: string;
}

export interface CountriesState {
  isLoading: boolean;
  error: string;
  countries: Country[];
}

// GraphQL queries
export const countriesQuery = `
  {
    countries {
      code,
      name,
      emoji,
      native,
      phone,
      currency,
      languages{code,name}
    }
  }
`;

// Action names
export const FETCH_ALL = '@@app/countries/FETCH_ALL';
export const FETCH_ALL_SUCCESS = '@@app/countries/FETCH_ALL_SUCCESS';
export const FETCH_ALL_ERROR = '@@app/countries/FETCH_ALL_ERROR';

// Action definitions
interface FetchAllAction {
  type: typeof FETCH_ALL;
}

interface FetchAllActionSuccess {
  type: typeof FETCH_ALL_SUCCESS;
  payload: {
    countries: Country[];
  };
}

interface FetchAllActionError {
  type: typeof FETCH_ALL_ERROR;
  payload: {
    error: any;
  };
}

export type CountriesActionTypes = FetchAllAction | FetchAllActionSuccess | FetchAllActionError;
