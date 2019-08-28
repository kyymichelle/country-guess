import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';

import { fetchCountries } from '../store/countries/actions';
import { setupGameState } from '../store/gameState/actions';
import { getIsLoading, getCountriesKeys, getCountryByCode, getRandomCountryCode } from '../store/countries/selectors';

import { NavMain } from '../components/Nav';
import { CountryGuessGame } from '../components/CountryGuess';

export const Home: React.FC = () => {
  const dispatch = useDispatch();
  // const countryCode = useSelector(state => getRandomCountryCode(state));
  const isLoading = useSelector(state => getIsLoading(state));
  // const country = useSelector(state => getCountryByCode(state, countryCode));
  const countriesKeys = useSelector(state => getCountriesKeys(state));

  React.useEffect(() => {
    dispatch(fetchCountries()); // Populate store
  }, [dispatch]);

  React.useEffect(() => {
    console.log('KEYS', countriesKeys);
    if (countriesKeys && countriesKeys.length > 0) {
      dispatch(setupGameState('zimzalabim'));
    }
  }, [countriesKeys]);

  return (
    <div className="page-home">
      <NavMain></NavMain>
      <Container className="py-5">
        <h1>Guess the country</h1>
        {/* {!isLoading && country ? (
          <CountryGuessGame solution={country}></CountryGuessGame>
        ) : (
          <h2>Loading countries...</h2>
        )} */}
      </Container>
    </div>
  );
};
