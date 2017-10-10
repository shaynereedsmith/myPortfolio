'use strict'

$('.meLeft')
  .mouseenter( function() {
    $('#l').animate({
      left: '5%',
      opacity: 1
    }, 1000 );
  });
$('.meLeft')
  .mouseleave( function(){
    $('#l').animate({
      left: '-7em',
      opacity: 0
    }, 1000 );
  })
