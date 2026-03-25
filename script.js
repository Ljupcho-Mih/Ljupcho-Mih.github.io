// FLAG CLICK → OPEN SPECIFIC ACCORDION ENTRY
document.querySelectorAll('.flag').forEach(flag => {
  flag.addEventListener('click', () => {
    const id = flag.getAttribute('data-target');
    document.querySelector('#' + id + ' .accordion-header').click();
    document.querySelector('#opportunities').scrollIntoView({ behavior: 'smooth' });
  });
});

// SMOOTH SCROLL FOR NAV LINKS
document.querySelectorAll("nav a").forEach(a => {
  a.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(a.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ACCORDION FUNCTIONALITY
document.querySelectorAll(".accordion-header").forEach(header => {
  header.addEventListener("click", () => {
    const body = header.nextElementSibling;
    const isOpen = body.style.display === "block";
    document
      .querySelectorAll(".accordion-body")
      .forEach(b => (b.style.display = "none"));
    body.style.display = isOpen ? "none" : "block";
  });
});
