// Smooth scroll
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }

    // close mobile menu after click
    document.querySelector(".nav-links").classList.remove("open");
  });
});

// Mobile menu toggle
document.querySelector(".mobile-menu-icon").addEventListener("click", () => {
  document.querySelector(".nav-links").classList.toggle("open");
});

// Accordion animation
document.querySelectorAll(".accordion-header").forEach(header => {
  header.addEventListener("click", () => {
    const body = header.nextElementSibling;
    const openBody = document.querySelector(".accordion-body.show");

    if (openBody && openBody !== body) {
      openBody.classList.remove("show");
      openBody.style.display = "none";
    }

    body.classList.toggle("show");
    body.style.display = body.classList.contains("show") ? "block" : "none";
  });
});