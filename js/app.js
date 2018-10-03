$(document).ready(function () {

    $(window).scroll(function(){

        var wScroll = $(window).scrollTop();
    
        $('.js-parallax').css({
            'background-position' : 'center '+ (wScroll*0.5) +'%'
        });

    });
    

});