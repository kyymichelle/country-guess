import React from 'react';
import { Alert } from 'react-bootstrap';

// Enum mapping status to bootstrap classes
enum Status {
  Default = 'primary',
  Success = 'success',
  Fail = 'danger',
}

interface AlertProps {
  isCorrect: boolean;
  numGuess: number;
}

export const CountryGuessAlert: React.FC<AlertProps> = (props: AlertProps) => {
  const { isCorrect, numGuess } = props;
  return (
    <Alert variant={isCorrect ? Status.Success : Status.Fail}>
      {isCorrect ? <h3>Correct!</h3> : <h3>Incorrect</h3>}
      <p>
        You have made {numGuess} guess{numGuess > 1 && 'es'}
      </p>
    </Alert>
  );
};
