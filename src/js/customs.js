(jQuery)(function ($) {
    $(function () {
        $('.menu__icon').on('click', function () {
            $(this).closest('.menu').toggleClass('menu_state_open');
        });
        $('.menu__links-item').on('click', function () {
            $(this).closest('.menu').toggleClass('menu_state_open');
        });
    });

});
$('.screenshots_slider').slick({
    arrows: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [

        {
            breakpoint: 1870,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1800,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 1169,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 990,
            settings: 'unslick'
        },
    ]
});
$('.client_slider').slick({
    arrows: false,
    infinite: false,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1169,
            settings: 'unslick'
        },
    ]
});
$('a[href*="#"]')
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex', '-1');
                        $target.focus();
                    }
                    ;
                });
            }
        }
    });
$('#send').on('click', function () {
    if (this) {
        $('.popup').addClass('popup_active');

    } else {
        $('.popup').removeClass('popup_active');
    }
    return false;
});
$('#close,#close_x').on('click', function () {
    if (this) {
        $('.popup').removeClass('popup_active');
    } else {
        $('.popup').addClass('popup_active');
    }
});
