//FUNCIONES DE ESTADISTICAS
function stats() {
    const jugadores = [{ id: 1,  nombre: "Lebron James", ppg: 25.9, rpg: 5.5, apg: 6.6},
    {  id: 2,  nombre: "Stephen Curry", ppg: 27.1, rpg: 5.5, apg: 6.3},
    {  id: 3,  nombre: "Kevin Durant"  , ppg: 28.4, rpg: 7.7, apg: 5.4},
    {  id: 4,  nombre: "Luka Doncic" , ppg: 25.6, rpg: 8.1, apg: 8.4},
    {  id: 5,  nombre: "Giannis Antetokounmpo" , ppg: 27.5, rpg: 11.6, apg: 5.7}];

    let contenedor = document.createElement("div1");
    let a = 0
    if (a == 0) {
        contenedor.innerHTML = 
        `
        <table class="table table-dark table-striped table-hover" style="width: 70%; margin-left: 15%; margin-top: -35%">
            <thead >
                <tr>
                    <th scope="col">Posición</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">PPG</th>
                    <th scope="col">RPG</th>
                    <th scope="col">APG</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">${jugadores[0].id}</th>
                    <td>${jugadores[0].nombre}</td>
                    <td>${jugadores[0].ppg}</td>
                    <td>${jugadores[0].rpg}</td>
                    <td>${jugadores[0].apg}</td>
                </tr>
                <tr>
                    <th scope="row">${jugadores[1].id}</th>
                    <td>${jugadores[1].nombre}</td>
                    <td>${jugadores[1].ppg}</td>
                    <td>${jugadores[1].rpg}</td>
                    <td>${jugadores[1].apg}</td>
                </tr>
                <tr>
                    <th scope="row">${jugadores[2].id}</th>
                    <td>${jugadores[2].nombre}</td>
                    <td>${jugadores[2].ppg}</td>
                    <td>${jugadores[2].rpg}</td>
                    <td>${jugadores[2].apg}</td>
                </tr>
                <tr>
                    <th scope="row">${jugadores[3].id}</th>
                    <td>${jugadores[3].nombre}</td>
                    <td>${jugadores[3].ppg}</td>
                    <td>${jugadores[3].rpg}</td>
                    <td>${jugadores[3].apg}</td>
                </tr>
                <tr>
                    <th scope="row">${jugadores[4].id}</th>
                    <td>${jugadores[4].nombre}</td>
                    <td>${jugadores[4].ppg}</td>
                    <td>${jugadores[4].rpg}</td>
                    <td>${jugadores[4].apg}</td>
                </tr>
            </tbody>
        </table>
        `;
                
                document.body.appendChild(contenedor);
                a++
    }
}
 
function puntos() {
    const jugadores = [{ id: 1,  nombre: "Kevin Durant", ppg: 28.4, rpg: 7.7, apg: 5.4},
    {  id: 2,  nombre: "Trae Young", ppg: 27.7, rpg: 4.1, apg: 9.3},
    {  id: 3,  nombre: "Giannis Antetokounmpo" , ppg: 27.5, rpg: 11.6, apg: 5.7},
    {  id: 4,  nombre: "Stephen Curry", ppg: 27.3, rpg: 5.5, apg: 6.3},
    {  id: 5,  nombre: "Demar Derozan" , ppg: 26.4, rpg: 7.9, apg: 5.9}];

    let contenedor = document.createElement("div2");
    let a = 0
    if (a == 0) {
        contenedor.innerHTML = 
            `
            <table class="table table-dark table-striped table-hover" style="width: 70%; margin-left: 15%;">
                <thead >
                    <tr>
                        <th scope="col">Posición</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">PPG</th>
                        <th scope="col">RPG</th>
                        <th scope="col">APG</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">${jugadores[0].id}</th>
                        <td>${jugadores[0].nombre}</td>
                        <td>${jugadores[0].ppg}</td>
                        <td>${jugadores[0].rpg}</td>
                        <td>${jugadores[0].apg}</td>
                    </tr>
                    <tr>
                        <th scope="row">${jugadores[1].id}</th>
                        <td>${jugadores[1].nombre}</td>
                        <td>${jugadores[1].ppg}</td>
                        <td>${jugadores[1].rpg}</td>
                        <td>${jugadores[1].apg}</td>
                    </tr>
                    <tr>
                        <th scope="row">${jugadores[2].id}</th>
                        <td>${jugadores[2].nombre}</td>
                        <td>${jugadores[2].ppg}</td>
                        <td>${jugadores[2].rpg}</td>
                        <td>${jugadores[2].apg}</td>
                    </tr>
                    <tr>
                        <th scope="row">${jugadores[3].id}</th>
                        <td>${jugadores[3].nombre}</td>
                        <td>${jugadores[3].ppg}</td>
                        <td>${jugadores[3].rpg}</td>
                        <td>${jugadores[3].apg}</td>
                    </tr>
                    <tr>
                        <th scope="row">${jugadores[4].id}</th>
                        <td>${jugadores[4].nombre}</td>
                        <td>${jugadores[4].ppg}</td>
                        <td>${jugadores[4].rpg}</td>
                        <td>${jugadores[4].apg}</td>
                    </tr>
                </tbody>
            </table>
            `;
                
        document.body.appendChild(contenedor);
        a++
        document.getElementById("mostrarPts").style.pointerEvents = "none"
                
    }
}

