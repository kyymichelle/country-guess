import React, { FormEvent, useState } from 'react';
import { Button, Form } from 'react-bootstrap';

import { CountryGuessAlert } from './';

interface GameProps {
  countrySolution: string;
}

interface GameState {
  countryGuess: string;
  isCorrect: boolean;
  numGuess: number;
}

export const CountryGuessGame: React.FC<GameProps> = (props: GameProps) => {
  const [state, setState] = useState<GameState>({
    countryGuess: '',
    isCorrect: false,
    numGuess: 0,
  });

  const validateCountryGuess = (guess: string, solution: string): boolean => {
    return guess.toLowerCase() === solution.toLowerCase();
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setState({
      ...state,
      isCorrect: validateCountryGuess(state.countryGuess, props.countrySolution),
      numGuess: state.numGuess + 1,
    });
  };

  const handleChange = (e: any) =>
    setState({
      ...state,
      countryGuess: e.currentTarget.value,
    });

  return (
    <Form onSubmit={handleSubmit}>
      {state.numGuess > 0 && (
        <CountryGuessAlert isCorrect={state.isCorrect} numGuess={state.numGuess}></CountryGuessAlert>
      )}
      <Form.Group>
        <Form.Label>Country name</Form.Label>
        <Form.Control type="text" placeholder="..." onChange={handleChange} required />
      </Form.Group>
      <Button type="submit">Make your guess</Button>
    </Form>
  );
};
