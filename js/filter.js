jQuery(document).ready(function(){
  jQuery('.filter-mob-btn').click(function(){
    jQuery('.sidenav-overlay').addClass('active');
  });
  jQuery('.filter-close-btn span, .sidenav-overlay').click(function(){
    jQuery('.sidenav-overlay').removeClass('active');
  });

  jQuery('.filter-mob-btn').click(function () {
    $('.shop-goods').addClass('hover');
    $('.filter-mob-btn').css("display","none");
    $('.filter-close-btn').css('display','block');
  });
  
  jQuery('.filter-close-btn, .sidenav-overlay').click(function () {
    $('.shop-goods').removeClass('hover');
    $('.filter-mob-btn').css("display","block");
    $('.filter-close-btn').css('display','none');
    // $('html').removeClass('hover');
  });

  jQuery(window).resize(function(){
      if(jQuery(window).outerWidth() >= 800) {
        $('.filter-mob-btn').css("display","none");
        $('.filter-close-btn').css("display","none");
        $('.shop-goods').removeClass('hover');
      } else {
        $('.filter-mob-btn').css("display","block");
      }
  });
})