'use strict';

$(function () {

    // NOTE: IE를 제외한 브라우저에서 Autoplay가 정상적으로 발생하지 않아 추가 한 코드
    var agent = navigator.userAgent.toLowerCase();
    if (!(navigator.appName == 'Netscape' && agent.indexOf('trident') != -1 || agent.indexOf("msie") != -1)) {
        var iframe = document.createElement('iframe');
        iframe.src = '../audio/silence.mp3';
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
    }

    var smallLogoScrollTop = 100;
    var whiteHeaderOffsetTop = $('#content2').offset().top;
    var whiteHeaderOffsetBottom = whiteHeaderOffsetTop + $('#content2').outerHeight();
    var activeIntroduceMap = {
        'synopsis_section': { count: 2 },
        'character_section': { count: 5 },
        'dragon_section': { count: 7 },
        'colleague_section': { count: 8 }
    };

    var introduceIndex = 1;
    var showIntroduceSection = 'synopsis_section';
    var audio = $('#backgroundAudio')[0];
    var ignoredBackgroundAudio = false;

    $('#backgroundAudio').bind("ended", function () {
        audio.load();
        audio.play();
    });

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

    $(window).scroll(function (e) {
        e.preventDefault();
        onScroll();
    });

    $(window).resize(function () {
        whiteHeaderOffsetTop = $('#content2').offset().top;
        whiteHeaderOffsetBottom = whiteHeaderOffsetTop + $('#content2').outerHeight();
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
        audio.pause();
    });

    $('#movie_layer .btn_pop_close').click(function (e) {
        $('#movie_layer').removeClass('active');
        $('#movie_layer iframe').each(function () {
            this.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
        });

        if (!ignoredBackgroundAudio) {
            audio.play();
        }
    });

    $('.content4 .btn_play').click(function (e) {
        $('#movie_layer2').addClass('active');
        audio.pause();
    });

    $('#movie_layer2 .btn_pop_close').click(function (e) {
        $('#movie_layer2').removeClass('active');
        $('#movie_layer2 iframe').each(function () {
            this.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
        });

        if (!ignoredBackgroundAudio) {
            audio.play();
        }
    });

    $('.btn_sound').click(function (e) {
        e.preventDefault();

        if (audio.paused === false) {
            audio.pause();
            $(this).removeClass('active');
            ignoredBackgroundAudio = true;
        } else {
            audio.play();
            $(this).addClass('active');
            ignoredBackgroundAudio = false;
        }
    });

    $('.btn_sound').toggleClass('active', audio.paused);

    function showIntroduce(index) {
        introduceIndex = index;

        $('.img_wrap li').removeClass('active');

        if (showIntroduceSection === 'synopsis_section') {
            $('#synopsis_section').toggleClass('next', index > 1);
            $('#img_synopsis').addClass('active');
        } else {
            var prefixClassName = showIntroduceSection.split('_')[0];
            $('#' + showIntroduceSection).attr('class', prefixClassName + '_section active ' + prefixClassName + index);
            $('#img_' + prefixClassName + index).addClass('active');
        }
    }

    function onScroll() {
        changeSmallLogo($(window).scrollTop());
        changeWhiteHeader($(window).scrollTop());
        changeWhiteIndicator($(window).scrollTop() + 300);
        setIndicator($(window).scrollTop());
    }

    function changeSmallLogo(scrollTop) {
        $('header .bi').toggleClass('zoom', smallLogoScrollTop < scrollTop);
    }

    function changeWhiteHeader(scrollTop) {
        $('header').toggleClass('white', whiteHeaderOffsetTop <= scrollTop && whiteHeaderOffsetBottom > scrollTop);
    }

    function changeWhiteIndicator(scrollTop) {
        $('.indicator_area').toggleClass('v2', whiteHeaderOffsetTop <= scrollTop && whiteHeaderOffsetBottom > scrollTop);
    }

    function setIndicator(scrollTop) {
        var sectionCount = 5;
        var sectionHeight = $('.main').outerHeight();
        var i = 4;
        var bufferSize = sectionHeight * 0.3;

        while (i < sectionCount) {
            if (scrollTop >= sectionHeight * i - bufferSize) {
                break;
            }

            --i;
        }

        $('.indicator a').removeClass('active');
        $('.indicator li:nth-child(' + (i + 1) + ') a').addClass('active');
    }
});