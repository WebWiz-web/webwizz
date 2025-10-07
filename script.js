// Smooth scroll
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const section = document.querySelector(this.getAttribute('href'));
    section.scrollIntoView({ behavior: 'smooth' });
    document.querySelector('.nav-links').classList.remove('active');
  });
});

// Fade-in + slide-up effect on scroll
const sections = document.querySelectorAll('section');
function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add('show');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Trigger on load

// Mobile menu toggle
const menu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');
menu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Scroll to Top button
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Contact Form Validation
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill in all fields before sending.');
    e.preventDefault();
  }
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');

// Check saved preference
if (localStorage.getItem('darkMode') === 'enabled') {
  document.body.classList.add('dark-mode');
}

darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');

  // Save preference
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.setItem('darkMode', 'disabled');
  }
});

// Loader fade out
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  loader.classList.add('fade-out');
});
