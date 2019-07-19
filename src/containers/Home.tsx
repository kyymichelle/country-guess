import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import { fetchCountries } from '../store/countries/actions';
import { getRandomCountry } from '../store/countries/selectors';
import { NavMain } from '../components/Nav';
import { CountryGuessGame } from '../components/CountryGuess';

export const Home: React.FC = () => {
  const dispatch = useDispatch();
  const country = useSelector(state => getRandomCountry(state));

  React.useEffect(() => {
    dispatch(fetchCountries()); // Populate store
  }, [dispatch]);

  return (
    <div className="page-home">
      <NavMain></NavMain>
      <Container className="py-5">
        <h1>Home</h1>
        <h2>Solution: {JSON.stringify(country)}</h2>
        <CountryGuessGame countrySolution="australia"></CountryGuessGame>
      </Container>
    </div>
  );
};
