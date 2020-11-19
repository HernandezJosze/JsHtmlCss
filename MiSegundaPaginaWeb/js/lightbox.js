const menu1 = document.querySelector(".icon-menu");
const images = document.querySelectorAll(".img-gallery");
const imagesLight = document.querySelector(".add-img");
const containerLight = document.querySelector(".img-light");

images.forEach(image =>{
   image.addEventListener("click", ()=>{
      appearImage(image.getAttribute("src"));
   });
});
containerLight.addEventListener("click", (e)=>{
   if(e.target !== imagesLight){
      containerLight.classList.toggle("show");
      imagesLight.classList.toggle("showImage");
      menu1.style.display = "";
   }
});
const appearImage = (image)=>{
   imagesLight.src = image;
   containerLight.classList.toggle("show");
   imagesLight.classList.toggle("showImage");
   menu1.style.display = "none";
}
