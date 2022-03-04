$(document).ready(function () {
    // toolbar 展示控制
    $('.submit-toolbar-show-btn').click(function () {
        $(".submit-modal-body .submit-toolbar-wrapper").css("right", "0");

    })

    $('.submit-toolbar-close').click(function () {
        $(".submit-modal-body .submit-toolbar-wrapper").css("right", "100%");
    })
    $(window).scroll(function () {
        var tool_bar_height = $(document).height() - 300;
    // console.log(tool_bar_height);
        if ($(window).scrollTop() >= $(document).height() - $(window).height() - 500) {
            $(".submit-modal-body .submit-toolbar-wrapper").css("position", "static");

            $(".submit-modal-body .submit-toolbar-wrapper .submit-toolbar .submit-toolbar-close").css("display", "none");
        }
        else if ($(window).scrollTop() <= $(document).height() - $(window).height() - 500) {
            $(".submit-modal-body .submit-toolbar-wrapper").css("position", "fixed");

            $(".submit-modal-body .submit-toolbar-wrapper .submit-toolbar .submit-toolbar-close").css("display", "inline-block");
        }

    });
});