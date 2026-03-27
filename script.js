document.querySelector('.mobile-menu-icon').onclick = function() {
  const m = document.querySelector('.nav-menu');
  m.style.display = m.style.display === 'flex' ? 'none' : 'flex';
};

document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const body = header.nextElementSibling;
    const isOpen = body.style.display === 'block';
    document.querySelectorAll('.accordion-body').forEach(b => b.style.display = 'none');
    body.style.display = isOpen ? 'none' : 'block';
  });
});