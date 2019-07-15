import React from 'react';
import { Container } from 'react-bootstrap';
import { NavMain } from '../components/Nav';
import { CountryGuessGame } from '../components/CountryGuess';

export const Home: React.FC = () => {
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
