$(function () {
    var swiper = new Swiper(".room-list", {
        slidesPerView: "auto",
        spaceBetween: 30,
        grabCursor: true,
        autoHeight: true,
        navigation: {
            nextEl: ".btn-next",
            prevEl: ".btn-prev",
        },
    });
    gsap.to('.sc-rooms .rooms-wrap', {
        scrollTrigger: {
            trigger: ".sc-rooms",
            start: "0% bottom",
            end: "100% 100%",
            scrub: 1,
            markers: true,
            invalidateOnRefresh: true,

        },
        xPercent: -200,
        x: function () {
            return window.innerWidth;
        }
    })
});