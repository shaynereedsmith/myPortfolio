'use strict'

$('#skills').on('click', function() {
  $('html, body').animate({
    scrollTop: $('.toSkills').offset().top
  }, 1500, 'easeOutQuint');
});

$('#about').on('click', function() {
  $('html, body').animate({
    scrollTop: $('.toAbout').offset().top
  }, 1500, 'easeOutQuint');
})

$('#projects').on('click', function() {
  $('html, body').animate({
    scrollTop: $('.toProjects').offset().top
  }, 1500, 'easeOutQuint');
})

$('#contact').on('click', function() {
  $('html, body').animate({
    scrollTop: $('.toContact').offset().top
  }, 1500, 'easeOutQuint');
})
