
document.querySelectorAll('.flag').forEach(flag => {
 flag.addEventListener('click', () => {
 const id = flag.getAttribute('data-target');
 document.querySelector('#' + id + ' .accordion-header').click();
 document.querySelector('#opportunities').scrollIntoView({ behavior: 'smooth' });
 });
});
