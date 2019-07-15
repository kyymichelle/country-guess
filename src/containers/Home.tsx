import React from 'react';
import { Container } from 'react-bootstrap';
import { NavMain } from '../components/Nav';
import { CountryGuessGame } from '../components/CountryGuess';

export class Home extends React.Component<{}, {}> {
  render() {
    return (
      <div className="page-home">
        <NavMain></NavMain>
        <Container className="py-5">
          <h1>Home</h1>
          <CountryGuessGame countrySolution="australia"></CountryGuessGame>
        </Container>
      </div>
    );
  }
}
