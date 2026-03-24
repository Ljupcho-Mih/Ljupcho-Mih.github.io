/* Smooth scroll */
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile menu after selection
    document.querySelector(".nav-links").classList.remove("open");
  });
});

/* Mobile Menu Toggle */
document.querySelector(".mobile-menu-icon")
  .addEventListener("click", () => {
    document.querySelector(".nav-links").classList.toggle("open");
  });

/* Accordion Logic */
document.querySelectorAll(".accordion-header").forEach(header => {
  header.addEventListener("click", () => {
    const body = header.nextElementSibling;
    const openBody = document.querySelector(".accordion-body.show");

    // Close previously opened item
    if (openBody && openBody !== body) {
      openBody.classList.remove("show");
      openBody.style.display = "none";
    }

    // Toggle current item
    body.classList.toggle("show");
    body.style.display = body.classList.contains("show") ? "block" : "none";
  });
});