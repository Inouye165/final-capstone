// Main.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home.js';
import About from './about.js';
import Menu from './menu.js';
import BookingPage from './BookingPage.js';
import ReservationResult from './reservationResult.js';
import Order from './order.js';
import Login from './login.js';
import ConfirmedBooking from './ConfirmedBooking.js'; // Import the component

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservations" element={<BookingPage />} />
        <Route path="/reservationResult" element={<ReservationResult />} />
        <Route path="/order" element={<Order />} />
        <Route path="/login" element={<Login />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} /> {/* Add this route */}
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
