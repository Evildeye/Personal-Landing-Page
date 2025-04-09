document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".service-box, .portfolio-grid img");

  const reveal = () => {
    elements.forEach(el => {
      const top = el.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (top < windowHeight - 100) {
        el.style.opacity = 1;
        el.style.transform = "translateY(0)";
      }
    });
  };

  elements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(20px)";
    el.style.transition = "all 0.6s ease-out";
  });

  window.addEventListener("scroll", reveal);
  reveal();
});