function asistencias() {
    const jugadores = [{ id: 1,  nombre: "Chris Paul", ppg: 14.5, rpg: 4.1, apg: 10.4},
    {  id: 2,  nombre: "James Harden", ppg: 20.8, rpg: 7.9, apg: 9.6},
    {  id: 2,  nombre: "Trae Young", ppg: 27.7, rpg: 4.1, apg: 9.3},
    {  id: 4,  nombre: "Luka Doncic", ppg: 25.6, rpg: 8.1, apg: 8.5},
    {  id: 5,  nombre: "Dejounte Murray" , ppg: 17.7, rpg: 8.4, apg: 8.4}];

    let contenedor = document.createElement("div2");
            
    let a = 0
    if (a == 0) {
        contenedor.innerHTML = 
            `
            <table class="table table-dark table-striped table-hover" style="width: 70%; margin-left: 15%;">
                <thead >
                    <tr>
                        <th scope="col">Posición</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">APG</th>
                        <th scope="col">RPG</th>
                        <th scope="col">PPG</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">${jugadores[0].id}</th>
                        <td>${jugadores[0].nombre}</td>
                        <td>${jugadores[0].apg}</td>
                        <td>${jugadores[0].rpg}</td>
                        <td>${jugadores[0].ppg}</td>
                    </tr>
                    <tr>
                        <th scope="row">${jugadores[1].id}</th>
                        <td>${jugadores[1].nombre}</td>
                        <td>${jugadores[1].apg}</td>
                        <td>${jugadores[1].rpg}</td>
                        <td>${jugadores[1].ppg}</td>
                    </tr>
                    <tr>
                        <th scope="row">${jugadores[2].id}</th>
                        <td>${jugadores[2].nombre}</td>
                        <td>${jugadores[2].apg}</td>
                        <td>${jugadores[2].rpg}</td>
                        <td>${jugadores[2].ppg}</td>
                    </tr>
                    <tr>
                        <th scope="row">${jugadores[3].id}</th>
                        <td>${jugadores[3].nombre}</td>
                        <td>${jugadores[3].apg}</td>
                        <td>${jugadores[3].rpg}</td>
                        <td>${jugadores[3].ppg}</td>
                    </tr>
                    <tr>
                        <th scope="row">${jugadores[4].id}</th>
                        <td>${jugadores[4].nombre}</td>
                        <td>${jugadores[4].apg}</td>
                        <td>${jugadores[4].rpg}</td>
                        <td>${jugadores[4].ppg}</td>
                    </tr>
                </tbody>
            </table>
            `;
                
        document.body.appendChild(contenedor);
        a++
        document.getElementById("mostrarAst").style.pointerEvents = "none"
                
    }
}

