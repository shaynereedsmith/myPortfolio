'use strict'

// L E F T  S I D E  M O U S E O V E R
// MOUSE ENTER
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
// MOUSE EXIT
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

// R I G H T  S I D E  M O U S E O V E R

// MOUSE ENTER
$('.meRight')
  .mouseenter( function(){
    $('.cSkills')
    .animate({
      right: '5%',
      top: '17%',
      opacity: 1,
      fontSize: '5vw'
    }, 1000, 'easeOutElastic');
    $('.gameDev')
    .stop(true, true)
    .delay(500)
    .animate({
      opacity: 1,
      letterSpacing: '1px'
    }, 300);
    $('.illustration')
    .stop(true, true)
    .delay(700)
    .animate({
      opacity: 1,
      fontSize: '2.5vw',
      right : '18%'
    }, 300);
    $('.animation')
    .stop(true, true)
    .delay(1000)
    .animate({
      right: '5%'
    }, 1000, 'easeOutElastic');
    $('.webDev')
    .stop(true, true)
    .delay(1300)
    .animate({
      letterSpacing: '0px',
      opacity: 1
    }, 1000, 'easeOutElastic');
    $('.music')
    .stop(true, true)
    .delay(1000)
    .animate({
      top: '65%',
      opacity: 1
    }, 1000, 'easeOutBack');
  })
// MOUSE EXIT
$('.meRight')
  .mouseleave( function(){
    $('.cSkills')
    .animate({
      right: '-10%',
      top: '0%',
      opacity: 0,
      fontSize: '2vw'
    }, 700, 'easeInOutBack');
    $('.gameDev')
    .stop(true, true)
    .delay(300)
    .animate({
      opacity: 0,
      letterSpacing: '-20px'
    }, 500, 'easeInOutBack');
    $('.illustration')
    .stop(true, true)
    .delay(500)
    .animate({
      opacity: 0,
      right: '10%',
      fontSize: '5.5vw'
    })
    $('.animation')
    .animate({
      right: '-20%'
    }, 1000, 'easeInOutBack');
    $('.webDev')
    .stop(true, true)
    .delay(300)
    .animate({
      letterSpacing: '30px',
      opacity: 0
    }, 500, 'easeInBack');
    $('.music')
    .stop(true, true)
    .delay(500)
    .animate({
      top: '-65%',
      opacity: 0,
    }, 1000);
  })
