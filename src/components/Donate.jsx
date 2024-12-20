import React from 'react';
import '../styles/Donate.css';

function Donate() {
  return (
    <section className="donate">
      <h2>Make a Difference Today</h2>
      <div className="donate-options">
        <div className="donate-card">
          <h3>$25</h3>
          <p>Provides meals for a family</p>
          <button>Donate</button>
        </div>
        <div className="donate-card">
          <h3>$50</h3>
          <p>Supplies educational materials</p>
          <button>Donate</button>
        </div>
        <div className="donate-card">
          <h3>$100</h3>
          <p>Funds medical supplies</p>
          <button>Donate</button>
        </div>
      </div>
    </section>
  );
}

export default Donate;