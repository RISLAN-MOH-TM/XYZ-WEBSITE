// Mobile nav toggle
const toggleMenu = document.querySelector('.mobile-menu-toggle');
toggleMenu.addEventListener('click', () => {
  document.querySelector('nav ul').classList.toggle('show');
});

// Smooth scroll
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Scroll animation
const sections = document.querySelectorAll('.content-section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  section.classList.add('invisible');
  observer.observe(section);
});

// Form validation
document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', e => {
    if (!form.checkValidity()) {
      e.preventDefault();
      alert("Please fill all required fields.");
    }
  });
});
