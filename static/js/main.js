/*
	Template Name: Vinazine
	Author: Themewinter
	Author URI: https://themeforest.net/user/tripples
	Description: vinazine
   Version: 1.0

   ================================
   table of content
   =================================
   1.   dropdown menu
   2.   breking news slider
   3.   featured post slider
   4.   Most populer slider
   5.   Gallery popup
   6.   video popup
   7.   video slider

*/

$(function ($) {
    "use strict";




    $(window).on('load', function() {

        /*==========================================================
                    4. Preloader
        =======================================================================*/
        setTimeout(() => {
            $('#preloader').addClass('loaded');
        }, 1000);
    });

    $('.preloader-cancel-btn').on('click', function(event) {
		event.preventDefault();
		if (!$('#preloader').hasClass('loaded')) {
			$('#preloader').addClass('loaded');
		}
   });
   



    /**-------------------------------------------------
     *Fixed HEader
     *----------------------------------------------------**/
       $(window).on('scroll', function () {

            /**Fixed header**/
            if ($(window).scrollTop() > 250) {
               $('.ts-menu-sticky').addClass('sticky fade_down_effect');
            } else {
               $('.ts-menu-sticky').removeClass('sticky fade_down_effect');
            }
      });

     /* ----------------------------------------------------------- */
	/*  index search
    /* ----------------------------------------------------------- */

    if ($(".header-search").length > 0) {
        var todg = true;
        $(".header-search >a").on("click", function (e) {
            e.preventDefault();
            if (todg) {
                $(".header-search-form").fadeIn("slow");
                todg = false;
            } else {
                $(".header-search-form").fadeOut("slow");
                todg = true;
            }
        });

        $(document).on('mouseup', function (e) {
            var container = $(".header-search");

            if (!container.is(e.target) && container.has(e.target).length === 0) {
                $(".header-search-form").fadeOut("slow");
                todg = true;
            }

        });
    }


    /*======================== 
         navigation 
    ==========================*/
    if ($('.ts-main-menu').length > 0) {
        $(".ts-main-menu").navigation({
            effect: "fade",
            mobileBreakpoint: 992,
        });
    }

    /*======================== 
        breaking news  
   ==========================*/
    if ($('#breaking_slider').length > 0) {
        $('#breaking_slider').owlCarousel({
            items: 1,
            loop: true,
            dots: false,
            nav: true,
            animateOut: 'slideOutDown',
            animateIn: 'flipInX',
            autoplayTimeout: 5000,
            autoplay: true,
            autoplayHoverPause: true,
            mouseDrag: false,
            touchDrag:false,
        })
    }

    /*======================== 
        featured post  
   ==========================*/
    if ($('#featured-slider').length > 0) {
        $('#featured-slider').owlCarousel({
            loop: true,
            items: 1,
            dots: false,
            nav: true,
            autoplayTimeout: 5000,
            autoplay: true,
            animateOut: 'slideOutLeft',
            autoplayHoverPause: true,
            mouseDrag: false,
            touchDrag:false,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsiveClass: true,
        });
    }
    /*======================== 
        featured slider 2 
   ==========================*/
    if ($('#featured-slider-2').length > 0) {
        $('#featured-slider-2').owlCarousel({
            loop: true,
            items: 1,
            dots: true,
            nav: false,
            responsiveClass: true,
             autoplayHoverPause: true,
            mouseDrag: false,
            touchDrag:false,
            animateOut: 'slideOutLeft',

        });
    }
    /*======================== 
        featured slider 3
   ==========================*/
    if ($('#featured-slider-3').length > 0) {
        $('#featured-slider-3').owlCarousel({
            items: 1,
            dots: true,
            nav: false,
            animateOut: 'slideOutLeft',
            autoplay: true,
            autoplayHoverPause: true,
            mouseDrag: false,
            touchDrag:false,
            responsiveClass: true,
        });
    }
    /*======================== 
        featured slider 3
   ==========================*/
    if ($('#featured-slider-4').length > 0) {
        $('#featured-slider-4').owlCarousel({
            items: 1,
            dots: false,
            nav: true,
            animateOut: 'slideOutLeft',
            autoplay: true,
            responsiveClass: true,
            autoplayHoverPause: true,
            mouseDrag: false,
            touchDrag:false,
            navText: ["<i class='icon-arrow-left'></i>", "<i class='icon-arrow-right'></i>"],
        });
    }
    /*======================== 
        featured slider 5
   ==========================*/
    if ($('#featured-slider-5').length > 0) {
        $('#featured-slider-5').owlCarousel({
            items: 1,
            dots: true,
            nav: false,
            animateOut: 'slideOutLeft',
            autoplay: true,
            autoplayHoverPause: true,
            mouseDrag: false,
            touchDrag:false,
            responsiveClass: true,
        });
    }
    /*======================== 
        most populer  
   ==========================*/
    if ($('.most-populers').length > 0) {
        $('.most-populers').owlCarousel({
            items: 3,
            dots: false,
            loop: true,
            nav: true,
            autoplayHoverPause: true,
            mouseDrag: false,
            touchDrag:false,
            margin: 30,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 1,
                },
                // breakpoint from 480 up
                480: {
                    items: 2,
                },
                // breakpoint from 768 up
                768: {
                    items: 2,
                },
                // breakpoint from 768 up
                1200: {
                    items: 3,
                }
            }
        });
    }

    /*======================== 
        hot topics 
   ==========================*/
    if ($('#hot-topics-slider').length > 0) {
        $('#hot-topics-slider').owlCarousel({
            nav: false,
            items: 4,
            margin: 30,
            reponsiveClass: true,
            dots: true,
            autoplayHoverPause: true,
            mouseDrag: false,
            touchDrag:false,
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 1,
                },
                // breakpoint from 480 up
                480: {
                    items: 2,
                },
                // breakpoint from 768 up
                768: {
                    items: 2,
                },
                // breakpoint from 768 up
                1200: {
                    items: 4,
                }
            }
        });
    }
    /*======================== 
      more news slider
   ==========================*/
    if ($('#more-news-slider').length > 0) {
        $('#more-news-slider').owlCarousel({
            nav: false,
            items: 3,
            margin: 30,
            reponsiveClass: true,
            dots: true,
            slideSpeed: 600,
            autoplayHoverPause: true,
            mouseDrag: false,
            touchDrag:false,
            responsive: {
                // breakpoint from 0 up
                0: {
                    items: 1,
                },
                // breakpoint from 480 up
                480: {
                    items: 2,
                },
                // breakpoint from 768 up
                768: {
                    items: 2,
                },
                // breakpoint from 768 up
                1200: {
                    items: 3,
                }
            }

        });
    }

     /* ----------------------------------------------------------- */
	/*  hero banner slider on sport index
    /* ----------------------------------------------------------- */
    if ($("#hero-slider").length > 0) {
        $("#hero-slider").owlCarousel({
            margin: 10,
            loop: true,
            dots: true,
            nav: true,
            autoplay: true,
            items: 1,
            autoplayHoverPause: true,
            mouseDrag: false,
            touchDrag:false,
            animateOut: 'slideOutLeft',
            navText: ["<i class='icon-arrow-left'></i>", "<i class='icon-arrow-right'></i>"],
        });

        $('#hero-slider .owl-dots').wrap('<div class="container slider-dot-item"><div class="row"><div class="col-lg-9"></div></div></div>');
        $('#hero-slider .owl-nav').wrap('<div class="container slider-arrow-item"><div class="row"><div class="col-lg-9"></div></div></div>');
    }
    /* ----------------------------------------------------------- */
	/*  post slider
    /* ----------------------------------------------------------- */

    $("#post-slider1").owlCarousel({
         margin: 10,
         loop: true,
         dots: false,
         nav: true,
         autoplay: true,
         autoplaySpeed: 3000,
         items: 1,
         autoplayHoverPause: true,
         mouseDrag: false,
         touchDrag:false,
         animateOut: 'fadeOut',
         navText: ["<i class='icon-arrow-left'></i>", "<i class='icon-arrow-right'></i>"],
    });

    /* ----------------------------------------------------------- */
	/*  blog post slider for blog page
    /* ----------------------------------------------------------- */

    $(".blog-post-slider-item").owlCarousel({
         margin: 10,
         dots: false,
         nav: true,
         items: 1,
         autoplayHoverPause: true,
         mouseDrag: false,
         touchDrag:false,
         animateOut: 'fadeOut',
         navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    });

    /* ----------------------------------------------------------- */
	/*  marquee slider
	/* ----------------------------------------------------------- */
    if ($('.slick.marquee').length > 0) {
        $('.slick.marquee').slick({
            speed: 5000,
            autoplay: true,
            autoplaySpeed: 0,
            centerMode: true,
            cssEase: 'linear',
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            infinite: true,
            initialSlide: 1,
            arrows: false,
            buttons: false
        });
    }
    /* ----------------------------------------------------------- */
	/*  breking news slider
	/* ----------------------------------------------------------- */
    if ($('#breaking_slider1').length > 0) {
        $('#breaking_slider1').slick({
            speed: 10000,
            autoplay: true,
            autoplaySpeed: 0,
            centerMode: true,
            cssEase: 'linear',
            slidesToShow: 1,
            slidesToScroll: 1,
            variableWidth: true,
            infinite: true,
            initialSlide: 1,
            arrows: false,
            buttons: false
        });
    }


    /* ----------------------------------------------------------- */
	/*  Popup
	/* ----------------------------------------------------------- */

    if ($('.gallery-popup').length > 0) {
        $('.gallery-popup').magnificPopup({
            type: 'image',
            mainClass: 'mfp-with-zoom',
            zoom: {
                enabled: true, // By default it's false, so don't forget to enable it

                duration: 300, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function

                opener: function (openerElement) {
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
    }

    /* ----------------------------------------------------------- */
	/*  single post video
    /* ----------------------------------------------------------- */
    if ($('.ts-play-btn').length > 0) {
        $('.ts-play-btn').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-with-zoom',
            zoom: {
                enabled: true, // By default it's false, so don't forget to enable it

                duration: 300, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function

                opener: function (openerElement) {
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });
    }

    if ($('.ts-video-btn').length > 0) {
        $('.ts-video-btn').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-with-zoom',
            zoom: {
                enabled: true, // By default it's false, so don't forget to enable it

                duration: 300, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function

                opener: function (openerElement) {
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });

    }


    if ($('.ts-video-icon').length > 0) {
        $('.ts-video-icon').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-with-zoom',
            zoom: {
                enabled: true, // By default it's false, so don't forget to enable it

                duration: 300, // duration of the effect, in milliseconds
                easing: 'ease-in-out', // CSS transition easing function

                opener: function (openerElement) {
                    return openerElement.is('img') ? openerElement : openerElement.find('img');
                }
            }
        });

    }

    $(document).ready(function () {

        var s = $('.video-slider'),
            sWrapper = s.find('.slider-wrapper'),
            sItem = s.find('.slide'),
            btn = s.find('.slider-link'),
            sWidth = sItem.width(),
            sCount = sItem.length,
            slide_date = s.find('.slide-date'),
            slide_title = s.find('.slide-title'),
            slide_text = s.find('.slide-text'),
            slide_more = s.find('.slide-more'),
            slide_image = s.find('.slide-image img'),
            sTotalWidth = sCount * sWidth;

        sWrapper.css('width', sTotalWidth);
        sWrapper.css('width', sTotalWidth);

        var clickCount = 0;

        btn.on('click', function (e) {
            e.preventDefault();

            if ($(this).hasClass('next')) {

                (clickCount < (sCount - 1)) ? clickCount++ : clickCount = 0;
            } else if ($(this).hasClass('prev')) {

                (clickCount > 0) ? clickCount-- : (clickCount = sCount - 1);
            }
            TweenMax.to(sWrapper, 0.4, { x: '-' + (sWidth * clickCount) })


            //CONTENT ANIMATIONS

            var fromProperties = { autoAlpha: 0, x: '-50', y: '-10' };
            var toProperties = { autoAlpha: 0.8, x: '0', y: '0' };

            TweenLite.fromTo(slide_image, 1, { autoAlpha: 0, y: '40' }, { autoAlpha: 1, y: '0' });
            TweenLite.fromTo(slide_date, 0.4, fromProperties, toProperties);
            TweenLite.fromTo(slide_title, 0.6, fromProperties, toProperties);
            TweenLite.fromTo(slide_text, 0.8, fromProperties, toProperties);
            TweenLite.fromTo(slide_more, 1, fromProperties, toProperties);

        });

        $('#lightbox').append('<div class="right-comment chat-left scroll-bar theme-dark-bg"><div class="card-body ps-2 pe-4 pb-0 d-flex"> <figure class="avatar me-3"><img src="images/img2.jpg" alt="image" class="shadow-sm rounded-circle w45"></figure><h4 class="fw-700 text-grey-900 font-xssss mt-1 text-left">Hurin Seary <span class="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">2 hour ago</span></h4> <a href="#" class="ms-auto"><i class="ti-more-alt text-grey-900 btn-round-md bg-greylight font-xss"></i></a></div><div class="card-body d-flex ps-2 pe-4 pt-0 mt-0"> <a href="#" class="d-flex align-items-center fw-600 text-grey-900 lh-26 font-xssss me-3 text-dark"><i class="feather-thumbs-up text-white bg-primary-gradiant me-1 btn-round-xs font-xss"></i> <i class="feather-heart text-white bg-red-gradiant me-2 btn-round-xs font-xss"></i>2.8K Like</a> <a href="#" class="d-flex align-items-center fw-600 text-grey-900 lh-26 font-xssss text-dark"><i class="feather-message-circle text-grey-900 btn-round-sm font-lg text-dark"></i>22 Comment</a></div><div class="card w-100 border-0 shadow-none right-scroll-bar"><div class="card-body border-top-xs pt-4 pb-3 pe-4 d-block ps-5"> <figure class="avatar position-absolute left-0 ms-2 mt-1"><img src="images/img3.png" alt="image" class="shadow-sm rounded-circle w35"></figure><div class="chat p-3 bg-greylight rounded-xxl d-block text-left theme-dark-bg"><h4 class="fw-700 text-grey-900 font-xssss mt-0 mb-1">Victor Exrixon <a href="#" class="ms-auto"><i class="ti-more-alt float-right text-grey-800 font-xsss"></i></a></h4><p class="fw-500 text-grey-500 lh-20 font-xssss w-100 mt-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor.</p></div></div><div class="card-body pt-0 pb-3 pe-4 d-block ps-5"> <figure class="avatar position-absolute left-0 ms-2 mt-1"><img src="images/img4.png" alt="image" class="shadow-sm rounded-circle w35"></figure><div class="chat p-3 bg-greylight rounded-xxl d-block text-left theme-dark-bg"><h4 class="fw-700 text-grey-900 font-xssss mt-0 mb-1">Surfiya Zakir <a href="#" class="ms-auto"><i class="ti-more-alt float-right text-grey-800 font-xsss"></i></a></h4><p class="fw-500 text-grey-500 lh-20 font-xssss w-100 mt-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor.</p></div></div><div class="card-body pt-0 pb-3 pe-4 d-block ps-5 ms-5 position-relative"> <figure class="avatar position-absolute left-0 ms-2 mt-1"><img src="images/img2.jpg" alt="image" class="shadow-sm rounded-circle w35"></figure><div class="chat p-3 bg-greylight rounded-xxl d-block text-left theme-dark-bg"><h4 class="fw-700 text-grey-900 font-xssss mt-0 mb-1">Goria Coast <a href="#" class="ms-auto"><i class="ti-more-alt float-right text-grey-800 font-xsss"></i></a></h4><p class="fw-500 text-grey-500 lh-20 font-xssss w-100 mt-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div></div><div class="card-body pt-0 pb-3 pe-4 d-block ps-5 ms-5 position-relative"> <figure class="avatar position-absolute left-0 ms-2 mt-1"><img src="images/img2.jpg" alt="image" class="shadow-sm rounded-circle w35"></figure><div class="chat p-3 bg-greylight rounded-xxl d-block text-left theme-dark-bg"><h4 class="fw-700 text-grey-900 font-xssss mt-0 mb-1">Hurin Seary <a href="#" class="ms-auto"><i class="ti-more-alt float-right text-grey-800 font-xsss"></i></a></h4><p class="fw-500 text-grey-500 lh-20 font-xssss w-100 mt-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div></div><div class="card-body pt-0 pb-3 pe-4 d-block ps-5 ms-5 position-relative"> <figure class="avatar position-absolute left-0 ms-2 mt-1"><img src="images/img2.jpg" alt="image" class="shadow-sm rounded-circle w35"></figure><div class="chat p-3 bg-greylight rounded-xxl d-block text-left theme-dark-bg"><h4 class="fw-700 text-grey-900 font-xssss mt-0 mb-1">David Goria <a href="#" class="ms-auto"><i class="ti-more-alt float-right text-grey-800 font-xsss"></i></a></h4><p class="fw-500 text-grey-500 lh-20 font-xssss w-100 mt-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p></div></div><div class="card-body pt-0 pb-3 pe-4 d-block ps-5"> <figure class="avatar position-absolute left-0 ms-2 mt-1"><img src="images/img4.png" alt="image" class="shadow-sm rounded-circle w35"></figure><div class="chat p-3 bg-greylight rounded-xxl d-block text-left theme-dark-bg"><h4 class="fw-700 text-grey-900 font-xssss mt-0 mb-1">Seary Victor <a href="#" class="ms-auto"><i class="ti-more-alt float-right text-grey-800 font-xsss"></i></a></h4><p class="fw-500 text-grey-500 lh-20 font-xssss w-100 mt-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor.</p></div></div><div class="card-body pt-0 pb-3 pe-4 d-block ps-5"> <figure class="avatar position-absolute left-0 ms-2 mt-1"><img src="images/img4.png" alt="image" class="shadow-sm rounded-circle w35"></figure><div class="chat p-3 bg-greylight rounded-xxl d-block text-left theme-dark-bg"><h4 class="fw-700 text-grey-900 font-xssss mt-0 mb-1">Ana Seary <a href="#" class="ms-auto"><i class="ti-more-alt float-right text-grey-800 font-xsss"></i></a></h4><p class="fw-500 text-grey-500 lh-20 font-xssss w-100 mt-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor.</p></div></div><div class="card-body pt-0 pb-3 pe-4 d-block ps-5"> <figure class="avatar position-absolute left-0 ms-2 mt-1"><img src="images/img4.png" alt="image" class="shadow-sm rounded-circle w35"></figure><div class="chat p-3 bg-greylight rounded-xxl d-block text-left theme-dark-bg"><h4 class="fw-700 text-grey-900 font-xssss mt-0 mb-1">Studio Express <a href="#" class="ms-auto"><i class="ti-more-alt float-right text-grey-800 font-xsss"></i></a></h4><p class="fw-500 text-grey-500 lh-20 font-xssss w-100 mt-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor.</p></div> </div></div></div>');

    });


    if ($("#video-tab-scrollbar").length > 0) {
        $("#video-tab-scrollbar").mCustomScrollbar({
            mouseWheel: true,
            scrollButtons: { enable: true }
        });
    }

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
             $('#back-to-top').fadeIn();
        } else {
             $('#back-to-top').fadeOut();
        }
    });

    // scroll body to 0px on click
    $('#back-to-top').on('click', function () {
         $('#back-to-top').tooltip('hide');
         $('body,html').animate({
              scrollTop: 0
         }, 800);
         return false;
    });
    
    $('#back-to-top').tooltip('hide');
   

});

