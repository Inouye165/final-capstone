import React, { useState } from 'react';
import './reservations.css';
import reservationImg from '../images/restauranfood.jpg';

// Static options for time and occasion
const availableTimes = [
    { id: 0, time: '17:00' },
    { id: 1, time: '18:00' },
    { id: 2, time: '19:00' },
    { id: 3, time: '20:00' },
    { id: 4, time: '21:00' },
    { id: 5, time: '22:00' },
];

const occasions = [
    { id: 0, title: 'Birthday' },
    { id: 1, title: 'Anniversary' },
];

function Reservations() {
    const [formResData, setFormResData] = useState({
        date: "",
        time: "",
        guests: 1,
        occasion: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormResData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <section className="reservations">
            <img src={reservationImg} alt="restaurant food" />
            <form className="resForm" action="/reservationResult">
                <h3>Table Reservation</h3>
                
                {/* Date input */}
                <label htmlFor="res-date">Date</label>
                <input
                    name="date"
                    value={formResData.date}
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
                    value={formResData.time}
                    onChange={handleChange}
                    required
                >
                    {availableTimes.map(({ id, time }) => (
                        <option key={id} value={time}>
                            {time}
                        </option>
                    ))}
                </select>
                
                {/* Guests input */}
                <label htmlFor="guests">Number of guests</label>
                <input
                    name="guests"
                    type="number"
                    value={formResData.guests}
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
                    value={formResData.occasion}
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
