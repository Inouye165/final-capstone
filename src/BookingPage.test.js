// Bookings.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BookingPage from './BookingPage.js'; 

test('renders static text in the Bookings component', () => {
  render(<Bookings />);

  // Replace 'Expected static text' with the actual static text you're checking for
  const staticTextElement = screen.getByText(/Expected static text/i);
  expect(staticTextElement).toBeInTheDocument();
});
