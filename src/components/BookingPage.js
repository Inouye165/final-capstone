// BookingPage.js
import React, { useState } from 'react';
import Reservations from './reservations';

function BookingPage() {
    const [formResData, setFormResData] = useState({
        date: "",
        time: "",
        guests: 1,
        occasion: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormResData({
            ...formResData,
            [name]: value,
        });
    };

    return (
        <div>
            <h2>Make a Reservation</h2>
            <Reservations formResData={formResData} handleChange={handleChange} />
        </div>
    );
}

export default BookingPage;
