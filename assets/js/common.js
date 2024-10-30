$(function () {


    // addEventListener("mousemove", (event) => {
    //     x = event.clientX;
    //     y = event.clientY;
    //     // x = e.offsetX;
    //     // y = e.offsetY;

    //     // console.log(`x:${x}--y${y}`);
    //     gsap.set('.cursor', {
    //         x: x,
    //         y: y
    //     })
    // });
    const scChargers = document.querySelector('.sc-rooms .room-list');
    const projectCursor = $('.cursor');
    // gsap.set(projectCursor, { scale: 5, autoAlpha: 0 })
    $(scChargers).mousemove(function (e) {
        x = e.clientX;
        y = e.clientY
        // $('.sc-chargers .custom-cursor').addClass('on');
        gsap.set(projectCursor, {
            // autoAlpha: 1,
            // scale: 1,
            x: x, y: y
        })
    })
    $(scChargers).mouseleave(function () {
        // $('.sc-chargers .custom-cursor').removeClass('on');
        // gsap.to(projectCursor, { scale: 5, autoAlpha: 0 })
    })


    /**main visual */
    const headTxt = new SplitType('.sc-visual .txt-wrap .txt', { types: 'words, chars', });
    gsap.from('.sc-visual .txt-wrap .txt .word .char', {
        autoAlpha: 0,
        stagger: 0.02,
        yPercent: 50,
        delay: 0.8
        // duration: 0.5
    })

    /**sc-about */
    ScrollTrigger.create({
        trigger: '.sc-about',
        start: '0 70%',
        end: '100% 100%',
        markers: true,
        onEnter: function () {
            gsap.to('.sc-about .desc p', { autoAlpha: 1, yPercent: -100 })
        }
    },)


    var roomSlide = new Swiper(".room-list", {
        // slidesPerView: "auto",
        spaceBetween: 30,
        slidesPerView: 1.5,
        grabCursor: true,
        autoHeight: true,
        watchOverflow: true,
        // slideVisibleClass:'swiper-slide-visible',
        watchSlidesProgress: true,
        navigation: {
            nextEl: ".btn-next",
            prevEl: ".btn-prev",
        },
    });

    roomSlide.on('touchMove', function (e) {
        $('.cursor .over').removeClass('active')
        $('.cursor .on').addClass('active')
        // console.log(document);

    })
    roomSlide.on('touchEnd', function () {
        $('.cursor .over').addClass('active');
        $('.cursor .on').removeClass('active')
    })




    // $(document).mousemove(function(e){

    // })




    gsap.to('.sc-rooms .rooms-wrap', {
        scrollTrigger: {
            trigger: ".sc-rooms",
            start: "0% bottom",
            end: "100% 100%",
            scrub: 1,
            // markers: true,
            invalidateOnRefresh: true,

        },
        xPercent: 100,
        // x: function () {
        //     return window.innerWidth;
        // }
    })
});