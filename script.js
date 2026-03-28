const toggle=document.getElementById("menuToggle");
const menu=document.getElementById("mobileMenu");
toggle.addEventListener("click",()=>{
if(menu.style.display==="flex"){menu.style.display="none";}
else{menu.style.display="flex";}
});
const headers=document.querySelectorAll(".accordion-header");
headers.forEach(header=>{
header.addEventListener("click",()=>{
const body=header.nextElementSibling;
if(body.style.display==="block"){body.style.display="none";}
else{body.style.display="block";}
});
});
