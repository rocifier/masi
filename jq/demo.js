$(function() {

    $("input").click(function() {
        $get("heaven.html?url=163", function(response, status, xhr) {
            $("#box").html(response);

        });
    });

});
$(document).ajaxStart(function() {

    $(loading).show();

})

function changeBG(el, clr) {
    var elem = document.getElementById(el);
    elem.style.transition = "background 1.0s ease-in 0s";
    elem.style.background = clr;
}