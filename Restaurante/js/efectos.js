$(document).ready(function(){
	
	//Efecto Menu
	$('.menu a').each(function(index , elemento){ //
		$(this).css({
			'top': '-200px'
		});

		$(this).animate({
			top: '0'
		}, 1500 + (index * 500));
	});

	//Efecto Header
	if( $(window).width() > 800){
		$('header .textos').css({
			opacity: 0,
			marginTop: 0
		})

		$('header .textos').animate({
			opacity: 1,
			marginTop: -52
		}, 2000)
	}

	//scroll elementos menu
	var acercaDe = $('#acerca-de').offset().top;
	var	menu = $('#platillos').offset().top;
	var	galeria = $('#galeria').offset().top;
	var	ubicacion = $('#ubicacion').offset().top;

	$('#btn-acerca-de').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: acercaDe
		}, 500)
	})

	$('#btn-menu').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: menu
		}, 500)
	})

	$('#btn-galeria').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: galeria
		}, 500)
	})

	$('#btn-ubicacion').on('click', function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop: ubicacion
		}, 500)
	})


});

/*Hola, mi duda tiene que ver con el minuto 5:00 del video,
 no comprendo bien por que se tienen que agregar esos parametros en la funcion anonima, (index y elemento) y que representa cada uno, en el tutorial solo dice 
que hay que ponerlos pero no entendí muy bien por qué y que sucederia si los pongo con otro nombre o no los pongo, desde ya, muchas gracias.*/