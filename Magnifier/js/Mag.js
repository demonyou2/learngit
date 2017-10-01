(function () {
    var log = console.log.bind(console);
    window.onload = function () {
        var picsmall = document.querySelector('.Pic-small');
        var mags = document.getElementsByTagName('img');
        var sp = document.querySelector('.magnifier');
        var picbig = document.querySelector('.Pic-big');
        picsmall.addEventListener('mouseover',function () {
            sp.style.display = "block";
            picbig.style.display = "block";
        },false);
        picsmall.addEventListener('mouseout',function () {
            sp.style.display = "none";
            picbig.style.display = "none";
        },false);
        picsmall.addEventListener('mousemove',function (event) {
            var left = event.clientX - picsmall.offsetLeft - (sp.offsetWidth / 2);
            var top = event.clientY - picsmall.offsetTop - (sp.offsetHeight / 2);
            if(left < 0){
                left = 0;
            }else if(left + sp.offsetWidth > picsmall.offsetWidth){
                left = picsmall.offsetWidth - sp.offsetWidth;
            }
            if(top < 0){
                top = 0;
            }else if(top + sp.offsetHeight > picsmall.offsetHeight){
                top = picsmall.offsetHeight - sp.offsetHeight;
            }
            sp.style.left = left + 'px';
            sp.style.top = top + 'px';
            mags[1].style.left = - (picbig.offsetWidth / sp.offsetWidth) * sp.offsetLeft + 'px';
            mags[1].style.top = - (picbig.offsetHeight / sp.offsetHeight) * sp.offsetTop + 'px';
            log(sp.offsetLeft);
        },false);
    }
})()