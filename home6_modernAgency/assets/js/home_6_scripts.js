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

    // ------------ tc-testimonials-st6 -----------
    var swiper = new Swiper('.tc-testimonials-st6 .testi-slider', {
        // slidesPerView: 3,
        spaceBetween: 20,
        // centeredSlides: true,
        speed: 1500,
        pagination: {
            el: '.tc-testimonials-st6 .swiper-pagination',
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
                slidesPerView: 2,
            }
        }
    });

    // ------------ blog slider -----------
    var swiper = new Swiper('.tc-blog-st6 .posts-slider', {
        slidesPerView: 3,
        spaceBetween: 20,
        centeredSlides: true,
        speed: 1500,
        pagination: {
            el: '.tc-blog-st6 .swiper-pagination',
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
    const workCards = document.querySelectorAll(".tc-portfolio-st6 .project-card");

    workCards.forEach((workCard, index) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: workCard,
                start: "-700 top",
                scrub: true // Smooth scrolling effect
            }
        });

        tl.to(workCard.querySelector("img"), {
            x: 0,
            y: 0,
            scale: 1.2,
            duration: 15,
            ease: "linear",
            delay: 1
        });
    });


});
