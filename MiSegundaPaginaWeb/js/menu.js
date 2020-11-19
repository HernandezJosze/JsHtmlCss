const menu = document.querySelector(".icon-menu");
const menuNav = document.querySelector(".menu-navigation");

menu.addEventListener('click', ()=>{
   menuNav.classList.toggle("spread");
});

window.addEventListener('click', e=>{
   if(menuNav.classList.contains("spread") && e.target !== menuNav && e.target !== menu){
      menuNav.classList.toggle("spread");
   }
})