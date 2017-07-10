jQuery(document).ready(function(){
	jQuery('.menu-mob-btn').click(function(){
		jQuery('.main-menu, .sidenav-overlay').addClass('active');
	});
	jQuery('.header-menu .close-btn span, .sidenav-overlay').click(function(){
		jQuery('.main-menu, .sidenav-overlay').removeClass('active');
	});
	
	$('.loop').owlCarousel({
		center: true,
		autoplay:true,
		autoplayTimeout:4000,
		autoplayHoverPause:true,
		items:2,
		loop:true,
		smartSpeed: 600,
		margin: 0,
		responsiveClass:true,
		nav:true,
		responsive:{
			0:{
				items:1,
				center: false,
				nav:false
			},
			769:{
				items:2
			}
		}
	});
	
	jQuery(window, 'body', 'html', '#wrapper').scroll(function(){
		if(jQuery(window).scrollTop() >= 150) {
			jQuery('body > header').addClass('scrolled');
		} else {
			jQuery('body > header').removeClass('scrolled');
		}

	});
	mobileMenuContent();
	
	
	
	
	function hideButton() {
		$('.best-photos-cont').each(function(){
			if($(this).find("figure:hidden").length == 0){
				$(this).parents('.gallery-page').find('.see-more').css('display', 'none');
			}
		});
	}
	$(".best-photos-cont figure").slice(0, 10).show();
	//$(".webinar-products.all-webinars ul.products li").slice(0, 10).show();
	$(".see-more").on('click', function (e) {
		e.preventDefault();
		$(this).parents('.gallery-page').find('figure:hidden').slice(0, 5).slideDown();
		if ($("figure:hidden").length == 0) {
			$("#load").fadeOut('slow');
		}
		/* $('html,body').animate({
			scrollTop: $(this).offset().top
		}, 200); */
		hideButton();
	});
	hideButton();
	
});

jQuery(window).resize(function(){
	mobileMenuContent();
});

function mobileMenuContent() {
	if(jQuery(window).outerWidth() <= '640') {
		jQuery('.header-top').insertAfter('.main-menu ul');
		jQuery('.header_selects').insertAfter('.main-menu ul');
	} else {
		jQuery('.header-top').appendTo('.header-top-cont');
		jQuery('.header_selects').appendTo('.header_selects_cont');
	}
}