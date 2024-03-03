document.addEventListener('DOMContentLoaded', function() {
  // Initialize Swiper for gallery cards
  let swiperCards = new Swiper(".gallery-cards", {
    loop: true,
    loopedSlides: 5,
    cssMode: true,
    effect: 'fade',
  });
    
  // Initialize Swiper for gallery thumbs
  let swiperThumbs = new Swiper(".gallery-thumbs", {
    loop: true,
    loopedSlides: 5,
    slidesPerView: 3,
    centeredSlides: true,
    slideToClickedSlide: true,
  
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
  swiperThumbs.controller.control = swiperCards;
});
document.addEventListener('DOMContentLoaded', function () {
  let swiper = new Swiper(".gallery", {
      loop: true,
      loopedSlides: 5,
      cssMode: true,
      effect: 'fade',
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
      on: {
          slideChangeTransitionEnd: function () {
              let activeIndex = this.activeIndex;
              let words = document.querySelectorAll('.word');
              words.forEach(function (word, index) {
                  if (index === activeIndex) {
                      word.classList.add('active');
                  } else {
                      word.classList.remove('active');
                  }
              });
          }
      }
  });
});