function rebotes() {
    const jugadores = [{ id: 1,  nombre: "Rudy Gobert", ppg: 15.1, rpg: 14.8, apg: 1.1},
    {  id: 2,  nombre: "Nikola Jokic", ppg: 26.3, rpg: 13.5, apg: 7.5},
    {  id: 3,  nombre: "Clint Capela" , ppg: 11.5, rpg: 12.8, apg: 1.4},
    {  id: 4,  nombre: "Jonas Valanciunas", ppg: 18.9, rpg: 11.9, apg: 2.5},
    {  id: 5,  nombre: "Domantas Sabonis" , ppg: 18.3, rpg: 11.8, apg: 4.2}];

    let contenedor = document.createElement("div2");
            
    let a = 0
    if (a == 0) {
        contenedor.innerHTML = 
            `
            <table class="table table-dark table-striped table-hover" style="width: 70%; margin-left: 15%;">
                <thead >
                    <tr>
                        <th scope="col">Posición</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">RPG</th>
                        <th scope="col">PPG</th>
                        <th scope="col">APG</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th scope="row">${jugadores[0].id}</th>
                        <td>${jugadores[0].nombre}</td>
                        <td>${jugadores[0].rpg}</td>
                        <td>${jugadores[0].ppg}</td>
                        <td>${jugadores[0].apg}</td>
                    </tr>
                    <tr>
                        <th scope="row">${jugadores[1].id}</th>
                        <td>${jugadores[1].nombre}</td>
                        <td>${jugadores[1].rpg}</td>
                        <td>${jugadores[1].ppg}</td>
                        <td>${jugadores[1].apg}</td>
                    </tr>
                    <tr>
                        <th scope="row">${jugadores[2].id}</th>
                        <td>${jugadores[2].nombre}</td>
                        <td>${jugadores[2].rpg}</td>
                        <td>${jugadores[2].ppg}</td>
                        <td>${jugadores[2].apg}</td>
                    </tr>
                    <tr>
                        <th scope="row">${jugadores[3].id}</th>
                        <td>${jugadores[3].nombre}</td>
                        <td>${jugadores[3].rpg}</td>
                        <td>${jugadores[3].ppg}</td>
                        <td>${jugadores[3].apg}</td>
                    </tr>
                    <tr>
                        <th scope="row">${jugadores[4].id}</th>
                        <td>${jugadores[4].nombre}</td>
                        <td>${jugadores[4].rpg}</td>
                        <td>${jugadores[4].ppg}</td>
                        <td>${jugadores[4].apg}</td>
                    </tr>
                </tbody>
            </table>
            `;
                
        document.body.appendChild(contenedor);
		document.getElementById("mostrarRbd").style.pointerEvents = "none"   
    }
}


//FUNCION DEL BOTON BORRAR
$(document).ready(function() {
	$("#borrar").click(function(event) {
		$("div2").remove();
		$("#mostrarPts").css({'pointer-events':'auto'});
		$("#mostrarAst").css({'pointer-events':'auto'});
		$("#mostrarRbd").css({'pointer-events':'auto'});
	});
});

//DECLARACION DE VARIABLES PARA EL INICO Y CREAR USUARIO
var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");

	
//EJECUCION DE FUNCIONES PARA EL INICIO Y CREAR USUARIO
var el = document.getElementById('btn__iniciar-sesion');
if(el){
el.addEventListener("click", iniciarSesion);
}
var el = document.getElementById("btn__registrarse")
if(el){
el.addEventListener("click", register);
}

window.addEventListener("resize", anchoPage);


//ANIMACION DEL FORM INICIO Y CREA USUARIO   
function anchoPage() {
if (window.innerWidth > 850) {
	if(caja_trasera_register) {

	caja_trasera_register.style.display = "block";

	}
	
	if(caja_trasera_register) {

		caja_trasera_login.style.display = "block";
		
	}
}
else {
	caja_trasera_register.style.display = "block";
	caja_trasera_register.style.opacity = "1";
	caja_trasera_login.style.display = "none";
	formulario_login.style.display = "block";
	contenedor_login_register.style.left = "0px";
	formulario_register.style.display = "none";   
}
}

anchoPage();

function iniciarSesion(){
if (window.innerWidth > 850) {
	formulario_login.style.display = "block";
	contenedor_login_register.style.left = "10px";
	formulario_register.style.display = "none";
	caja_trasera_register.style.opacity = "1";
	caja_trasera_login.style.opacity = "0";
}
else {
	formulario_login.style.display = "block";
	contenedor_login_register.style.left = "0px";
	formulario_register.style.display = "none";
	caja_trasera_register.style.display = "block";
	caja_trasera_login.style.display = "none";
}
}

function register() {
if (window.innerWidth > 850){
	formulario_register.style.display = "block";
	contenedor_login_register.style.left = "410px";
	formulario_login.style.display = "none";
	caja_trasera_register.style.opacity = "0";
	caja_trasera_login.style.opacity = "1";
}
else {
	formulario_register.style.display = "block";
	contenedor_login_register.style.left = "0px";
	formulario_login.style.display = "none";
	caja_trasera_register.style.display = "none";
	caja_trasera_login.style.display = "block";
	caja_trasera_login.style.opacity = "1";
}  
}


//FUNCIONES DEL CREAR E INCIAR USUARIO
const registroUsuario = e => {
    let fname = document.getElementById('fname').value
    let lname = document.getElementById('lname').value
    let email = document.getElementById('email2').value
    let pwd = document.getElementById('pwd2').value;

    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    let exist = formData.length && JSON.parse(localStorage.getItem('formData')).some(data => 
		data.fname.toLowerCase() == fname.toLowerCase() && 
		data.lname.toLowerCase() == lname.toLowerCase()
	);

    if(!exist) {
	formData.push({ fname, lname, email, pwd });
	localStorage.setItem('formData', JSON.stringify(formData));
	document.querySelector('form').reset();
	document.getElementById('fname').focus();
    }
    else { 

    }
    e.preventDefault();
}

