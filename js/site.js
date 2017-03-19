function step1() {
    setTimeout(step2, 2000);
}

function step2() {

    $("#page1").animate({
        width: "50vw"
    }, {
        duration: 1000,
        complete: step3
    });
    $("#page2")
        .animate({ left: "50vw" }, 1000)
        .animate({ height: "50vh" }, 1000)
        .animate({ height: "33.33vh" }, 1000);

}

function step3() {

    $("#page3").animate({ top: "50vh" }, 1000, step4)
        .animate({ top: "33.33vh", height: "33.33vh" }, 1000);



}

function step4() {
    $("#page4").animate({
        width: "50vw",
        top: "66.66vh"
    }, 1000);
}

$(document).ready(function() {
    step1();
    $("#icon-menu-page").hide();

    $('.menu').click(function() {
        $(this).toggleClass('open');
        $("#icon-menu-page").fadeToggle();
    });
});