window.addEventListener('DOMContentLoaded', () => {

  const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function(className, settings) {
      const popup = document.querySelectorAll('.card');
      popup[2].style.display = 'block'
      popup[3].style.display = 'block'
      popup[4].style.display = 'block'
      popup[5].style.display = 'block'
      swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper);
      }
    }

    const checker = function() {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener('change', checker);
    checker();
  }

  const someFunc = (instance) => {
    if (instance) {
      instance.on('slideChange', function (e) {
        console.log('*** mySwiper.activeIndex', instance.activeIndex);
      });
    }
  };
  resizableSwiper(
    '(max-width: 648px)',
    '.swiper',
    {
      loop: true,
      spaceBetween: 32,
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    },
    someFunc
  );
  resizableSwiper(
    '(max-width: 1100px)',
    '.main__certificates-swiper',
    {
      loop: true,
      spaceBetween: 32,
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    },
    someFunc
  );
});



