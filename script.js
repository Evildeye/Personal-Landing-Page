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

// Highlight nav link saat scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar nav ul li a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (pageYOffset >= section.offsetTop - 60) {
      current = section.id;
    }
  });

  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
});

// Typing effect
const typedText = document.querySelector(".hero-content h1 span");
const text = "Husen Fahmi";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    typedText.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 100);
  }
}
typedText.textContent = "";
typeEffect();

// Fade-in on scroll
const fadeElements = document.querySelectorAll(".fade-in, .fade-section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible', 'appear');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
});

fadeElements.forEach(el => observer.observe(el));
