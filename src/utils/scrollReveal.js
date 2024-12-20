const sr = ScrollReveal({
  origin: 'bottom',
  distance: '60px',
  duration: 1000,
  delay: 200,
  reset: false
});

export const initScrollReveal = () => {
  sr.reveal('.mission-card', { interval: 200 });
  sr.reveal('.stat', { interval: 200 });
  sr.reveal('.project-card', { interval: 200 });
  sr.reveal('.donate-card', { interval: 200 });
  
  sr.reveal('.hero-content', {
    origin: 'top',
    distance: '80px',
    duration: 2000,
    delay: 200
  });
  
  sr.reveal('h2', {
    origin: 'left',
    distance: '40px',
    duration: 1000
  });
};

export default sr;