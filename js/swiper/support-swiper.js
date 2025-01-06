const travelTips = new Swiper(".travel__tips-swiper", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 32,

    navigation: {
        nextEl: '.next__btn',
        prevEl: '.prev__btn',
      },

})