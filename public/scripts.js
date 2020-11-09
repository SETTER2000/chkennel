$(document).ready(function () {
    $(window).scroll(function(){
        const navOffset = $('#nav-top').offset().top;
        const scrolled = $(this).scrollTop();
        if(scrolled > navOffset){
         // шапка прилипла
            $('#wrapper').addClass('nav-fixed')
        }else  if(scrolled < navOffset){
            // шапка отлипла
            $('#wrapper').removeClass('nav-fixed')
        }
    });
});

