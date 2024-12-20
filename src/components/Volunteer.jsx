import React from 'react';
import '../styles/Volunteer.css';

function Volunteer() {
  return (
    <section className="volunteer">
      <h2>Join Our Cause</h2>
      <div className="volunteer-content">
        <div className="volunteer-info">
          <h3>Become a Volunteer</h3>
          <p>Make a difference in your community by joining our volunteer program</p>
          <button>Sign Up Now</button>
        </div>
        <form className="volunteer-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="How would you like to help?"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default Volunteer;