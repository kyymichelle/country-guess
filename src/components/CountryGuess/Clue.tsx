import React from 'react';

interface ClueProps {
  countryName: string;
}

const clueStyle = {
  letterSpacing: '5px',
  marginLeft: '10px',
};

export const CountryGuessClue: React.FC<ClueProps> = (props: ClueProps) => {
  const { countryName } = props;
  const clue = countryName.toUpperCase().replace(/(?<!\b)\w/g, '_');

  return (
    <h2>
      Clue: <span style={clueStyle}>{clue}</span>
    </h2>
  );
};
