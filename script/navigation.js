'use strict'

$('#skills').on('click', function() {
  $('html, body').animate({
    scrollTop: $('.toSkills').offset().top
  }, 1000, 'easeInOutBack');
});

$('#about').on('click', function() {
  $('html, body').animate({
    scrollTop: $('.toAbout').offset().top
  }, 1000, 'easeInOutBack');
})

$('#projects').on('click', function() {
  $('html, body').animate({
    scrollTop: $('.toProjects').offset().top
  }, 1000, 'easeInOutBack');
})

$('#contact').on('click', function() {
  $('html, body').animate({
    scrollTop: $('.toContact').offset().top
  }, 1000, 'easeInOutBack');
})
