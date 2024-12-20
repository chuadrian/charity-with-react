import React from 'react';
import '../styles/Impact.css';

function Impact() {
  return (
    <section className="impact">
      <h2>Our Impact</h2>
      <div className="impact-stats">
        <div className="stat">
          <h3>10K+</h3>
          <p>Lives Changed</p>
        </div>
        <div className="stat">
          <h3>50+</h3>
          <p>Communities Served</p>
        </div>
        <div className="stat">
          <h3>100+</h3>
          <p>Active Projects</p>
        </div>
      </div>
    </section>
  );
}

export default Impact;