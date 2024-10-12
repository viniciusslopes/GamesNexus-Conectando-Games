const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");

function menuShow() {
    if (navMenu.classList.contains("show-menu")){
        navMenu.classList.remove("show-menu");
    }else {
        navMenu.classList.add("show-menu");
    }
};

navToggle.onclick = () => menuShow();
navClose.onclick = () => menuShow();