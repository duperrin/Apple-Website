export const qs = (container) => {
  return document.querySelector(container)
};

export const qsAll = (container) => {
  return document.querySelectorAll(container)
};

export const setSwiper = (el,loop,view,speed=300) => {
  const swiper = new Swiper(el, {

    loop: loop,
    speed : speed,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    slidesPerView: view,
  })
}//