'use strict'

$(window).scroll(function() {
  var scrollTop = $(this).scrollTop();
  $('.aboutMeTitle')
  .css('top', -(scrollTop * 1.5) + 'px')
});
