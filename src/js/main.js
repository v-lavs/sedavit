/*
* to include js file write: `//= include ./path-to-file`
* */

//= include ../../node_modules/jquery/dist/jquery.js ;
//= include ../lib/bubbles.js ;

// CUSTOM SCRIPTS

$(document).ready(function () {
    var scrolled;
    window.onscroll = function () {
        scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if (scrolled > 100) {
            $(".header").addClass('active')
        }
        if (100 > scrolled) {
            $(".header").removeClass('active')
        }
    }

    //MOBILE MENU
    const nav = $('nav');
    $('.btn_burger').click(function (e) {
        e.preventDefault();
        nav.addClass('open');
        $('.btn_close').show();
        $('body').addClass('overflow-hidden');
    });

    $('.btn_close, .backdrop').click(function (e) {
        nav.removeClass('open');
        $('.btn_close').hide();
        $('body').removeClass('overflow-hidden');
    });

// SMOOTH SCROLL TO ANCHOR
    let smoothScroll = location.hash;
    const offsetSize = $("header").innerHeight();
    location.hash = '';
    if ($(smoothScroll).length > 0) {
        $('html, body').animate({scrollTop: $(smoothScroll).offset().top - offsetSize}, 1500);
    }
    $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                let target = $(this.hash);
                target = target.length ? target : $('[id=' + this.hash.slice(1) + ']');
                if (target.length) {
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top - offsetSize
                    }, 2000, function () {
                        let $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) {
                            return false;
                        } else {
                            $target.attr('tabindex', '-1');
                            $target.focus();
                        }

                    });
                }
            }
        });

});
