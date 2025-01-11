const accomodationSwiper = new Swiper(".accomodation__cards-swiper", {

    loop: true,
    slidesPerView: 3,
    spaceBetween: 32,

    freeMode: true,  

    breakpoints: {
        300: {
            slidesPerView: 1,
        },
    }

    // Отключите управление стилями Swiper, если это возможно
    // If we need pagination
})