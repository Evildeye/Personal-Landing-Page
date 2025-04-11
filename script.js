// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Add active class on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar nav ul li a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

// Typing effect
const typedText = document.getElementById("typed-text");
const name = "Husen Fahmi";
let index = 0;

function typeEffect() {
  if (index < name.length) {
    typedText.textContent += name.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}
typedText.textContent = "";
typeEffect();

// Fade-in section
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-section').forEach(section => {
  observer.observe(section);
});
