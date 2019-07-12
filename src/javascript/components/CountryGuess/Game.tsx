import React, { FormEvent, useState } from 'react';
import { Button, Form } from 'react-bootstrap';

import { CountryGuessAlert } from './';

interface GameProps {
  countrySolution: string;
}

// interface GameState {
//   countryGuess?: string;
//   isCorrect: boolean;
//   numGuess: number;
// }

export const CountryGuessGame: React.FC<GameProps> = (props: GameProps) => {
  const [countryGuess, setCountryGuess] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);
  const [numGuess, setNumGuess] = useState(0);

  const validateCountryGuess = (guess: string, solution: string): boolean => {
    return guess.toLowerCase() === solution.toLowerCase();
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsCorrect(validateCountryGuess(countryGuess, props.countrySolution));
    setNumGuess(numGuess + 1);
  };

  const handleChange = (e: any) => setCountryGuess(e.currentTarget.value);

  return (
    <Form onSubmit={handleSubmit}>
      {numGuess > 0 && <CountryGuessAlert isCorrect={isCorrect} numGuess={numGuess}></CountryGuessAlert>}
      <Form.Group>
        <Form.Label>Country name</Form.Label>
        <Form.Control type="text" placeholder="..." onChange={handleChange} required />
      </Form.Group>
      <Button type="submit">Make your guess</Button>
    </Form>
  );
};
