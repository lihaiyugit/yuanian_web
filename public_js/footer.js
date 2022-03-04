$(document).ready(function () {
    // toolbar 展示控制
    $('.submit-toolbar-show-btn').click(function () {
        $(".submit-modal-body .submit-toolbar-wrapper").css("right", "0");

    })

    $('.submit-toolbar-close').click(function () {
        $(".submit-modal-body .submit-toolbar-wrapper").css("right", "100%");
    })
});