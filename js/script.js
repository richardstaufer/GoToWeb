$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        items: 3,
        margin: 10,
        nav: true, /* разрешить стрелки */
        navText : ["<img src='img/arrow.png'>","<img src='img/arrow-right.png'>"],
        dots: false, /* убрать точки под каруселью */
        smartSpeed: 2000,
        responsive:{
            300:{
                items:1,
                nav: false,
                dots: true,
            },
            480:{
                items:1,
                nav: false,
                dots: true,
            },
            600:{
                items:2,
                nav: true,
                dots: false,
            },
            1024:{
                items:3,
                nav: true,
                dots: false,
            },
            1330:{
                items:3,
                nav: true,
                dots: false,
            },
            1660:{
                items:3,
                dots: false,
                nav: true,
            },
            1920:{
                items:3,
                dots: false,
                nav: true,
            },
        }
    });
});

$(function(){
    $('#button-menu')
    .click(function(){
        $('.menu-container__toggle').slideToggle();
    });
});

/* плавная прокрутка вверх*/
$(function() {
    $('.backtotop').click(function(){
        $('html, body').animate({scrollTop:0}, 1500);
    });
});

/* задержка старта анимации летающих тегов */
$(document).ready(function() {
    setTimeout(function() {
        $('.fe1').addClass("move1");
    }, 100);
    setTimeout(function() {
        $('.fe2').addClass("move2");
    }, 100);
    setTimeout(function() {
        $('.fe3').addClass("move3");
    }, 100);
    setTimeout(function() {
        $('.fe4').addClass("move4");
    }, 100);
    setTimeout(function() {
        $('.fe5').addClass("move5");
    }, 100);
    setTimeout(function() {
        $('.fe6').addClass("move6");
    }, 100);
    setTimeout(function() {
        $('.fe7').addClass("move7");
    }, 100);
    setTimeout(function() {
        $('.fe8').addClass("move8");
    }, 100);
    setTimeout(function() {
        $('.fe9').addClass("move9");
    }, 100);
    setTimeout(function() {
        $('.fe0').addClass("move0");
    }, 100);
});
