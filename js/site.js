$(document).ready(function() {
    // step 1
    setTimeout(function() {
        $("#block1").animate({
            // step 2
            width: "50vw"
        }, {
            duration: 1000,
            complete: function() {

                // step 3
                $("#block3").animate({
                    top: "50vh"
                }, {
                    duration: 1000,
                    complete: function() {

                    }
                });
                $("#block2").animate({
                    height: "50vh"
                }, {
                    duration: 1000,
                    complete: function() {

                    }
                });
            }
        });
        $("#block2").animate({
            left: "50vw"

        }, { duration: 1000 });

    }, 2000);


})