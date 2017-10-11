$(function () {
   // $('.u-banner li img').click(function () {
   //     console.log("ok");
   // });
    /* 不再提示 */
    $('.u-close').click(function () {
        $('.g-inform').hide();
    });
    /* 轮播图开始 */
    var i = 0;
    $('.u-banner li').eq(i).show();
    //手动
    $('.banner-bnt span').click(function () {
        $(this).siblings().removeClass().end().addClass('active');
        var index = $(this).index();
        i = index;
        $('.u-banner li').eq(index).siblings().fadeOut().end().fadeIn();
    });
    //右移
    function moveR() {
        i++;
        if(i === 3){
            i = 0;
        }
        $('.u-banner li').eq(i).siblings().fadeOut().end().fadeIn();
        $('.banner-bnt span').eq(i).siblings().removeClass().end().addClass('active');
    }
    //自动轮播
    var t = setInterval(moveR,2000);

    $('.g-banner').hover(function () {
        clearInterval(t);
    },function () {
        t = setInterval(moveR,2000);
    });
    /* 轮播图结束 */
    /* 关注注册 */
    $('.u-attention').click(function () {
        $('.moda').show();
        $('.u-signup').show();
    });
    $('.u-signup > i').click(function () {
        $('.moda').hide();
        $('.u-signup').hide();
    });
    $('.u-signup .cancel').click(function () {
        $('.moda').hide();
        $('.u-signup').hide();
    });
    $('.u-signup .right').click(function () {
        $('.moda').hide();
        $('.u-signup').hide();
    });
    /* 页码 */
    var j = 0;
    $('.pages .pagenumber li').eq(j).addClass('p-active');
    for(j = 0;j < 9;j++){
        $('.pages .pagenumber li').eq(j).click(function () {
            $(this).siblings().removeClass().end().addClass('p-active');
        });
    }
});