// Smooth Scroll
document.querySelectorAll("nav a").forEach(a => {
  a.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Accordion
document.querySelectorAll(".accordion-header").forEach(header => {
  header.addEventListener("click", () => {
    const body = header.nextElementSibling;
    const isOpen = body.style.display === "block";
    document.querySelectorAll(".accordion-body").forEach(b => b.style.display = "none");
    body.style.display = isOpen ? "none" : "block";
  });
});