(function ($) {
    $.fn.stickyNav = function (options) {
        var settings = $.extend({
            hgt: 205
        }, options);

        return this.each(function () {
            var stickyNavTop = settings.hgt;

            $(window).scroll(function () {
                var scrollTop = $(window).scrollTop();

                if (stickyNavTop < scrollTop) {
                    $('.sticky-nav').addClass('sticky-nav-scroll');
                } else {
                    $('.sticky-nav').removeClass('sticky-nav-scroll');
                }
            });
        });
    }
})(jQuery);