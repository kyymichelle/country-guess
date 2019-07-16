import React from 'react';
import { useDispatch } from 'react-redux';
import { Container } from 'react-bootstrap';
import { fetchCountries } from '../store/countries/actions';
import { NavMain } from '../components/Nav';
import { CountryGuessGame } from '../components/CountryGuess';

export const Home: React.FC = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <div className="page-home">
      <NavMain></NavMain>
      <Container className="py-5">
        <h1>Home</h1>
        <CountryGuessGame countrySolution="australia"></CountryGuessGame>
      </Container>
    </div>
  );
};
