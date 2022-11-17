$(document).ready(function(){
  $('.owl-1').owlCarousel({
      items: 1,
      loop:true,
      dots:false,
      autoplay: true,
      autoplayTimeout: 3000,
      mouseDrag:false,
      touchDrag:false,
      stagePadding:20,
      animateIn: 'flipInX'
  });
  $('.owl-2').owlCarousel({
    items: 1,
    loop:true,
    dots:false,
    autoplay: true,
    autoplayTimeout: 3000,
    mouseDrag:false,
    touchDrag:false,
    stagePadding:-10,
    animateIn: 'flipInX'
});
$('.owl-3').owlCarousel({
  items: 1,
  loop:true,
  dots:false,
  autoplay: true,
  autoplayTimeout: 3000,
  mouseDrag:false,
  touchDrag:false,
  stagePadding:-10,
  animateIn: 'flipInX'
});
$('.owl-4').owlCarousel({
  items: 1,
  loop:true,
  dots:false,
  autoplay: true,
  autoplayTimeout: 3000,
  mouseDrag:false,
  touchDrag:false,
  stagePadding:50,
  animateIn: 'flipInX'
});
  AOS.init();
  AOS.init({
  offset: 120, 
  delay: 0, 
  duration: 400, 
  anchorPlacement: 'top-bottom', 
});
});

