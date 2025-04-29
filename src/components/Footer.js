import React from "react";
import "./Footer.css";
import t2 from "../assets/t2.jpeg";

import fbLogo from "../assets/facebook.png";
import instaLogo from "../assets/instagram.png";
import mapLogo from "../assets/maps.png";

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <div className="contact-info">
                    <h1>Contact Us</h1>
                    <h2><span>Location:</span> 123 Tire Street</h2>
                    <h2><span>Email:</span> support@tiresbrand.com</h2>
                    <h2><span>Phone:</span> +123 456 7890</h2>
                </div>

                <div className="subscribe-section">
                    <h2>Subscribe</h2>
                    <p>Stay updated with our inventory</p>
                    <div className="subscribe-input">
                        <input type="email" placeholder="Enter email" />
                        <button>&rarr;</button>
                    </div>
                </div>

                <div className="recent-products">
                    <h2>Recent Products</h2>
                    <div className="product-grid">
                        {Array.from({ length: 8 }).map((_, i) => (
                            <img key={i} src={t2} alt="product" className="product-img" />
                        ))}
                    </div>
                </div>

                <div className="social-media">
                    <h2>Follow Us</h2>
                    <div className="icons">
                        <a href="#" className="logo-link">
                            <img src={fbLogo} alt="Facebook" />
                        </a>
                        <a href="#" className="logo-link">
                            <img src={instaLogo} alt="Instagram" />
                        </a>
                        <a href="#" className="logo-link">
                            <img src={mapLogo} alt="Google Maps" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="copyright-line">
                <span style={{ color: 'gray' }}>
                    Copyright 2025 | All rights reserved | 
                </span>
                <span style={{ color: 'red', marginLeft:'5px' }}>
                     tirewholesale.ca Abdul-Raheem
                </span>
            </div>


        </footer>
    );
};

export default Footer;
