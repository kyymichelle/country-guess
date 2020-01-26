import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';

import { AppState } from '../store';
import { getSolutionKey, setupGameState } from '../store/gameState';
import {
  fetchCountries,
  getIsLoading,
  getCountriesKeys,
  getCountryByKey,
  getRandomCountryKey,
} from '../store/countries';

import { NavMain } from '../components/Nav';
import { CountryGuessGame } from '../components/CountryGuess';

export const Home: React.FC = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: AppState) => getIsLoading(state.countries));
  const countryKey = useSelector((state: AppState) => getRandomCountryKey(state.countries));
  const solutionKey = useSelector((state: AppState) => getSolutionKey(state.gameState));
  // const solution = useSelector((state: AppState) => getCountryByKey(state, countryCode));
  const countriesKeys = useSelector((state: AppState) => getCountriesKeys(state.countries));

  useEffect(() => {
    dispatch(fetchCountries()); // Populate store
  }, [dispatch]);

  useEffect(() => {
    // if (!solutionKey && countryKey) {
    //   console.log('KEYS', { solutionKey, countryKey });
    //   dispatch(setupGameState(countryKey));
    // }
  }, [countriesKeys]);

  return (
    <div className="page-home">
      <NavMain></NavMain>
      <Container className="py-5">
        <h1>Guess the country</h1>
        {isLoading && <h1>Loading...</h1>}
        {/* {!isLoading && country ? (
          <CountryGuessGame solution={country}></CountryGuessGame>
        ) : (
          <h2>Loading countries...</h2>
        )} */}
      </Container>
    </div>
  );
};
