!(function () {
    const viewport = document.querySelector('meta[name="viewport"]');
    function switchViewport() {
      const value =
        window.outerWidth > 375
          ? 'width=device-width,initial-scale=1'
          : 'width=360';
      if (viewport.getAttribute('content') !== value) {
        viewport.setAttribute('content', value);
      }
    }
    addEventListener('resize', switchViewport, false);
    switchViewport();
  })();

jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
//よくある質問 / SPコラム詳細 アコーディオン//
$('.accordion__q').on('click', function() {
    $(this).next('.accordion__a').slideToggle();
    $(this).toggleClass('js-open');
    $(this).next('.accordion__a').toggleClass('js-open');
});

});

jQuery(function ($) {
//スマホメニュー
$('.header__navSp').on('click', function() {
  var opened = 'is--opened';
  var active = 'is--active';

  $('.header__navListSp').toggleClass(active);
  $('.header__navSp').toggleClass(opened);
});
});

//swiper
var Swiper1 = new Swiper('.swiper-top', {
  loop: true,
  //loopAdditionalSlides: 2,
  speed: 500,
  grabCursor: true,
  /*autoplay: { 
    delay: 3000, 
    disableOnInteraction: false,
    waitForTransition: false,
  },*/
  pagination: {
    el: '.slide--top .swiper-pagination',
    clickable: true,
    type: 'bullets'
  },
  navigation: {
    nextEl: '.slide--top .swiper-button-next',
    prevEl: '.slide--top .swiper-button-prev',
  },
});

var Swiper2 = new Swiper('.swiper-cars', {
  loop: true,
  //loopAdditionalSlides: 2,
  speed: 500,
  grabCursor: true,
  /*autoplay: { 
    delay: 3000, 
    disableOnInteraction: false,
    waitForTransition: false,
  },*/
  centeredSlides: true, // アクティブなスライドを中央にする
  slidesPerView: "auto",// autoにする
  pagination: {
      el: ".slide--car .swiper-pagination",
      clickable: true,
      type: 'bullets'
  },
  navigation: {
      nextEl: ".slide--car .swiper-button-next",
      prevEl: ".slide--car .swiper-button-prev"
  },
});