// MAKING IMAGES MOVE ON MOUSEMOVE (PARALLAX) (LOOKS WEIRD + NOT SURE HOW TO COMBINE WITH FLICKITY)

// $(document).ready(function(){
// 	$('.origin').on('mousemove', function(event){
// 		var xPos = event.pageX;

// 		$(".origin").css({
// 			'background-position': xPos + 'px,' +
// 								   xPos + 'px,' +
// 								   xPos/2 + 'px,' +
// 								   xPos/4 + 'px,' +
// 								   xPos/6 + 'px'
								   
// 		})
// 	})

// })

// 	$('.nationalization').on('mousemove', function(event){
// 		var xPos = event.pageX;

// 		$(".nationalization").css({
// 			'background-position': xPos + 'px,' +
// 								   xPos/2 + 'px,' +
// 								   xPos/4 + 'px,'
								   
// 		})
// 	})

// PARALLAX MOVEMENT OF CAROUSEL

// var $carousel = $('.carousel').flickity({
//   imagesLoaded: true,
//   percentPosition: false,
// });

// var $imgs = $carousel.find('.carousel-cell img');
// // get transform property
// var docStyle = document.documentElement.style;
// var transformProp = typeof docStyle.transform == 'string' ?
//   'transform' : 'WebkitTransform';
// // get Flickity instance
// var flkty = $carousel.data('flickity');

// $carousel.on( 'scroll.flickity', function() {
//   flkty.slides.forEach( function( slide, i ) {
//     var img = $imgs[i];
//     var x = ( slide.target + flkty.x ) * -1/3;
//     img.style[ transformProp ] = 'translateX(' + x  + 'px)';
//   });
// });
