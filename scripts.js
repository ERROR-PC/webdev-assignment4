// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
  // Header scroll effect
  window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Generate floating particles
  createParticles();
});

/**
 * Creates random floating particles in the background
 */
function createParticles() {
  const particles = document.querySelector('.particles');
  const particleCount = 25; // Number of particles to create
  
  for (let i = 0; i < particleCount; i++) {
    // Create particle element
    const particle = document.createElement('div');
    particle.classList.add('particle');
    
    // Generate random properties
    const posX = Math.random() * 100; // Random X position (%)
    const posY = Math.random() * 100; // Random Y position (%)
    const size = Math.random() * 6 + 4; // Random size between 4-10px
    const opacity = Math.random() * 0.3 + 0.1; // Random opacity between 0.1-0.4
    const duration = Math.random() * 20 + 10; // Random animation duration 10-30s
    const delay = Math.random() * 10; // Random animation delay 0-10s
    const direction = Math.random() > 0.5 ? 'normal' : 'reverse'; // Random direction
    
    // Apply styles
    particle.style.cssText = `
      top: ${posY}%;
      left: ${posX}%;
      width: ${size}px;
      height: ${size}px;
      opacity: ${opacity};
      animation: float ${duration}s infinite linear ${delay}s ${direction};
    `;
    
    // Add to DOM
    particles.appendChild(particle);
  }
}
