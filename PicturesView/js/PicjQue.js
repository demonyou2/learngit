$(document).ready(function () {
    var x = 20;
    var y = 0;
    $('a.season').mouseover(function (event) {
        this.mytitle = this.title;
        this.title = "";
        var imgTitle = this.mytitle ? "<br/>" + this.mytitle : "";
        var div = "<div id='view'>" + "<img src = '" + this.href + "'\/>" + imgTitle + "</div>";
        $("body").append(div);
        $('#view').css({
            "top" : (event.pageY + y) + "px",
            "left" : (event.pageX + x) + "px"
        }).show("fast");
    }).mouseout(function () {
        this.title = this.mytitle;
        $('#view').remove();
    }).mousemove(function (event) {
        $('#view').css({
            "top" : (event.pageY + y) + "px",
            "left" : (event.pageX + x) + "px"
        });
    });
});