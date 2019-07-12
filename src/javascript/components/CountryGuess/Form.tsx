import React, { FormEvent } from 'react';
import { Button, Form, FormControlProps } from 'react-bootstrap';

interface FormProps {
  handleSubmit(e: FormEvent<HTMLFormElement>): void;
  handleChange(e: FormEvent<FormControlProps>): void;
}

export const CountryGuessForm: React.FC<FormProps> = (props: FormProps) => {
  const { handleChange, handleSubmit } = props;

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Country name</Form.Label>
        <Form.Control type="text" placeholder="..." onChange={handleChange} required />
      </Form.Group>
      <Button type="submit">Make your guess</Button>
    </Form>
  );
};
