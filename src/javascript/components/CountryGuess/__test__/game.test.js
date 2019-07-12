import React from 'react';
import Enzyme from 'enzyme';

import { CountryGuessGame } from '../';

describe('CountryGuessGame', () => {
  it('renders', () => {
    Enzyme.shallow(<CountryGuessGame />);
  });
});
