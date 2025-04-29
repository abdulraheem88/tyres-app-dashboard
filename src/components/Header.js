import React, { useState } from 'react';
import './Header.css'; // Import CSS file
import Logo from '../assets/logo.png'; // Import the logo image

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(prevState => !prevState);
    };

    return (
        <header>
            <nav className="navbar1">
                <div className="brand-logo">
                    <img src={Logo} alt="TiresBrand" className="logo" />
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    &#9776;
                </div>
                <ul className={`nav-links ${showMenu ? 'show' : ''}`}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Register</a></li>
                    <li><a href="#" className="search-icon">&#128269;</a></li>
                </ul>
            </nav>
        </header>
        
    );
};

export default Header;
