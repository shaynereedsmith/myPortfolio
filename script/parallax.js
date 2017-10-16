'use strict'

$(window).scroll(function() {
  var scrollTop = $(this).scrollTop();

  $('.aboutMeTitle')
  .css('top', -(scrollTop * 1.5) + 'px');

  $('.projectsTitleContainer')
  .css('top', -(scrollTop * 0.4) + 'px');

  $('.contactTitleContainer')
  .css('top', -(scrollTop * 0.25) + 'px');
});
