document.querySelectorAll('.accordion-header').forEach(h=>{
 h.addEventListener('click',()=>{
  const b=h.nextElementSibling;
  const open=b.style.display==='block';
  document.querySelectorAll('.accordion-body').forEach(x=>x.style.display='none');
  b.style.display=open?'none':'block';
 });
});

document.querySelectorAll('.flag').forEach(flag=>{
 flag.addEventListener('click',()=>{
  const t=flag.getAttribute('data-target');
  document.querySelector('#'+t+' .accordion-header').click();
  document.querySelector('#opportunities').scrollIntoView({behavior:'smooth'});
 });
});
