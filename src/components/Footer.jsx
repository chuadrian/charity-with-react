import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: Chuadrian243@gmail.com</p>
          <p>Phone: (+234) 9035952141</p>
          <p>Address: 123 Hope Street, Adrian City</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#donate">Donate</a></li>
            <li><a href="#volunteer">Volunteer</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Newsletter</h3>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 AdrianCharity Organization. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;