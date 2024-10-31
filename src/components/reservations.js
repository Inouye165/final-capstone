// Reservations.js
import React, { useState } from 'react';
import './reservations.css';
import reservationImg from '../images/restauranfood.jpg';

function Reservations() {
    const [ formResData, setFormResData ] = useState({
        date: "2024-05-01",
        times: [
            {id: 0, time:'15:00'},
            {id: 1, time:'16:00'}
        ],
        guests: 1,
        occasion: [
            {id: 0, title: "Birthday"},
            {id: 1, title: "Anniversary"}
        ]
    });

    // process form available time
    var availabilities = formResData.times.map((data) => {
        return (
            <option key={data.id}>{data.time}</option>
        );
    });

    // process form occasions
    var occasions = formResData.occasion.map((data) => {
        return (
            <option key={data.id}>{data.title}</option>
        );
    });

    function updateGuest(event, type) {
        var formDataUpdate = {...formResData};

        if(type == 'date') {
            formDataUpdate.date = event.target.value;
        } else if(type == 'guests') {
            formDataUpdate.guests = event.target.value;
        } else {
            console.log("Unknown type");
            return;
        }
        setFormResData(formDataUpdate);
    }

    return (
        <section className="reservations">
            <img src={reservationImg} alt="restaurant food"/>
            <form className="resForm" action="/reservationResult">
                <h3>Table Reservation</h3>
                <label htmlFor="res-date">Date</label>
                <input name="date" value={formResData.date} onChange={event => updateGuest(event, 'date') } type="date" id="res-date" placeholder='date' required/>
                <label htmlFor="res-time">Time</label>
                <select id="res-time" name="availabilities" >
                    {availabilities}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input name="guest" type="number" value={formResData.guests} min="1" max="10" id="guests" onChange={event => updateGuest(event, 'guests') } required/>
                <label htmlFor="occasion">Occasion</label>
                <select name="occasion" id="occasion">
                    {occasions}
                </select>
                <input className="resFromBtn" type="submit" value="Make Your reservation" role="submitBtn"/>
            </form>
        </section>
    );
}

export default Reservations;