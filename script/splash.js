'use strict'

$('.meLeft')
  .mouseenter( function() {
    $('#l').animate({
      left: '5%',
      opacity: 1
    }, 1000, 'easeInOutBack' );
    $('.easeDown')
    .stop(true, true)
    .delay(700)
    .animate({
      lineHeight: '100%',
      opacity: 1
    }, 700, 'easeInOutBack');
  });



$('.meLeft')
  .mouseleave( function(){
    $('#l')
    .stop(true, true)
    .delay(500)
    .animate({
      left: '-7em',
      opacity: 0
    }, 1000, 'easeInOutBack' );
    $('.easeDown')
    .animate({
      lineHeight: '0%',
      opacity: 0
    }, 700, 'easeInOutBack');
  })
