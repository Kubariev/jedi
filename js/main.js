(function($){
    /* Initialization of bxslider */
    $('.bxslider').bxSlider({
        mode: 'fade',
        speed: 1000,
        pager: false,
        captions: true
    });

    /* Click event on links to change active class */
    $('.main_menu a').on('click', function(e) {
        if ($(this).attr('href') === '#') {
            e.preventDefault(); // to prevent link to href
            $(this).parent().addClass('active')
                   .siblings().removeClass('active');
        }
    });

    /* Hamburger menu functionality */
    $('.hamburger_icon').on('click', function() {
       $(this).parents('.main_header').toggleClass('opened');
    });

})(jQuery);
