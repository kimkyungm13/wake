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
    // const projectCursor = $('.cursor');
    // // gsap.set(projectCursor, { scale: 5, autoAlpha: 0 })
    // $(scChargers).mousemove(function (e) {
    //     x = e.clientX;
    //     y = e.clientY
    //     // $('.sc-chargers .custom-cursor').addClass('on');
    //     gsap.set(projectCursor, {
    //         // autoAlpha: 1,
    //         // scale: 1,
    //         x: x,
    //          y: y
    //     })
    // })
    // $(scChargers).mouseleave(function () {
    //     // $('.sc-chargers .custom-cursor').removeClass('on');
    //     // gsap.to(projectCursor, { scale: 5, autoAlpha: 0 })
    // })


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

    // roomSlide.on('touchMove', function (e) {
    //     $('.cursor .over').removeClass('active')
    //     $('.cursor .on').addClass('active')
    //     let x = roomSlide.touches.currentX;
    //     let y = roomSlide.touches.currentY;

    //     console.log(x);
    //     console.log(y);

    // gsap.set(projectCursor, {
    //     x: x,
    //     // y: y
    // });

    // console.log(x);
    // console.log(y);

    // gsap.set(projectCursor, {
    //     x: x,
    //     y: y
    // });



    // })
    // roomSlide.on('touchEnd', function () {
    //     $('.cursor .over').addClass('active');
    //     $('.cursor .on').removeClass('active')
    // })




    const cursor = document.querySelector(".cursor");
    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };
    const speed = 1;

    const xSet = gsap.quickSetter(cursor, "x", "px");
    const ySet = gsap.quickSetter(cursor, "y", "px");

    window.addEventListener("pointermove", e => {
        console.log(e);
        mouse.x = e.x;
        mouse.y = e.y;
        const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
        pos.x += (mouse.x - pos.x) * dt;
        pos.y += (mouse.y - pos.y) * dt;
        xSet(pos.x);
        ySet(pos.y);
    });

    // gsap.set(".cursor", {xPercent: -50, yPercent: -50});
    // gsap.ticker.add(() => {

    // });











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