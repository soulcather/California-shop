const swiper = new Swiper(".swiper", {
  loop: true, // Бесконечная прокрутка
  autoplay: {
    delay: 5000, // Интервал между слайдами (5 секунд)
    disableOnInteraction: false, // Продолжение autoplay после взаимодействия
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true, // Возможность клика по полоскам для переключения
    renderBullet: function (index, className) {
      // Рендеринг кастомной полоски
      return `<span class="${className}"></span>`;
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
