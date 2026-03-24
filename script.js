// Smooth scroll for nav links
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const target = link.getAttribute("href");
        if (target && document.querySelector(target)) {
            document.querySelector(target).scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Accordion functionality
document.querySelectorAll(".accordion-header").forEach(header => {
    header.addEventListener("click", () => {
        const body = header.nextElementSibling;
        body.style.display = body.style.display === "block" ? "none" : "block";
    });
});