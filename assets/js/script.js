(function($){
	'use script';


	// Menu Responsive
	$(document).ready(function(){
		$('.mobile-menu').click(function(){
			$('.menu ul').slideToggle();
		});
	});

	// Scroll Area
	$(document).ready(function(){
	    $('.scroll-area').click(function(){
	      	$('html').animate({
	        	'scrollTop' : 0,
	      	},700);
	      	return false;
	    });
	    $(window).on('scroll',function(){
	      	var a = $(window).scrollTop();
	      	if(a>400){
	            $('.scroll-area').slideDown(300);
	        }else{
	            $('.scroll-area').slideUp(200);
	        }
	    });
	});

	$('.popup-video').magnificPopup({
    	type: 'iframe'
  	});


	$(document).ready(function(){
	  	$(".testimonial-full-slider").owlCarousel({
	  		loop:true,
	  		center:true,
	  		items:1,
	  		autoplay: true,
	  		nav:true,
	  		navText:['<span class="testimonial-nav"><i class="fas fa-angle-left"></i></span>','<span class="testimonial-nav"><i class="fas fa-angle-right"></i></span>'],
	  	});
	});

	$(document).ready(function(){
	  	$(".brand-area").owlCarousel({
	  		loop:true,
	  		center:true,
	  		autoplay: true,
	  		responsive:{
	  			400:{
	  				items:1,
	  			},
	  			676:{
	  				items:2,
	  			},
	  			767:{
	  				items:4,
	  			}

	  		}
	  	});
	});



	// Sticky Menu
	$(document).ready(function(){
		$(window).on('scroll',function(){
			var scroll = $(window).scrollTop();
			if(scroll < 150){
				$('.header').removeClass('sticky');
			}else{
				$('.header').addClass('sticky');
			}
		});
	});

	$('.counter').counterUp({
        delay: 10,
        time: 2000
    });

	$(window).on("load",function(){
				
		/* Page Scroll to id fn call */
		$(".menu a,a[href='#top'],a[rel='m_PageScroll2id']").mPageScroll2id();

		// demo functions 
		$("a[rel='next']").click(function(e){
			e.preventDefault();
			var to=$(this).parent().parent("section").next().attr("id");
			$.mPageScroll2id("scrollTo",to);
		});
		
	});
	

	$(document).ready(function(){
		let mainNavLinks = document.querySelectorAll(".menu ul li a");
		let mainSections = document.querySelectorAll("main section");

		let lastId;
		let cur = [];

		
		window.addEventListener("scroll", event => { 
		  let fromTop = window.scrollY;

		  	mainNavLinks.forEach(link => {
		    let section = document.querySelector(link.hash);

		   	if (
		      section.offsetTop <= fromTop &&
		      section.offsetTop + section.offsetHeight > fromTop
		    ) {
		      link.classList.add("current");
		    } else {
		      link.classList.remove("current");
		    }
		  	});
		});
	});



}(jQuery));