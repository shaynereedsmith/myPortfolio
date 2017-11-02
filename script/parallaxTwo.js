'use strict'

$(window).scroll(function() {
  var scrollTop = $(this).scrollTop();

  $('.headImageContainer')
  .css('top', - (scrollTop * -0.8) + 'px');
});
