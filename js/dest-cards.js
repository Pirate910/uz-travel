const destSwiper = new Swiper(".d-sw", {

    loop: true,
    slidesPerView: 4,
    spaceBetween: 32,

    // Отключите управление стилями Swiper, если это возможно
    autoHeight: false,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      prevEl: '.destination__btns-first-btn',
      nextEl: '.destination__btns-second-btn',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },

})