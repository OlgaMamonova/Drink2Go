export const initSlider = () => {
  new Swiper('.promo__slider', {
    navigation: {
      nextEl: '.promo__slider-button--next',
      prevEl: '.promo__slider-button--prev',
    },
    pagination: {
      el: '.promo__slider-pagination',
      clickable: true,
    },
  });
}
