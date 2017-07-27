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
        windowobject.parent(".box_window").prepend("<div class='bw_close'><i class='fa fa-times' aria-hidden='true'></i></i></div>");
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

$(function() {
      var popwindow = $('.popwindow-member');
      var popbutton = $('.popbutton-member');
      $("body").prepend("<div class='mask-one'></div>");
      function preparewindow(windowobject) {
        var winwidth = windowobject.data("width");
        var winheight = windowobject.data("height");
        var winmargin = winwidth / 2;
        var wintitle = windowobject.data("title");

        windowobject.wrap("<div class='box_window_member'></div>");
        windowobject.addClass("box_window_in_member");
        windowobject.parent(".box_window_member").prepend("<div class='bw_close_member'><i class='fa fa-times' aria-hidden='true'></i></i></div>");
        windowobject.css("cursor","pointer");

        windowobject.parent(".box_window_member").prepend("<div class='box_title_member'>"+wintitle+"</div>");
        windowobject.parent(".box_window_member").css({'width':winwidth,'height':winheight,'margin-left':'-'+winmargin})
        windowobject.css({'height':winheight})
      }  
      if (popwindow.length) {
        preparewindow(popwindow);
        popbutton.click(function(){
            var idwind = $(this).data("window");
            $("#" + idwind).parent(".box_window_member").fadeIn().addClass("windactiv");
            $(".mask-one").fadeIn();
            // $(".to_blur").addClass("blur");
        });
      };
      $(".mask, .bw_close_member").click(function(){
          $(".windactiv").fadeOut();
          $(".windactiv").removeClass("windactiv");
          $(".mask-one").fadeOut();
          // $(".to_blur").removeClass("blur");
      });
      $(".mask, .buy").click(function(){
          $(".windactiv").fadeOut();
          $(".windactiv").removeClass("windactiv");
          // $(".mask-one").fadeOut();
          // $(".to_blur").removeClass("blur");
      });
  });

  //     $(function() {
  //     var popwindow-apply= $('.popwindow-apply');
  //     var popbutton-apply = $('.popbutton-apply');
  //     $("body").prepend("<div class='mask-two'></div>");
  //     function preparewindow(windowobject) {
  //       var winwidth = windowobject.data("width");
  //       var winheight = windowobject.data("height");
  //       var winmargin = winwidth / 2;
  //       var wintitle = windowobject.data("title");

  //       windowobject.wrap("<div class='box_window_apply'></div>");
  //       windowobject.addClass("box_window_in_apply");
  //       windowobject.parent(".box_window_apply").prepend("<div class='bw_close_apply'><i class='fa fa-times' aria-hidden='true'></i></i></div>");
  //       windowobject.css("cursor","pointer");

  //       windowobject.parent(".box_window_apply").prepend("<div class='box_title_apply'>"+wintitle+"</div>");
  //       windowobject.parent(".box_window_apply").css({'width':winwidth,'height':winheight,'margin-left':'-'+winmargin})
  //       windowobject.css({'height':winheight})
  //     }  
  //     if (popwindow-apply.length) {
  //       preparewindow(popwindow-apply);
  //       popbutton-apply.click(function(){
  //           var idwind = $(this).data("window");
  //           $("#" + idwind).parent(".box_window_apply").fadeIn().addClass("windactiv");
  //           $(".mask-two").fadeIn();
  //           // $(".to_blur").addClass("blur");
  //       });
  //     };
  //     $(".mask, .bw_close_apply").click(function(){
  //         $(".windactiv").fadeOut();
  //         $(".windactiv").removeClass("windactiv");
  //         $(".mask-two").fadeOut();
  //          // $(".to_blur").removeClass("blur");
  //     });
  // });
});
