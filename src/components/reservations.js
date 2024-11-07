// reservations.js
import React from 'react';

function Reservations({ formResData, handleChange, availableTimes, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      {/* Form fields */}
      <label>
        Date:
        <input
          type="date"
          name="date"
          value={formResData.date}
          onChange={handleChange}
          required
          //min={new Date().toISOString().split("T")[0]} // block passed dates

        />
      </label>
      <label>
        Time:
        <select
          name="time"
          value={formResData.time}
          onChange={handleChange}
          required
        >
          <option value="">Select time</option>
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </label>
      <label>
        Number of Guests:
        <input
          type="number"
          name="guests"
          value={formResData.guests}
          onChange={handleChange}
          min="1"
          max="10"
          required
        />
      </label>
      <label>
        Occasion:
        <select
          name="occasion"
          value={formResData.occasion}
          onChange={handleChange}
          required
        >
          <option value="">Select an occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Other">Other</option>
        </select>
      </label>
      <button type="submit">Reserve</button>
    </form>
  );
}

export default Reservations;
