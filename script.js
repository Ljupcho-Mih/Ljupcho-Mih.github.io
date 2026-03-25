// Flag click → open correct accordion item
document.querySelectorAll(".flag").forEach(flag => {
    flag.addEventListener("click", () => {
        const target = flag.getAttribute("data-target");

        // Close all accordion bodies
        document.querySelectorAll(".accordion-body")
            .forEach(b => b.style.display = "none");

        // Open the selected one
        const body = document.querySelector(`#${target} .accordion-body`);
        body.style.display = "block";

        // Scroll to Opportunities
        document.querySelector("#opportunities").scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Manual accordion toggle
document.querySelectorAll(".accordion-header").forEach(header => {
    header.addEventListener("click", () => {
        const body = header.nextElementSibling;

        const isOpen = body.style.display === "block";

        // Close all
        document.querySelectorAll(".accordion-body")
            .forEach(b => b.style.display = "none");

        // Toggle selected
        body.style.display = isOpen ? "none" : "block";
    });
});
