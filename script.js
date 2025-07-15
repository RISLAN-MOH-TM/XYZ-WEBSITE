// Toggle mobile nav
const toggleButton = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggleButton.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Modal logic
const loginModal = document.getElementById("loginModal");
const closeButton = document.querySelector(".close-button");

closeButton.addEventListener("click", () => {
  loginModal.classList.add("hidden");
});

window.addEventListener("click", e => {
  if (e.target === loginModal) {
    loginModal.classList.add("hidden");
  }
});

// Smooth scroll for nav links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Form validation
document.querySelectorAll("form").forEach(form => {
  form.addEventListener("submit", e => {
    if (!form.checkValidity()) {
      e.preventDefault();
      alert("Please fill out all required fields.");
    }
  });
});
