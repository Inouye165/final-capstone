import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BookingPage from './BookingPage.js'; 
import { initializeTimes, updateTimes } from './api'; // Adjust the import path as needed
import { fetchAPI } from './api';

// Mock the fetchAPI function
jest.mock('./api', () => ({
  ...jest.requireActual('./api'),
  fetchAPI: jest.fn(() => ['17:00', '18:00', '19:00']),
}));

describe('Bookings Component and API Functions', () => {
  test('renders static text in the BookingPage component', () => {
    render(<BookingPage />);
    const staticTextElement = screen.getByText(/Make a Reservation/i); // Replace with actual static text from your component
    expect(staticTextElement).toBeInTheDocument();
  });

  test('initializeTimes returns non-empty array of available times', () => {
    const times = initializeTimes();
    expect(times).toEqual(['17:00', '18:00', '19:00']); // Ensure it matches the mock data
  });

  test('updateTimes updates the available times based on the selected date', () => {
    const date = new Date().toISOString().split('T')[0]; // Use a sample date
    const initialTimes = ['17:00', '18:00'];
    const updatedTimes = updateTimes(initialTimes, date);
    expect(updatedTimes).toEqual(['17:00', '18:00', '19:00']); // Check it matches the mock return value
  });
});