$('.menu-search-icon').on('click', function() {
    $('.app-header-search').addClass('show');
});
$('.searchbox-close').on('click', function() {
    $('.app-header-search').removeClass('show');
});
$('.chat-active-btn').on('click', function() {
    $('.right-chat').toggleClass('active-sidebar');
    $('.main-content').toggleClass('right-chat-active');
    return false;
});
$('.emoji-bttn').on('click', function() {
    $(this).parent().find('.emoji-wrap').toggleClass('active');
    return false;
  });
  $('.trade-btn').on('click', function() {
    $(this).parent().find('.trade-container').toggleClass('active');
    return false;
  });  

 // Loading Box (Preloader)
function handlePreloader() {
    if ($('.preloader').length > 0) {
        $('.preloader').delay(200).fadeOut(500);
    }
}

function PageLoad() {
  $( window ).on( "load", function() {
        setInterval(function(){ 
            $('.preloader-wrap').fadeOut(300);
        }, 400);
        setInterval(function(){ 
            $('body').addClass('loaded');
        }, 600); 
  });
}
function PageScroll() {
    $(".scroll-tiger").on("click", function(e) {
         var $anchor = $(this);
         $("html, body").stop().animate({
             scrollTop: $($anchor.attr("href")).offset().top - 0
         }, 1500, 'easeInOutExpo');
         $('.overlay-section').removeClass('active'); 
         e.preventDefault();
 
     });
 }

handlePreloader();
PageLoad();
PageScroll();

