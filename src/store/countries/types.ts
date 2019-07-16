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

// Action names
export const FETCH = '@@app/countries/FETCH';
export const FETCH_ALL = '@@app/countries/FETCH_ALL';
export const FETCH_ALL_SUCCESS = '@@app/countries/FETCH_ALL_SUCCESS';
export const FETCH_ALL_ERROR = '@@app/countries/FETCH_ALL_ERROR';

// Action definitions
interface FetchAction {
  type: typeof FETCH;
  payload: {
    code: string;
  };
}

interface FetchAllAction {
  type: typeof FETCH_ALL;
}

interface FetchAllActionSuccess {
  type: typeof FETCH_ALL_SUCCESS;
  payload: {
    data: Country[];
  };
}

interface FetchAllActionError {
  type: typeof FETCH_ALL_ERROR;
  payload: {
    error: any;
  };
}

export type CountriesActionTypes = FetchAction | FetchAllAction | FetchAllActionSuccess | FetchAllActionError;
