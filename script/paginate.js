'use strict'


$('.pageOneButton').on('click', function(){
  if ($('.blobfhsiContainer').attr('opacity','0')) {
    $('.ghosTownContainer')
    .animate({
      opacity: 0,
      zIndex: 0
    }, 500);
    $('.pongMeContainer')
    .animate({
      opacity: 0,
      zIndex: 0
    }, 500);
    $('.blobfhsiContainer')
    .animate({
      opacity: 1,
      zIndex: 1
    }, 500);

    $('.pageOneButton')
    .css('background-color', 'white')
    .animate({
      height: '1.1em',
      width: '1.1em'
    }, 100);
    $('.pageTwoButton')
    .css('background-color', '#84ffff')
    .animate({
      height: '1em',
      width: '1em'
    }, 100);
    $('.pageThreeButton')
    .css('background-color', '#84ffff')
    .animate({
      height: '1em',
      width: '1em'
    }, 100);

  }
});


$('.pageTwoButton').on('click', function(){
  if ($('.ghosTownContainer').attr('opacity','0')) {
    $('.blobfhsiContainer')
    .animate({
      opacity: 0,
      zIndex: 0
    }, 500);
    $('.pongMeContainer')
    .animate({
      opacity: 0,
      zIndex: 0
    }, 500);
    $('.ghosTownContainer')
    .animate({
      opacity: 1,
      zIndex: 1
    }, 500);

    $('.pageTwoButton')
    .css('background-color', 'white')
    .animate({
      height: '1.1em',
      width: '1.1em'
    }, 100);
    $('.pageOneButton')
    .css('background-color', '#84ffff')
    .animate({
      height: '1em',
      width: '1em'
    }, 100);
    $('.pageThreeButton')
    .css('backgroundColor', '#84ffff')
    .animate({
      height: '1em',
      width: '1em'
    }, 100);
  }
})


$('.pageThreeButton').on('click', function(){
  if ($('.pongMeContainer').attr('opacity','0')) {
    $('.blobfhsiContainer')
    .animate({
      opacity: 0,
      zIndex: 0
    }, 500);
    $('.ghosTownContainer')
    .animate({
      opacity: 0,
      zIndex: 0
    }, 500);
    $('.pongMeContainer')
    .animate({
      opacity: 1,
      zIndex: 1
    }, 500);

    $('.pageThreeButton')
    .css('background-color', 'white')
    .animate({
      height: '1.1em',
      width: '1.1em'
    }, 100);
    $('.pageOneButton')
    .css('background-color', '#84ffff')
    .animate({
      height: '1em',
      width: '1em'
    }, 100);
    $('.pageTwoButton')
    .css('backgroundColor', '#84ffff')
    .animate({
      height: '1em',
      width: '1em'
    }, 100);
  }
})
