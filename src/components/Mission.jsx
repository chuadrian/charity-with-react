import React from 'react';
import '../styles/Mission.css';

function Mission() {
  return (
    <section className="mission">
      <h2>Our Mission</h2>
      <div className="mission-content">
        <div className="mission-card">
          <h3>Support</h3>
          <p>Providing essential support to communities in need</p>
        </div>
        <div className="mission-card">
          <h3>Educate</h3>
          <p>Empowering through education and skill development</p>
        </div>
        <div className="mission-card">
          <h3>Sustain</h3>
          <p>Creating lasting positive impact for future generations</p>
        </div>
      </div>
    </section>
  );
}

export default Mission;