'use strict'

$(window).scroll(function() {
  var scrollTop = $(this).scrollTop();
  $('.aboutMeTitle')
  .css('top', -(scrollTop * 0.5) + 'px')
});
