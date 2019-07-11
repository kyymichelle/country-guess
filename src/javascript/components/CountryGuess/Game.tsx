import React, { FormEvent, SyntheticEvent } from 'react';
import { Button, Form } from 'react-bootstrap';

interface GameProps {
  countryAnswer: string;
}

interface GameState {
  isCorrect: boolean;
  numGuesses: number;
}

export class CountryGuessGame extends React.Component<GameProps, GameState> {
  state: GameState = {
    isCorrect: false,
    numGuesses: 0,
  };

  validateForm(): boolean {
    return false;
  }

  handleSubmit(event: SyntheticEvent): void {
    event.preventDefault();
    console.log(event.currentTarget);
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Label>Country name</Form.Label>
          <Form.Control name="countryGuess" type="text" placeholder="Make your guess" required />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Button type="submit">Make your guess</Button>
      </Form>
    );
  }
}
