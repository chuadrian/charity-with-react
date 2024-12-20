import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <a href="#" className="logo">
          <span className="logo-text">Hope</span>
          <span className="logo-highlight">Chain</span>
        </a>
        
        <button 
          className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          <a href="#mission" onClick={() => setIsMobileMenuOpen(false)}>Mission</a>
          <a href="#impact" onClick={() => setIsMobileMenuOpen(false)}>Impact</a>
          <a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
          <a href="#volunteer" onClick={() => setIsMobileMenuOpen(false)}>Volunteer</a>
          <a href="#donate" className="donate-btn" onClick={() => setIsMobileMenuOpen(false)}>Donate Now</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;