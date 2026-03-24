// Smooth scroll for nav links
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        document.querySelector(link.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Accordion functionality
const headers = document.querySelectorAll(".accordion-header");
headers.forEach(header => {
    header.addEventListener("click", () => {
        const body = header.nextElementSibling;
        body.style.display = body.style.display === "block" ? "none" : "block";
    });
