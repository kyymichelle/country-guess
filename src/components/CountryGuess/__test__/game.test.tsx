import React, { FormEvent } from 'react';
import { mount, ReactWrapper } from 'enzyme';

import { CountryGuessGame } from '..';

describe('CountryGuessGame', () => {
  let wrapper: ReactWrapper;
  let mockState: object;

  // Constants
  const initProps = {
    solution: { code: 'aus', name: 'australia' },
  };

  const initState = {
    countryGuess: '',
    isCorrect: false,
    guessCount: 110,
  };

  const formSubmitEvent = {
    preventDefault: () => {},
  } as FormEvent<HTMLFormElement>;

  // Mocks and spies
  const mockSetState = jest.fn().mockImplementation(state => {
    mockState = { ...state };
  });

  const useStateSpy = jest.spyOn(React, 'useState').mockImplementation(() => [mockState, mockSetState]);

  // Setup
  beforeEach(() => {
    mockState = { ...initState };
    wrapper = mount(<CountryGuessGame {...initProps} />);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  // Tests
  it('renders', () => {
    mount(<CountryGuessGame {...initProps} />);
  });

  it('inits state', () => {
    expect(useStateSpy).toHaveBeenCalled();
  });

  it('submits form and increase guessCount', () => {
    const form = wrapper.find('form[name="country-guess-form"]').props();

    if (form) {
      // @ts-ignore: undefined form should be caught
      form.onSubmit(formSubmitEvent);
    }

    expect(mockSetState).toHaveBeenCalledWith({
      ...initState,
      guessCount: 1,
    });
  });

  it('updates countryGuess onChange', () => {
    const guess = 'hello world';
    const input = wrapper.find('input[name="guess-input"]').props();

    if (input) {
      // @ts-ignore: undefined input should be caught
      input.onChange({ currentTarget: { value: guess } } as FormEvent);
    }

    expect(mockSetState).toHaveBeenCalledWith({
      ...initState,
      countryGuess: guess,
    });
  });

  // TODO: find a better way to handle testing component state
  //
  // it.only('validates correct countryGuess', () => {
  //   const guess = 'Australia';
  //   const input = wrapper.find('input[name="guess-input"]').props();
  //   const form = wrapper.find('form[name="country-guess-form"]').props();

  //   if (input && form) {
  //     // @ts-ignore: undefined input should be caught
  //     input.onChange({ currentTarget: { value: guess } } as FormEvent);
  //     // @ts-ignore: undefined form should be caught
  //     form.onSubmit(formSubmitEvent);
  //   }

  //   expect(mockSetState).toHaveBeenCalledWith({
  //     ...initState,
  //     isCorrect: true,
  //     countryGuess: guess,
  //   });
  // });
});
