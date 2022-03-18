var banOffTop = $(".tabber").offset().top;//获取tab栏距离顶部的垂直距离
var Y = 0.05; //宽度放大比例
var X = 0.01;//行高放大比例
var scTop = 0;//初始化垂直滚动的距离 当前和顶部的距离
$(document).scroll(function () {
    scTop = $(this).scrollTop();//获取到滚动条拉动的距离
    if (scTop >= banOffTop) {
        //核心部分：当滚动条拉动的距离大于等于导航栏距离顶部的距离时，添加指定的样式
        $(".tabber").css({
            "position": "fixed",
            "top": "0",
            "left": "0",
            "width": "100%",
            "height": "60px",
            "line-height": "60px",
        });
    } else {
        $(".tabber").css({
            "width": `${(78 + Y * scTop)}%`,
            "height": `${(56 + X * scTop)}px`,
            "line-height": `${(56 + X * scTop)}px`,
            "position": "static",
        });
    }
})