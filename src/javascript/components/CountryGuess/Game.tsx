import React, { FormEvent, useState } from 'react';
import { FormControlProps } from 'react-bootstrap';
import { CountryGuessAlert, CountryGuessForm } from './';

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

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setState({
      ...state,
      isCorrect: validateCountryGuess(state.countryGuess, props.countrySolution),
      numGuess: state.numGuess + 1,
    });
  };

  const handleChange = (e: FormEvent<FormControlProps>) =>
    setState({
      ...state,
      countryGuess: e.currentTarget.value || '',
    });

  return (
    <div className="country-guess-game">
      {state.numGuess > 0 && (
        <CountryGuessAlert isCorrect={state.isCorrect} numGuess={state.numGuess}></CountryGuessAlert>
      )}
      <CountryGuessForm handleChange={handleChange} handleSubmit={handleSubmit}></CountryGuessForm>
    </div>
  );
};
