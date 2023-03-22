const hamMenu = document.querySelector(".ham-menu");
const hamMenuIcon = document.querySelector(".ham__menu--icon");
const menu_x = document.querySelector(".menu-x");
const menu_xIcon = document.querySelector(".menu__x--icon");
const hidden =  document.querySelector(".hidden");

hamMenu.addEventListener("click", function(){
    hamMenuIcon.classList.add("hidden");
    menu_x.classList.remove("hidden");
    menu_x.classList.add("menu__x--icon");
    // menu_xIcon.classList.remove("hidden");
});

menu_x.addEventListener("click", function(){
    menu_x.classList.add("hidden");
    menu_xIcon.classList.add("hidden");
    hamMenu.classList.remove("hidden");
    hamMenuIcon.classList.remove("hidden");
});