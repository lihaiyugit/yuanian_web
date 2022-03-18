$(function(){
    var swiper = new Swiper(".mySwiper", {
        cssMode: true,
        navigation: {
            prevEl: ".swiper-button-left",
            nextEl: ".swiper-button-right",
        },
        pagination: {
            el: ".swiper-Psagination",
        },
        mousewheel: true,
        keyboard: true,
    });
    var swiper = new Swiper(".cpys_swiper", {
        cssMode: true,
        navigation: {
            prevEl: ".swiper-button-left",
            nextEl: ".swiper-button-right",
        },
        pagination: {
            el: ".swiper-pagination",
        },
        mousewheel: true,
        keyboard: true,
    });
    // 产品优势
    $('.advantage_main dl').mouseenter(function (index) {
        //通过 .index()方法获取元素下标，从0开始，赋值给某个变量
        $(this).addClass('active').siblings().removeClass('active');
    });

})