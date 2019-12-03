$(function(){
    var player = $('._playerLayer');
    var targetId = null;

    function toggleVideo(state, id) {
        if (!id) return;

        if(state === 'hide'){
            $('#popup-youtube-player')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
            $('#popup-youtube-player').removeAttr('src');
        } else {
            $('#popup-youtube-player').attr('src', 'http://www.youtube.com/embed/'+ targetId +'?enablejsapi=1&version=3&autoplay=1&playerapiid=ytplayer');
        }
    }

    $('.menu_button').click(function(){
        $('.navigation').addClass('on');
        $('html').removeClass('nav_off');
        $('html').addClass('nav_on');
    });

    $('.btn_close').click(function(){
        $('.navigation').removeClass('on');
        $('html').removeClass('nav_on');
        $('html').addClass('nav_off');
    });

    $('._player').click(function(event) {
        event.preventDefault();
        targetId = $(this)[0].dataset.id;
        toggleVideo('show', targetId);
        player.show();
    });

    $('._close_player').click(function(event) {
        event.preventDefault();
        toggleVideo('hide', targetId);
        player.hide();
    });

    $('.my_map_content_wrap').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    $('.my_map_content_wrap').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $('.my_map_menu li').removeClass('on');
        $('.my_map_menu li:nth-child('+ (nextSlide + 1) + ')').addClass('on');
    });

    $('.my_map_menu li a').click(function (e) {
        e.preventDefault();
        var index = e.target.dataset.slideIndex;
        $('.my_map_content_wrap').slick('slickGoTo', parseInt(index));
    })

});
