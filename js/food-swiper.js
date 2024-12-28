const swiper = new Swiper('.swiper', {
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
      prevEl: '.second__btns-first-btn',
      nextEl: '.second__btns-second-btn',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
});
