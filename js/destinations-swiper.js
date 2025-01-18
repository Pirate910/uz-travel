const destSwiper = new Swiper(".adventures__cards", {

    loop: true,
    slidesPerView: 4,
    spaceBetween: 32,
    freeMode: true,  

    // Отключите управление стилями Swiper, если это возможно
    autoHeight: false,

    breakpoints: {
      300: {
          slidesPerView: 1,
      },

      1200: {
        slidesPerView: 4,
      },

    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      prevEl: '.second__btns-first-btn',
      nextEl: '.second__btns-second-btn',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

})