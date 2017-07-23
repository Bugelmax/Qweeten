jQuery(document).ready(function(){

	$('.loop').owlCarousel({
		center: false,
		// autoplay:false,
		// autoplayTimeout:4000,
		// autoplayHoverPause:true,
		items:1,
		loop:false,
		// smartSpeed: 600,
		margin: 0,
		responsiveClass:true,
		nav:true,
		responsive:{
			0:{
				items:1,
				center: false,
				nav:true
			},
			769:{
				items:1
			}
		}
	});

	$(function() {
      var popwindow = $('.popwindow');
      var popbutton = $('.popbutton');
      $("body").prepend("<div class='mask'></div>");
      function preparewindow(windowobject) {
        var winwidth = windowobject.data("width");
        var winheight = windowobject.data("height");
        var winmargin = winwidth / 2;
        var wintitle = windowobject.data("title");

        windowobject.wrap("<div class='box_window'></div>");
        windowobject.addClass("box_window_in");
        windowobject.parent(".box_window").prepend("<div class='bw_close'><i class='fa fa-window-close' aria-hidden='true'></i></div>");
        windowobject.css("cursor","pointer");

        windowobject.parent(".box_window").prepend("<div class='box_title'>"+wintitle+"</div>");
        windowobject.parent(".box_window").css({'width':winwidth,'height':winheight,'margin-left':'-'+winmargin})
        windowobject.css({'height':winheight})
      }  
      if (popwindow.length) {
        preparewindow(popwindow);
        popbutton.click(function(){
            var idwind = $(this).data("window");
            $("#" + idwind).parent(".box_window").fadeIn().addClass("windactiv");
            $(".mask").fadeIn();
            $(".to_blur").addClass("blur");
        });
      };
      $(".mask, .bw_close").click(function(){
          $(".windactiv").fadeOut();
          $(".windactiv").removeClass("windactiv");
          $(".mask").fadeOut();
           $(".to_blur").removeClass("blur");
      });
  });
});
