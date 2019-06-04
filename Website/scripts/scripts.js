$(document).ready(function(){

    //-- rezept slider:

    $("#rezept-owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        dots: true,
        center: true,
        navText: ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"]
    });



    //-- header transparent/white function:

    $(window).scroll(function(){

        if ($(document).scrollTop() > 100) {
            $('nav.navbar').removeClass('transparent');
            $('.logo-light').addClass('d-none');
            $('.logo-dark').removeClass('d-none');
        }
        else if (!$('.navbar-offcanvas').hasClass('collapsed')) {
            $('nav.navbar').removeClass('transparent');
            $('.logo-light').addClass('d-none');
            $('.logo-dark').removeClass('d-none');
        }
        else {
            $('nav.navbar').addClass('transparent');
            $('.logo-light').removeClass('d-none');
            $('.logo-dark').addClass('d-none');
        }

    });

    $(window).scroll(); // trigger scroll event on page load



    $('.toggle-offcanvas').click(function(){

        $(this).toggleClass('collapsed');
        $('.navbar-offcanvas').toggleClass('collapsed');

        if ($(document).scrollTop() < 100) {
            $('nav.navbar').toggleClass('transparent');
            $('.logo-light').toggleClass('d-none');
            $('.logo-dark').toggleClass('d-none');
        }

    });



    //-- slider expand function

    $('.anzeigen').click(function(){
        $(this).closest('.slide').removeClass('closed');
    });

    $('.ausblenden').click(function(){
        $(this).closest('.slide').addClass('closed');
    });

    $('.owl-prev, .owl-next, .owl-dot').click(function(){
        $('.slide').addClass('closed'); // collapse slide when user clicks arrows or dots of slider
    });

    $("#rezept-owl-carousel").on('drag.owl.carousel', function() {
        $('.slide').addClass('closed'); // collapse slide when user drags the slider
    });



    //-- show lieferadresse function

    $('label[for="liefer_rechnung"]').click(function(){

        if ($('input#liefer_rechnung').is(':checked')) {
            $('.lieferadresse').removeClass('hidden');
        }
        else {
            $('.lieferadresse').addClass('hidden');
        }

    });

});
