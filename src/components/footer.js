// Footer.js
import React from 'react';
import footerImg from '../images/footerimg.jpg';
import './footer.css';

class Footer extends React.Component {
    render(props) {
        return (
            <footer>
                <img src={footerImg} alt="Jake"/>
                <ul>
                    <h3>Navigation</h3>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/reservations">Reservatons</a></li>
                    <li><a href="/order">Order</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
                <ul>
                    <h3>Contact</h3>
                    <li><a href="/">Address</a></li>
                    <li><a href="/about">Phone number</a></li>
                    <li><a href="/menu">Email</a></li>
                </ul>
                <ul>
                    <h3>Social Media</h3>
                    <li><a href="/">Instagram</a></li>
                    <li><a href="/about">Facebook</a></li>
                </ul>
            </footer>
        );
    }
}

// export Footer
export default Footer;