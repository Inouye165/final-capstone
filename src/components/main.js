// Main.js
import React from 'react';
import Highlight from './highlight.js';
import Testimonial from './Testimonial.js';
import { Routes, Route } from 'react-router-dom';
import Home from './home.js';
import About from './about.js';
import Menu from './menu.js';
import Reservations from './reservations.js';
import ReservationResult from './reservationResult.js';
import Order from './order.js';
import Login from './login.js';

import { BrowserRouter } from 'react-router-dom';

class Main extends React.Component {
    render(props) {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/reservations" element={<Reservations />} />
                    <Route path="/reservationResult" element={<ReservationResult />} />
                    <Route path="/order" element={<Order />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </BrowserRouter>
        );
    }
}

// export main
export default Main;