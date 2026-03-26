
document.querySelector('.mobile-menu-icon').onclick = ()=>{
 const menu = document.querySelector('.nav-menu');
 menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
};

document.querySelectorAll('.accordion-header').forEach(h => {
 h.onclick = () => {
 const b = h.nextElementSibling;
 const open = b.style.display === 'block';
 document.querySelectorAll('.accordion-body').forEach(x => x.style.display='none');
 b.style.display = open ? 'none' : 'block';
 };
});
