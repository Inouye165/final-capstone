import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Reservations from './components/reservations';

test('renders form elements and interacts with local storage', () => {
  // Mock props
  const mockFormResData = {
    date: '',
    time: '',
    guests: 1,
    occasion: '',
  };
  const mockHandleChange = jest.fn();
  const mockAvailableTimes = ['17:00', '18:00', '19:00'];
  const mockOnSubmit = jest.fn(); 

  // Render the component
  render(
    <Reservations
      formResData={mockFormResData}
      handleChange={mockHandleChange}
      availableTimes={mockAvailableTimes}
      onSubmit={mockOnSubmit} 
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

  // --- Test writing to local storage ---
  // Mock localStorage before each interaction
  Object.defineProperty(window, 'localStorage', {
    value: {
      getItem: jest.fn(),
      setItem: jest.fn(),
    },
    writable: true,
  });

  fireEvent.click(submitButton); 

  // Assert that localStorage.setItem was called with the correct data and key
  expect(localStorage.setItem).toHaveBeenCalledWith('reservationData', JSON.stringify(mockFormResData)); 

  // --- Test reading from local storage ---
  const mockLocalStorageData = { 
    date: '2024-12-25', 
    time: '19:00', 
    guests: 4, 
    occasion: 'Christmas' 
  };

  // Mock localStorage again before reading
  Object.defineProperty(window, 'localStorage', {
    value: {
      getItem: jest.fn(() => JSON.stringify(mockLocalStorageData)),
      setItem: jest.fn(),
    },
    writable: true,
  });

  // Re-render the component to simulate reading from localStorage on mount
  render(
    <Reservations
      formResData={mockFormResData} 
      handleChange={mockHandleChange}
      availableTimes={mockAvailableTimes}
      onSubmit={mockOnSubmit} 
    />
  );

  // Assert that the form fields reflect the data from localStorage
  expect(dateInput.value).toBe(mockLocalStorageData.date); 
  // Add similar assertions for time, guests, and occasion
});w