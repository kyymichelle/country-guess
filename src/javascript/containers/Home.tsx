import React from 'react';
import { Container } from 'react-bootstrap';
import { NavMain } from '../components/Nav';
import { CountryGuessGame } from '../components/CountryGuess';

export class Home extends React.Component<{}, {}> {
  // state: State = {
  //   count: 0
  // };

  render() {
    return (
      <div className="page-home">
        <NavMain></NavMain>
        <Container>
          <h1>Home</h1>
          <CountryGuessGame countryAnswer="''"></CountryGuessGame>
        </Container>
      </div>
    );
  }
}
