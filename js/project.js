$(function() {

  $(window).on('load', function() {
    //$('#loader').remove();
    setTimeout(function () {
      $('#loader').fadeOut('slow');
      $('body').removeClass('lock-screen');
      animate('#text-intro', 'fadeInUp');
    }, 1000);
  });

  var animate = function(id, triggerProperty) {
    var Controller = new ScrollMagic.Controller();

    var sceneAppearance = new ScrollMagic.Scene({
      triggerElement: id,
      reverse: false,
      triggerHook: 0.9
    })
    .setClassToggle(id, triggerProperty)
    .addTo(Controller);
  };

  // var appearPage = function(id) {
  //   console.log(id)
  //   console.log($(id).css("opacity" ))
  //   $(id).css('opacity', '1')
  // };

  //setTimeout(appearPage, 0, '#neuron_body');
  //animate('#text-intro', 'load');//
  //animate('#neuron-top-image', 'load');//
  //animate('#vault-hero-top-bg', 'load');//
  //animate('#planime-hero-top-bg', 'load');//
  animate('#colors-section', 'fadeInUp');
  animate('.mockups-row1', 'fadeInUp');
  animate('.mockups-row2', 'fadeInUp');
  // animate('.icon-design', 'fadeInUp')

  //Neuron Project Animation

  animate('.persona', 'fadeInUp');
  animate('.com-audit', 'fadeInUp');
  animate('.user-flow', 'fadeInUp');
  animate('.wireframes', 'load');
  animate('.solutions', 'fadeInUp');
  animate('.mockup-1', 'fadeInRight');
  animate('.mockup-2', 'fadeInLeftSlow');

  // Back link animation
  $('.back-link').hover(function(e) {
    $('.icon-back').css('margin-left', '-5px');
  }, function(e) {
    $('.icon-back').css('margin-left', '0');
  });

  var scrollMagicController = new ScrollMagic.Controller();
  var tween = TweenMax.to('.top-des', 0.5, { autoAlpha: 0 });

  var scene = new ScrollMagic.Scene({
    //triggerElement: '.top-des',
    duration: 650,
  }).setTween(tween).addTo(scrollMagicController);



  //var tweenText = TweenMax.to(elementId + ' .first-title', 0.3, {css:{className:"+=fadeInDown"}});
  //setTimeout(blockAppears, 0, '#top-text-element');

}());
