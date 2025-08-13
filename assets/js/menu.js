document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links-mobile');
  
    if (toggleBtn && navLinks) {
      // Toggle menu when clicking the button
      toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        navLinks.classList.toggle('show');
      });
  
      // Close menu when clicking a link inside
      navLinks.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
          navLinks.classList.remove('show');
        }
      });
  
      // Close menu when clicking outside
      document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !toggleBtn.contains(e.target)) {
          navLinks.classList.remove('show');
        }
      });
    }
  });
  