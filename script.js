
document.querySelector('.mobile-menu-icon').onclick = ()=>{
 document.querySelector('.nav-links').style.display =
  document.querySelector('.nav-links').style.display === 'flex' ? 'none' : 'flex';
};

document.querySelectorAll('.flag').forEach(flag=>{
 flag.addEventListener('click',()=>{
 const id = flag.getAttribute('data-target');
 document.querySelector(`#${id} .accordion-body`).style.display='block';
 document.querySelector('#opportunities').scrollIntoView({behavior:'smooth'});
 });
});

document.querySelectorAll('.accordion-header').forEach(h=>{
 h.onclick = ()=>{
 const b = h.nextElementSibling;
 const open = b.style.display==='block';
 document.querySelectorAll('.accordion-body').forEach(x=>x.style.display='none');
 b.style.display = open?'none':'block';
 };
});
