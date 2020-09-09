var link = document.querySelector(".menu-link"),
navbar = document.querySelector(".navbar"),
link_active = document.querySelector(".menu-link_active"),
menu = document.querySelector(".menu"),
wrap = document.querySelector(".menu__links"),
nav_link = document.querySelectorAll(".menu-a");

link.addEventListener("click", function() {
link.classList.toggle("menu-link_active"), menu.classList.toggle("menu_active")
});



nav_link.forEach(a => a.addEventListener('click', ()=> menu.classList.toggle("menu_active")));

