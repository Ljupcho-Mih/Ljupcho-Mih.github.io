// MOBILE MENU
document.getElementById('menuToggle').addEventListener('click', () => {
    document.getElementById('mobileMenu').classList.toggle('show');
});

// SMOOTH SCROLL WITHOUT # IN URL
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {

        const href = this.getAttribute('href');

        if (href.startsWith("#")) {
            e.preventDefault();

            const target = document.querySelector(href);

            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: "smooth"
            });

            // REMOVE HASH FROM URL
            history.replaceState(null, null, ' ');
        }
    });
});

// ACCORDION
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const body = header.nextElementSibling;
        const isOpen = body.style.display === 'block';

        document.querySelectorAll('.accordion-body')
            .forEach(b => b.style.display = 'none');

        body.style.display = isOpen ? 'none' : 'block';
    });
});
