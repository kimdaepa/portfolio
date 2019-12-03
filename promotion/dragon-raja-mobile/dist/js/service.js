'use strict';

$(function () {
    var activeIntroduceMap = {
        'synopsis_section': { count: 3 },
        'character_section': { count: 5 },
        'dragon_section': { count: 7 },
        'colleague_section': { count: 8 }
    };

    var introduceIndex = 1;
    var showIntroduceSection = 'synopsis_section';

    $('.bi a').click(function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 500);
    });

    $('.snb a, .indicator a').click(function (e) {
        e.preventDefault();
        var target = e.target.href.split('#')[1];
        var offsetTop = target !== 'top' ? $('#' + target).offset().top : 0;
        $('html, body').animate({ scrollTop: offsetTop }, 500);
    });

    $('.card_list a').click(function (e) {
        e.preventDefault();

        var target = e.target.href.split('#')[1];
        $('.card_list .item').removeClass('active');
        $('.info_content > div').removeClass('active');
        $('#' + target).addClass('active');
        $(this).parent('.item').addClass('active');
        showIntroduceSection = target;
        introduceIndex = 1;
        showIntroduce(introduceIndex);
    });

    $('.btn_prev').click(function (e) {
        e.preventDefault();

        --introduceIndex;

        if (introduceIndex < 1) {
            introduceIndex = activeIntroduceMap[showIntroduceSection].count;
        }

        showIntroduce(introduceIndex);
    });

    $('.btn_next').click(function (e) {
        e.preventDefault();

        ++introduceIndex;

        if (introduceIndex > activeIntroduceMap[showIntroduceSection].count) {
            introduceIndex = 1;
        }

        showIntroduce(introduceIndex);
    });

    $('.menu_list a').click(function (e) {
        e.preventDefault();
        showIntroduce(e.target.dataset.index);
    });

    $('.main .btn_play').click(function (e) {
        $('#movie_layer').addClass('active');
        $.scrollLock(true);
    });

    $('#movie_layer .btn_pop_close').click(function (e) {
        $('#movie_layer').removeClass('active');
        $.scrollLock(false);
        $('#movie_layer iframe').each(function () {
            this.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
        });
    });

    $('.content4 .btn_play').click(function (e) {
        $('#movie_layer2').addClass('active');
        $.scrollLock(true);
    });

    $('#movie_layer2 .btn_pop_close').click(function (e) {
        $('#movie_layer2').removeClass('active');
        $.scrollLock(false);
        $('#movie_layer2 iframe').each(function () {
            this.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
        });
    });

    function showIntroduce(index) {
        introduceIndex = index;

        $('.img_wrap li').removeClass('active');

        if (showIntroduceSection === 'synopsis_section') {
            $('#synopsis_section').removeClass('next1 next2');

            if (index > 1) {
                $('#synopsis_section').addClass('next' + (index - 1));
            }

            $('#img_synopsis').addClass('active');
        } else {
            var prefixClassName = showIntroduceSection.split('_')[0];
            $('#' + showIntroduceSection).attr('class', prefixClassName + '_section active ' + prefixClassName + index);
            $('#img_' + prefixClassName + index).addClass('active');
        }
    }

    $(window).scroll(function (e) {
        e.preventDefault();
        changeSmallLogo($(window).scrollTop());
    });

    function changeSmallLogo(scrollTop) {
        if ($('.popup_wrap').hasClass('active')) return;
        $('header').toggleClass('ver2', 0 < scrollTop);
    }

    changeSmallLogo($(window).scrollTop());

    $('.btn_gnb').click(function (e) {
        e.preventDefault();
        $('.gnb_area').addClass('active');
        $.scrollLock(true);
    });

    $('.gnb_area .btn_close').click(function (e) {
        e.preventDefault();
        $('.gnb_area').removeClass('active');
        $.scrollLock(false);
    });

    $('.gnb_area a').click(function (e) {
        e.preventDefault();
        $.scrollLock(false);
        var target = e.target.href.split('#')[1];
        var offsetTop = target !== 'top' ? $('#' + target).offset().top - 49 : 0;
        $('html, body').animate({ scrollTop: offsetTop }, 500);
        $('.gnb_area').removeClass('active');
    });

    $('.btn_top').click(function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 500);
    });

    $("#eventSlider").touchSlider({ controls: false, roll: false, page: 4 });
});

// Plugin
$.scrollLock = function scrollLockClosure() {
    'use strict';

    var $html = $('html'),

    // State: scroll to revert to
    prevScroll = {
        scrollLeft: $(window).scrollLeft(),
        scrollTop: $(window).scrollTop()
    },

    // State: styles to revert to
    prevStyles = {},
        lockStyles = {
        'overflow-y': 'scroll',
        'position': 'fixed',
        'width': '100%'
    };

    // Instantiate cache in case someone tries to unlock before locking
    saveStyles();

    // Save context's inline styles in cache
    function saveStyles() {
        var styleAttr = $html.attr('style'),
            styleStrs = [],
            styleHash = {};

        if (!styleAttr) {
            return;
        }

        styleStrs = styleAttr.split(/;\s/);

        $.each(styleStrs, function serializeStyleProp(styleString) {
            if (!styleString) {
                return;
            }

            var keyValue = styleString.split(/\s:\s/);

            if (keyValue.length < 2) {
                return;
            }

            styleHash[keyValue[0]] = keyValue[1];
        });

        $.extend(prevStyles, styleHash);
    }

    function lock() {
        var appliedLock = {};

        // Save scroll state...
        prevScroll = {
            scrollLeft: $(window).scrollLeft(),
            scrollTop: $(window).scrollTop()
        };

        // ...and styles
        saveStyles();

        // Compose our applied CSS
        $.extend(appliedLock, lockStyles, {
            // And apply scroll state as styles
            'left': -prevScroll.scrollLeft + 'px',
            'top': -prevScroll.scrollTop + 'px'
        });

        // Then lock scroll state...
        $(window).scrollLeft(0).scrollTop(0);

        // ...and styles
        $html.css(appliedLock);
    }

    function unlock() {
        // Revert styles
        $html.attr('style', $('<x>').css(prevStyles).attr('style') || '');

        // Revert scroll values
        $.each(prevScroll, function revertScrollAxis(axis, value) {
            $(window)[axis](value);
        });
    }

    return function scrollLock(on) {
        if (on) {
            lock();
        } else {
            unlock();
        }
    };
}();