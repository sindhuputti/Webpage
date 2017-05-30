(function () {
    var adjustWindow = function () {
        var fullHeight = $(document).height();
        $('#mainContainer,#primary,#secondary').css('height',fullHeight);
    };

    adjustWindow();

    $(window).resize(function () {
        adjustWindow();
    });
})();
