import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Impact from './components/Impact';
import Projects from './components/Projects';
import Donate from './components/Donate';
import Volunteer from './components/Volunteer';
import Footer from './components/Footer';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Mission />
      <Impact />
      <Projects />
      <Donate />
      <Volunteer />
      <Footer />
    </div>
  );
}

export default App;