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
    var swiper = new Swiper('.tc-header-st4 .header-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        effect: "fade",
        centeredSlides: true,
        speed: 1500,
        pagination: {
            el: '.tc-header-st4 .swiper-pagination',
            type: 'fraction',
        },
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 6000,
        },
        loop: false,
    });

    // ------------ tc-testimonials-st4 -----------
    var swiper = new Swiper('.tc-testimonials-st4 .testi-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        // centeredSlides: true,
        speed: 1500,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: false,
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
    });


    // ------------ tc-blog-st4 -----------
    var swiper = new Swiper('.tc-blog-st4 .posts-slider', {
        // slidesPerView: 3,
        spaceBetween: 20,
        // centeredSlides: true,
        speed: 1500,
        pagination: {
            el: '.tc-blog-st4 .swiper-pagination',
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
            trigger: ".tc-video-st4",
            start: "-700 top",
            // end: "bottom bottom",
            scrub: true // Smooth scrolling effect
        }
    });

    tl1.to(".tc-video-st4 .video-card img", {
        x: 0,
        y: 0,
        scale: 1.15,
        duration: 15,
        ease: "linear",
        delay: 1
    });


});
