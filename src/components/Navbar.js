import React from 'react';
import './Navbar.css';
import logo from '../assets/logo.png'; // Replace with your actual logo path
import { FaSearch, FaMapMarkerAlt, FaEnvelope, FaPhone, FaShoppingCart, FaUser } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo-img" />
        </div>
        <div className="search-section">
          <input type="text" placeholder="SEARCH" />
          <button className="search-btn"><FaSearch /></button>
        </div>
        <div className="contact-info">
          <div><FaMapMarkerAlt className="icon" /> <strong>ADDRESS</strong> <span>166 WOODSTREAM BLVD WOODBRIDGE, ON L4L 7Y2</span></div>
          <div><FaEnvelope className="icon" /> <strong>EMAIL</strong> <span>info@tirewholesale.ca</span></div>
          <div><FaPhone className="icon" /> <strong>CALL US</strong> <span>416-741-8555</span></div>
        </div>
      </div>

      <div className="navbar-right">
        <FaShoppingCart className="icon cart-icon" />
        <FaUser className="icon user-icon" />
        <div className="user-info">
          <div><strong>DISCOUNT TYRES (PICKUP OR 20PCS)</strong></div>
          <div>rawal.iftikhar@gmail.com</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
