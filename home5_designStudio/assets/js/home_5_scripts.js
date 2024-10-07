$(function () {

    // ------------ team images width same height -----------
    // var images = $(".tc-team-style1 .team-card .img, .img_sm_h");
    // images.each(function () {
    //   var width = $(this).width();
    //   $(this).height(width);
    // });


});


// ------------ swiper sliders -----------
$(document).ready(function () {

    // ------------ tc-header-slider1 -----------
    var swiper = new Swiper('.tc-capabilities-st5 .capabilities-slider', {
        slidesPerView: 5,
        spaceBetween: 30,
        // centeredSlides: true,
        speed: 1500,
        pagination: false,
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 6000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 2.8,
            }
        }
    });


    // ------------ tc-portfolio-st5 -----------
    var swiper = new Swiper('.tc-portfolio-st5 .project-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        // centeredSlides: true,
        speed: 1500,
        effect: 'fade',
        pagination: {
            el: '.project-slider .swiper-pagination',
            type: 'fraction',
          },
        navigation: {
            nextEl: '.project-slider .swiper-button-next',
            prevEl: '.project-slider .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: false,
    });


    // ------------ tc-testimonials-st5 -----------
    var swiper = new Swiper('.tc-testimonials-st5 .testi-slider', {
        // slidesPerView: 3,
        spaceBetween: 20,
        // centeredSlides: true,
        speed: 1500,
        pagination: {
            el: '.tc-testimonials-st5 .swiper-pagination',
            clickable: true,
        },
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 1,
            },
            787: {
                slidesPerView: 2,
            },
            991: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });


    // ------------ blog slider -----------
    var swiper = new Swiper('.tc-blog-st5 .posts-slider', {
        slidesPerView: 3,
        spaceBetween: 20,
        centeredSlides: true,
        speed: 1500,
        pagination: {
            el: '.tc-blog-st5 .swiper-pagination',
            clickable: true,
        },
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });


});



// ------------ gsap scripts -----------
$(function () {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

    // create the smooth scroller FIRST!
    const smoother = ScrollSmoother.create({
        content: "#scrollsmoother-container",
        smooth: 1.5,
        normalizeScroll: true,
        ignoreMobileResize: true,
        effects: true,
        //preventDefault: true,
        //ease: 'power4.out',
        //smoothTouch: 0.1, 
    });

    // -------
    const tl1 = gsap.timeline({
        scrollTrigger: {
            trigger: ".tc-video-st5",
            start: "-700 top",
            // end: "bottom bottom",
            scrub: true // Smooth scrolling effect
        }
    });

    tl1.to(".tc-video-st5 .video-card img", {
        x: 0,
        y: 0,
        scale: 1.15,
        duration: 15,
        ease: "linear",
        delay: 1
    });


});
