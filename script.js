
document.getElementById('menuToggle').addEventListener('click', () => {
 document.getElementById('mobileMenu').classList.toggle('show');
});
document.querySelectorAll('.accordion-header').forEach(header => {
 header.addEventListener('click', () => {
 const body = header.nextElementSibling;
 const isOpen = body.style.display === 'block';
 document.querySelectorAll('.accordion-body').forEach(b => b.style.display = 'none');
 body.style.display = isOpen ? 'none' : 'block';
 });
});
