import React, { FormEvent } from 'react';
import { FormControlProps } from 'react-bootstrap';
import { CountryGuessAlert, CountryGuessForm } from '.';

interface GameProps {
  countrySolution: string;
}

interface GameState {
  countryGuess: string;
  isCorrect: boolean;
  guessCount: number;
}

export const CountryGuessGame: React.FC<GameProps> = (props: GameProps) => {
  const [state, setState] = React.useState<GameState>({
    countryGuess: '',
    isCorrect: false,
    guessCount: 0,
  });

  const validateCountryGuess = (guess: string, solution: string): boolean => {
    return guess.toLowerCase() === solution.toLowerCase();
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setState({
      ...state,
      isCorrect: validateCountryGuess(state.countryGuess, props.countrySolution),
      guessCount: state.guessCount + 1,
    });
  };

  const handleChange = (e: FormEvent<FormControlProps>) =>
    setState({
      ...state,
      countryGuess: e.currentTarget.value || '',
    });

  return (
    <div className="country-guess-game">
      {state.guessCount > 0 && (
        <CountryGuessAlert isCorrect={state.isCorrect} guessCount={state.guessCount}></CountryGuessAlert>
      )}
      <CountryGuessForm handleChange={handleChange} handleSubmit={handleSubmit}></CountryGuessForm>
    </div>
  );
};
