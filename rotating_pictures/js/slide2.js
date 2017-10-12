$(function () {
    var i = 0;
    var clone = $('.u-imgs li').first().clone();
    $('.g-body .u-imgs').append(clone);
    var size = $('.u-imgs li').length;
    for(var j = 0;j < size - 1;j++){
        $('.g-body .bnts').append("<li></li>");
    }
    $('.bnts li').first().addClass('active');
    /* rightmove */
    $('.g-body .next').click(moveR);
    function moveR() {
        i++;
        if(i === size){
            $('.g-body .u-imgs').css({left:0});
            i = 1;
        }
        $('.g-body .u-imgs').stop().animate({left:-550 * i},500);
        if(i === size - 1){
            $('.bnts li').eq(0).siblings().removeClass('active').end().addClass('active');
        }else{
            $('.bnts li').eq(i).siblings().removeClass('active').end().addClass('active');
        }
    }

    /* leftmove */
    $('.g-body .pre').click(moveL);
    function moveL() {
        i--;
        if(i === -1){
            $('.g-body .u-imgs').css({left:-550 * (size - 1)});
            i = size - 2;
        }
        $('.g-body .u-imgs').stop().animate({left:-550 * i},500);
        $('.bnts li').eq(i).siblings().removeClass('active').end().addClass('active');
    }
    /* bnts */
    $('.bnts li').hover(function () {
        var index = $(this).index();
        i = index;
        $('.g-body .u-imgs').stop().animate({left:-550 * index},500);
        $(this).siblings().removeClass('active').end().addClass('active');
    });
    /* auto */
    var t = setInterval(moveR,2000);
    $('.g-body').hover(function () {
        clearInterval(t);
    },function () {
        t = setInterval(moveR,2000);
    });
});
