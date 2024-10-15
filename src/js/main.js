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

    autoplay: {
        delay: 4000,
    },

    effect: 'creative',
    creativeEffect: {
        prev: {
            translate: ['100%', 0, -400],
            opacity: 0,
            },
        next: {
            translate: ['100%', 0, 0],
            opacity: 0,
        },
    },

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