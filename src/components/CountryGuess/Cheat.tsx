import React from 'react';
import { Button } from 'react-bootstrap';
import { Country } from '../../store/countries/types';

interface CheatProps {
  country: Country;
}

export const CountryGuessCheat: React.FC<CheatProps> = (props: CheatProps) => {
  const [isShow, setIsShow] = React.useState(false);

  return (
    <div className="mt-5">
      <Button
        variant={'danger'}
        onClick={() => {
          setIsShow(!isShow);
        }}>
        Toggle the solution
      </Button>
      {isShow && <p className="mt-3">Solution: {JSON.stringify(props.country)}</p>}
    </div>
  );
};
