$(document).ready(function () {
  let $btns = $('.project-area .button-group button');

  $btns.click(function (e) {
    $('.project-area .button-group button').removeClass('active');
    e.target.classList.add('active');

    let selector = $(e.target).attr('data-filter');
    $('.project-area .grid').isotope({
      filter: selector,
    });

    return false;
  });

  $('.project-area .button-group #btn1').trigger('click');

  $('.project-area .grid .test-popup-link').magnificPopup({
    type: 'image',
    gallery: { enabled: true },
  });

  // Owl-carousel

  $('.site-main .about-area .owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      560: {
        items: 2,
      },
    },
  });

  // sticky navigation menu

  let nav_offset_top = $('.header_area').height() + 50;

  function navbarFixed() {
    if ($('.header_area').length) {
      $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        if (scroll >= nav_offset_top) {
          $('.header_area .main-menu').addClass('navbar_fixed');
        } else {
          $('.header_area .main-menu').removeClass('navbar_fixed');
        }
      });
    }
  }

  navbarFixed();

  // side menu toggler
  $('#panel').scotchPanel({
    containerSelector: 'body', // As a jQuery Selector
    direction: 'left', // Make it toggle in from the left
    duration: 400, // Speed in ms how fast you want it to be
    transition: 'ease-in-out', // CSS3 transition type: linear, ease, ease-in, ease-out, ease-in-out, cubic-bezier(P1x,P1y,P2x,P2y)
    clickSelector: '.toggle-panel', // Enables toggling when clicking elements of this class
    distanceX: '30%', // Size fo the toggle
    enableEscapeKey: true, // Clicking Esc will close the panel
  });
});
