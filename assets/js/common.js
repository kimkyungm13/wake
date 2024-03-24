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
});