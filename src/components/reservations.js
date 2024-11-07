import React from 'react';

function Reservations({ formResData, handleChange, availableTimes, onSubmit }) {
  return (
    <form onSubmit={onSubmit} aria-labelledby="reservationFormTitle">
      <h2 id="reservationFormTitle">Make a Reservation</h2>

      <div>
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formResData.date}
          onChange={handleChange}
          aria-required="true"
        />
      </div>

      <div>
        <label htmlFor="time">Time</label>
        <select
          id="time"
          name="time"
          value={formResData.time}
          onChange={handleChange}
          aria-required="true"
        >
          {availableTimes.map((time) => (
            <option key={time} value={time}>{time}</option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="guests">Number of Guests</label>
        <input
          type="number"
          id="guests"
          name="guests"
          min="1"
          value={formResData.guests}
          onChange={handleChange}
          aria-required="true"
        />
      </div>

      <button type="submit">Submit Reservation</button>
    </form>
  );
}

export default Reservations;