function inicioUsuario(e) {
    let email = document.getElementById('email').value
    let pwd = document.getElementById('pwd').value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length && JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowerCase() == email && data.pwd.toLowerCase() == pwd);

    if(!exist) {
        location.href = "PagError.html";
        console.log(localStorage.getItem('formData'))
    }
    else {
        console.log("Iniciado")
    }
    e.preventDefault();
}


//FUNCIONES RESPONSIVE PARA OTROS DISPOSITIVOS
;(function () {
	
	'use strict';

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#div-offcanvas, .js-div-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-div-nav-toggle').removeClass('active');
				
	    	}
	    
	    	
	    }
		});

	};

	var offcanvasMenu = function() {

		$('#page').prepend('<div id="div-offcanvas" />');
		$('#page').prepend('<a href="#" class="js-div-nav-toggle div-nav-toggle div-nav-white"><i></i></a>');
		var clone1 = $('.menu-1 > ul').clone();
		$('#div-offcanvas').append(clone1);
		var clone2 = $('.menu-2 > ul').clone();
		$('#div-offcanvas').append(clone2);

		$('#div-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#div-offcanvas')
			.find('li')
			.removeClass('has-dropdown');


		$('.offcanvas-has-dropdown').mouseenter(function(){
			var $this = $(this);

			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');				
		}).mouseleave(function(){

			var $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');				
		});


		$(window).resize(function(){

			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-div-nav-toggle').removeClass('active');
				
	    	}
		});
	};

	var burgerMenu = function() {

		$('body').on('click', '.js-div-nav-toggle', function(event){
			var $this = $(this);


			if ( $('body').hasClass('overflow offcanvas') ) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};

	var fullHeight = function() {

		if ( !isMobile.any() ) {
			$('.js-fullheight').css('height', $(window).height());
			$(window).resize(function(){
				$('.js-fullheight').css('height', $(window).height());
			});
		}

	};


	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};


	var dropdown = function() {

		$('.has-dropdown').mouseenter(function(){

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function(){
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};


//FUNCION PARA VOLVER ARRIBA DE LA PAGINA CON UN BOTON
	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

			if ( $win.scrollTop() > 100 ) {
				$('.div-nav').addClass('scrolled');
			} else {
				$('.div-nav').removeClass('scrolled');
			}

		});
	
	};


//FUNCIONES DE CARGADO DE PAGINA
	var loaderPage = function() {
		$(".div-loader").fadeOut("slow");
	};


	var counterWayPoint = function() {
		if ($('#div-counter').length > 0 ) {
			$('#div-counter').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};

    
	var sliderMain = function() {
		
	  	$('#div-slider-wrwap .flexslider').flexslider({
			animation: "fade",
			slideshowSpeed: 5000,
			directionNav: true,
			start: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			},
			before: function(){
				setTimeout(function(){
					$('.slider-text').removeClass('animated fadeInUp');
					$('.flex-active-slide').find('.slider-text').addClass('animated fadeInUp');
				}, 500);
			}

	  	});

	  	$('#div-slider-wrwap .flexslider .slides > li').css('height', $(window).height());	
	  	$(window).resize(function(){
	  		$('#div-slider-wrwap .flexslider .slides > li').css('height', $(window).height());	
	  	});

	  	
	};

	var parallax = function() {
		if ( !isMobile.any() ) {
			$(window).stellar();
		}
	};

	var zoomFunc = function() {
		if ($('.zoomerang').length > 0) {

	   	$('.div-bg-img').each(function(){
	   		$(this).css('width', '100%');
	   	});
	   	Zoomerang
                .config({
                    maxHeight: 900,
                    maxWidth: 800,
                    bgColor: '#000',
                    bgOpacity: .85,
                    onOpen: openCallback,
                    onClose: closeCallback,
                    onBeforeOpen: beforeOpenCallback,
                    onBeforeClose: beforeCloseCallback
                })
                .listen('.zoomerang')

            function openCallback (el) {
                console.log('zoomed in on: ')

            }

            function closeCallback (el) {
                console.log('zoomed out on: ')
           
            }

            function beforeOpenCallback (el) {
            	console.log('on before zoomed in on:')
       
            }

            function beforeCloseCallback (el) {
            	console.log('on before zoomed out on:')
            
            }

	   }
	}


//FUNCION DE EJECUCION DE OTRAS FUNCIONES PARA EL INCIO DE LA PAGINA	
	$(function(){
		mobileMenuOutsideClick();
		offcanvasMenu();
		burgerMenu();
		contentWayPoint();
		sliderMain();
		dropdown();
		goToTop();
		loaderPage();
		counterWayPoint();
		fullHeight();
		parallax();

		$('.div-bg-img').each(function(){
   		$(this).css('width', '100%');
   	});
	});


}());