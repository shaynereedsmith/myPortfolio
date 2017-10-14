'use strict'

$('.pageOneButton').on('click', function(){
  if ($('.blobfhsiContainer').attr('opacity','0')) {
    $('.ghosTownContainer')
    .animate({
      opacity: 0,
      zIndex: 0
    }, 500);
    $('.blobfhsiContainer')
    .animate({
      opacity: 1,
      zIndex: 1
    }, 500);
  }
});

$('.pageTwoButton').on('click', function(){
  if ($('.ghosTownContainer').attr('opacity','0')) {
    $('.blobfhsiContainer')
    .animate({
      opacity: 0,
      zIndex: 0
    }, 500);
    $('.ghosTownContainer')
    .animate({
      opacity: 1,
      zIndex: 1
    }, 500);
  }
})
