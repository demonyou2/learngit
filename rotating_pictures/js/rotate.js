$(function () {
    //
    var s = $('.imgs li').length;
    // for(var j = 1;j <= s){
    //     var li = "<li>" + i + "</li>"
    //     $('.bnt').append(li);
    // }
    // $('.bnt li').eq(0).addClass('active');

    var i = 0;
    $('.imgs li').eq(i).show();
    //手动轮播
    $('.bnt li').mouseenter(function () {
        $(this).siblings().removeClass().end().addClass('active');
        var index = $(this).index();
        i = index;
        $('.imgs li').eq(index).stop().fadeIn().siblings().stop().fadeOut();
   });
    //自动轮播
    var t = setInterval(movingR,2000);
    function movingR() {
        i++;
        if(i === s){
            i = 0;
        }
        $('.imgs li').eq(i).fadeIn().siblings().fadeOut();
        $('.bnt li').eq(i).addClass('active').siblings().removeClass();
    }
    function movingL() {
        i--;
        if(i === -1){
            i = s - 1;
        }
        $('.imgs li').eq(i).fadeIn().siblings().fadeOut();
        $('.bnt li').eq(i).addClass('active').siblings().removeClass();
    }
    //pre&next
    $('.pre').click(function () {
        movingL();
    });
    $('.next').click(function () {
        movingR();
    });
    //鼠标移入
    $('.u-rotate').hover(function () {
        clearInterval(t);
    },function () {
        t = setInterval(movingR,2000);
    });
});
