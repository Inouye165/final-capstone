// reservations.js
import React from 'react';
import './reservations.css';

function Reservations({ formResData, handleChange, availableTimes, onSubmit }) {
  return (
    <section className="reservations">
      <form className="resForm" onSubmit={onSubmit}>
        <h3>Table Reservation</h3>
        <label htmlFor="res-date">Date</label>
        <input
          name="date"
          value={formResData.date || ''}
          onChange={handleChange}
          type="date"
          id="res-date"
          required
        />
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
        <label htmlFor="occasion">Occasion</label>
        <select
          name="occasion"
          id="occasion"
          value={formResData.occasion || ''}
          onChange={handleChange}
          required
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        <button type="submit">Make Your Reservation</button>
      </form>
    </section>
  );
}

export default Reservations;
