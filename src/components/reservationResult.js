// reservationsResult.js
import React, { useState } from 'react';
import './reservationResults.css';
import reservationImg from '../images/restauranfood.jpg';

function ReservationResult() {
    return (
        <section className="reservationResult">
            <h3>Thank you for your reservation.</h3>
            <a class="homeBtn" href="/">Home</a>
        </section>
    );
}

export default ReservationResult;