import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Reservations from './components/reservations';

test('renders form elements in the Reservations component', () => {
  // Mock props to pass into the Reservations component
  const mockFormResData = {
    date: '',
    time: '',
    guests: 1,
    occasion: '',
  };

  const mockHandleChange = jest.fn();
  const mockAvailableTimes = ['17:00', '18:00', '19:00'];

  // Render the component with the necessary props
  render(
    <Reservations
      formResData={mockFormResData}
      handleChange={mockHandleChange}
      availableTimes={mockAvailableTimes}
      onSubmit={jest.fn()} // Mocking the onSubmit function as well
    />
  );

  // Test for presence of form elements
  const dateInput = screen.getByLabelText(/date/i);
  expect(dateInput).toBeInTheDocument();

  const timeSelect = screen.getByLabelText(/time/i);
  expect(timeSelect).toBeInTheDocument();

  const guestsInput = screen.getByLabelText(/number of guests/i);
  expect(guestsInput).toBeInTheDocument();

  const occasionSelect = screen.getByLabelText(/occasion/i);
  expect(occasionSelect).toBeInTheDocument();

  const submitButton = screen.getByRole('button', { name: /reserve/i });
  expect(submitButton).toBeInTheDocument();
});
