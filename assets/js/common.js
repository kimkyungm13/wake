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
            start: "0% 0%",
            end: "100% 100%",
            scrub: 1,
            markers: true,
            invalidateOnRefresh: true,
            onUpdate: function (self) {

                step = Math.round(self.progress * 3);

                $('.sc-rooms').attr('data-step', step + 1)

                // if(self.progress > 0.5){
                //     $('.asdas').text('')
                // }
            }
        },
        xPercent: -100,
        x: function () {
            return window.innerWidth;
        }
    })
});