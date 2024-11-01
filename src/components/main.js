// Main.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './home.js';
import About from './about.js';
import Menu from './menu.js';
import BookingPage from './BookingPage.js'; // Import BookingPage instead of Reservations
import ReservationResult from './reservationResult.js';
import Order from './order.js';
import Login from './login.js';

class Main extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/reservations" element={<BookingPage />} /> {/* Update this line */}
          <Route path="/reservationResult" element={<ReservationResult />} />
          <Route path="/order" element={<Order />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default Main;
