import React from 'react';
import './reservations.css';
import reservationImg from '../images/restauranfood.jpg';
import { useNavigate } from 'react-router-dom';

const occasions = [
  { id: 0, title: 'Birthday' },
  { id: 1, title: 'Anniversary' },
];

function Reservations({ formResData = {}, handleChange, availableTimes = [] }) {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the form from submitting and reloading the page
    // You can add form validation or submission logic here
    // For example, navigate to a confirmation page:
    navigate('/reservationResult');
  };

  return (
    <section className="reservations">
      <img src={reservationImg} alt="restaurant food" />
      <form className="resForm" onSubmit={handleSubmit}>
        <h3>Table Reservation</h3>

        {/* Date input */}
        <label htmlFor="res-date">Date</label>
        <input
          name="date"
          value={formResData.date || ''}
          onChange={handleChange}
          type="date"
          id="res-date"
          required
        />

        {/* Time select */}
        <label htmlFor="res-time">Time</label>
        <select
          id="res-time"
          name="time"
          value={formResData.time || ''}
          onChange={handleChange}
          required
        >
          {availableTimes.length > 0 ? (
            availableTimes.map((time, index) => (
              <option key={index} value={time}>
                {time}
              </option>
            ))
          ) : (
            <option value="">No times available</option>
          )}
        </select>

        {/* Guests input */}
        <label htmlFor="guests">Number of guests</label>
        <input
          name="guests"
          type="number"
          value={formResData.guests || 1}
          min="1"
          max="10"
          id="guests"
          onChange={handleChange}
          required
        />

        {/* Occasion select */}
        <label htmlFor="occasion">Occasion</label>
        <select
          name="occasion"
          id="occasion"
          value={formResData.occasion || ''}
          onChange={handleChange}
          required
        >
          {occasions.map(({ id, title }) => (
            <option key={id} value={title}>
              {title}
            </option>
          ))}
        </select>

        {/* Submit button */}
        <input
          className="resFormBtn"
          type="submit"
          value="Make Your Reservation"
          role="submitBtn"
        />
      </form>
    </section>
  );
}

export default Reservations;
