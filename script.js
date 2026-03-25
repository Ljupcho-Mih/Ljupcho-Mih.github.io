
document.querySelectorAll('.flag').forEach(flag => {
 flag.addEventListener('click', () => {
 const id = flag.getAttribute('data-target');
 document.querySelector(`#${id} .accordion-body`).style.display = 'block';
 document.querySelector('#opportunities').scrollIntoView({ behavior: 'smooth' });
 });
});

document.querySelectorAll('.accordion-header').forEach(header => {
 header.addEventListener('click', () => {
 const body = header.nextElementSibling;
 const open = body.style.display === 'block';
 document.querySelectorAll('.accordion-body').forEach(b => b.style.display = 'none');
 body.style.display = open ? 'none' : 'block';
 });
});
