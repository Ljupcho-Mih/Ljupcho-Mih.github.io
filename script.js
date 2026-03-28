

const toggle = document.getElementById("menuToggle");
const menu = document.getElementById("mobileMenu");

toggle.addEventListener("click",()=>{

if(menu.style.display==="flex"){
menu.style.display="none";
}else{
menu.style.display="flex";
}

});

