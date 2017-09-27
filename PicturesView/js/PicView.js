(function () {
    var a = ["立秋","大寒","小寒","小雪"];
    var log = console.log.bind(console);
    window.onload = function () {
        var imgs = document.getElementsByTagName('img');
        var lis = document.getElementsByTagName('li');
        var img = document.querySelector('.view');
        var div = document.querySelector('.viewDiv');
        var p = document.querySelector('.viewTitle');
        for(var i = 0;i < imgs.length;i++){
            imgs[i].addEventListener('mouseover',function (event) {
                log(this.getAttribute('index'));
                img.src = this.src;
                p.innerText = a[this.getAttribute('index')];
                div.style.display = "block";
                div.style.left = event.clientX + 20 + 'px';
                div.style.top = event.clientY + 50 + 'px';
            },false);
            imgs[i].addEventListener('mouseout',function (event) {
                div.style.display = "none";
            },false);
            imgs[i].addEventListener('mousemove',function () {
                div.style.left = event.clientX + 20 + 'px';
                div.style.top = event.clientY + 50 + 'px';
            },false);
        }

    }
})()