import React from 'react';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">DFirm</Link>
                </li>
                <li>
                    <Link to="/about-us">About Us</Link>
                </li>
                <li>
                    <Link to="/services-list">Our Services</Link>
                </li>
                <li>
                    <Link to="/contact-us">Contact Us</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavigationBar;