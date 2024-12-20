import React from 'react';
import '../styles/Projects.css';

function Projects() {
  return (
    <section className="projects">
      <h2>Current Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>Clean Water Initiative</h3>
          <p>Providing clean water access to rural communities</p>
        </div>
        <div className="project-card">
          <h3>Education For All</h3>
          <p>Building schools and supporting education</p>
        </div>
        <div className="project-card">
          <h3>Healthcare Access</h3>
          <p>Mobile clinics for remote areas</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;