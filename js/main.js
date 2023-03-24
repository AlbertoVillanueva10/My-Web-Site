/**Getting the ids and classes to manipulate in the css and HMTL */
const navLogo = document.querySelector("#navLogo");
const hamMenuClass = document.querySelector(".ham-menu");
const menu_x = document.querySelector(".menu-x");
const linksMenuOpen =  document.querySelector("#linksMenuOpen");

const hidden =  document.querySelector(".hidden");

hamMenuClass.addEventListener("click", function(){
    hamMenuClass.classList.toggle("hidden");
    hamMenuClass.classList.toggle("menu-x");
    // linksMenuOpen.classList.toggle("hidden");
    linksMenuOpen.classList.toggle("links-menu-open");
    navLogo.classList.toggle("nav__logo");
    navLogo.classList.toggle("nav__logo--black");
});