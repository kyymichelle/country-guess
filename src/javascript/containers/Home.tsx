import React from 'react';
import { Container } from 'react-bootstrap';
import { NavMain } from '../modules/Nav';

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
          <p>HELLO</p>
        </Container>
      </div>
    );
  }
}
