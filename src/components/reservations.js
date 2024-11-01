import React from 'react';
import './reservations.css';
import reservationImg from '../images/restauranfood.jpg';

// Static options for occasion
const occasions = [
    { id: 0, title: 'Birthday' },
    { id: 1, title: 'Anniversary' },
];

function Reservations({ formResData = {}, handleChange, availableTimes = [] }) {
    console.log("handleChange in Reservations:", handleChange); // Check if this shows up in console
    return (
        <section className="reservations">
            <img src={reservationImg} alt="restaurant food" />
            <form className="resForm" action="/reservationResult">
                <h3>Table Reservation</h3>

                <label htmlFor="res-date">Date</label>
                <input
    name="date"
    value={formResData.date || ""}
    onChange={(e) => console.log("Date field changed:", e.target.value)} // Inline handler for testing
    type="date"
    id="res-date"
    required
/>


                <label htmlFor="res-time">Time</label>
                <select
                    id="res-time"
                    name="time"
                    value={formResData.time || ""}
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
                    value={formResData.occasion || ""}
                    onChange={handleChange}
                    required
                >
                    {occasions.map(({ id, title }) => (
                        <option key={id} value={title}>
                            {title}
                        </option>
                    ))}
                </select>

                <input
                    className="resFromBtn"
                    type="submit"
                    value="Make Your Reservation"
                    role="submitBtn"
                />
            </form>
        </section>
    );
}


export default Reservations;
