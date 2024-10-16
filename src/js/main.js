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

    // effect: 'creative',
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
});

const tittleDynamic = document.getElementById("tittle-dynamic");
const text = "TOP LIST GAMES!";
const interval = 170;

function showTittleDynamic(tittleDynamic, text, interval) {
    const charText = text.split("").reverse();
    const typeText = setInterval(() => {
        if (!charText.length) {
            return clearInterval(typeText);
        };

        const next = charText.pop();
        tittleDynamic.innerHTML += next;
    }, interval);
};

showTittleDynamic(tittleDynamic, text, interval);


const backGroundHeader = () => {
    const header = document.getElementById("header");
    this.scrollY >= 50 ? header.classList.add("bg-header") : header.classList.remove("bg-header");
};

window.addEventListener("scroll", backGroundHeader);


const sr = ScrollReveal({
    origin: 'top',
    distance: '40px',
    duration: 2500,
    reset: true,
});



sr.reveal(`.home__swiper`,{delay:200});
sr.reveal(`.recommendation__list`,{delay:100});