// Canvas Animation
particlesJS("particles-js", {"particles":{"number":{"value":150,"density":{"enable":true,"value_area":1500.00}},"color":{"value":"#E6EBE0"},"shape":{"type":"star","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":8},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.38481889460772545,"random":false,"anim":{"enable":true,"speed":3.329516570435515,"opacity_min":0.17865698670629593,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":8.932849335314796,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#E6EBE0","opacity":0.7839692548078818,"width":2.367442924896818},"move":{"enable":true,"speed":3.810236182596568,"direction":"none","random":true,"straight":false,"out_mode":"bounce","bounce":false,"attract":{"enable":true,"rotateX":1443.0708547789707,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"grab"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":170.53621458328246,"line_linked":{"opacity":0.5264803145719884}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":119.88011988011989,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});


	


//ScrollMagic

$(document).ready(function() {


// Hamburger Menu
$('#toggle').click(function() {
	$(this).toggleClass('active');
   	$('#overlay').toggleClass('open');
});


// Project Info Button
$('.more-info-btn').on('click', function() {
	$(this).siblings('.info-overlay').toggleClass('hidden');
});


// Contact form

$(function() {
    $('.infield-label').infieldLabel();
  });


// Init ScrollMagic
var controller = new ScrollMagic.Controller();

// 'About' scene - Pin the About Section
var aboutScene = new ScrollMagic.Scene({
	triggerElement: '#about',
	triggerHook: 0,
	duration: '100%'
})
.setPin('#about .pin-wrapper')
.addTo(controller);

// Scene 1 - pin the second section
var pinScene01 = new ScrollMagic.Scene({
	triggerElement: '#portfolio01',
	triggerHook: 0,
	duration: '100%'
})
.setPin('#portfolio01 .pin-wrapper')
.addTo(controller);

// Scene 2 - pin the third section
var pinScene02 = new ScrollMagic.Scene({
	triggerElement: '#portfolio01',
	triggerHook: 0,
	duration: '200%'
})
.setPin('#portfolio02 .pin-wrapper')
.addTo(controller);

// Scene 3 - pin the forth section
var pinScene02 = new ScrollMagic.Scene({
	triggerElement: '#portfolio02',
	triggerHook: 0,
	duration: '100%'
})
.setPin('#portfolio03 .pin-wrapper')
.addTo(controller);


}); // End of Jquery
