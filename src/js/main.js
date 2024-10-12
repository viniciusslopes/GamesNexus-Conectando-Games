const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");

function menuShow() {
    if (navMenu.classList.contains("show-menu")) {
        navMenu.classList.remove("show-menu");
    } else {
        navMenu.classList.add("show-menu");
    }
};

navToggle.onclick = () => menuShow();
navClose.onclick = () => menuShow();


const swiperHome = new Swiper('.home__swiper', {
    loop: true,
    grabCursor: true,
    slidesPerView: 'auto',

    // navigation:{
    //     nextEl:true,
    //     prevEl:true,
    // },

    breakpoints: {
        768: {
            sliderPerview: 3,
            centeredSlides: 'auto,'
        },
        1150: {
            centeredSlides: 'auto',
            spaceBetween: -64,
        }
    }
})