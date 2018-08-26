//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

$(document).ready(function() {
    // WOW init
    wow = new WOW({
        animateClass: 'animated',
        offset: 100
    });
    wow.init();

    //jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function() {
        $('a.page-scroll').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });

    // Ano atual
    var anoAtual = new Date().getFullYear();
    // document.getElementById('anoAtual').innerHTML = anoAtual;
    $('#anoAtual').html(anoAtual);

    // Minha idade
    var idade = anoAtual - 1996;
    // document.getElementById('idade').innerHTML = idade;
    $('#idade').html(idade);
});