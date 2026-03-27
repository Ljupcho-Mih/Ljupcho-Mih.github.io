document.querySelector('.mobile-menu-icon').onclick = function () {
  const menu = document.querySelector('.nav-menu');
  menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
};

document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const body = header.nextElementSibling;
    const isOpen = body.style.display === 'block';
    document.querySelectorAll('.accordion-body').forEach(section => { section.style.display = 'none'; });
    body.style.display = isOpen ? 'none' : 'block';
  });
});