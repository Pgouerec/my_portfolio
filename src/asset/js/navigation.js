$(document).ready(function() {
  // $('#nav-download').hide();
});

$(window).on("scroll", function() {
  if (window.pageYOffset > $('#header-download').position().top) {
    $('.logo').addClass('minus');
    setTimeout(function(){
      $('#nav-download').addClass('button--nav-view');
    }, 500);
  } else {
    $('#nav-download').removeClass('button--nav-view');
    setTimeout(function(){
      $('.logo').removeClass('minus');
    }, 500);
  }
});

$('.toggler').click(function() {
  if ($('.navigation__collapse').hasClass('collapsed')) {
    $('.toggler').removeClass('active');
    $('.navigation').removeClass('collapsed')
    $('.navigation__collapse').removeClass('collapsed')
    $('body').css('overflow-y', 'auto');
    $('.mobile-wrapper').css('overflow-y', 'auto');
  } else {
    $('.toggler').addClass('active');
    $('.navigation__collapse').addClass('collapsed')
    $('.navigation').addClass('collapsed')
    $('body').css('overflow-y', 'hidden');
    $('.mobile-wrapper').css('overflow-y', 'hidden');
  }
});

$('.menu-item').each(function() {
  $(this).click(function() {
    $('.toggler').removeClass('active');
    $('.navigation').removeClass('collapsed')
    $('.navigation__collapse').removeClass('collapsed')
    $('body').css('overflow-y', 'auto');
    $('.mobile-wrapper').css('overflow-y', 'auto');
  })
})