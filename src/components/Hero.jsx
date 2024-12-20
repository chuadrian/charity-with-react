import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Making the World Better Together</h1>
        <p>Join us in creating positive change and bringing hope to those in need</p>
        <button className="cta-button">Donate Now</button>
      </div>
    </section>
  );
}

export default Hero;