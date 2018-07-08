
$(document).ready(function () {
    var correctAnsr = 0;
    var falseAnsr = 0;
    // var seconds;
    // var intervalId;

    // function setTime() {
    //     clearInterval(intervalId);
    //     intervalId = setInterval(runTime, 1000);



    // }
    // function runTime() {


    //     $(".timer").text("You have " + seconds + " seconds left");

    //     seconds--;

    // }



    $(".holder").hide();
    $("h1").on("click", function () {

        $("h1").hide();
        $(".holder").show();
        $(".question").hide();
        $(".visible").show();

        var seconds = 15;
        var thisVar = $(this).next().children();
        console.log(thisVar);

        function runTime() {
            $(".timer").text("You have " + seconds + " seconds left");

            seconds--;
            if (seconds < 0) {

                $(".timer").text("Time is up!");
                seconds = 15;
                thisVar.next().show();
                
            }

        }

        runTime();
        setInterval(runTime, 1000);

        $("li").on("click", function () {


            if ($(this).hasClass("right")) {

                alert("right");
                $(this).parent().parent().next().show();
                $(this).parent().parent().hide();
            }

            else {

                alert("wrong")
                $(this).parent().parent().next().show();
                $(this).parent().parent().hide();
            }



        }); // end of li 
    });

    // we need to use timeout to delay something 
    // we need to use setinterval for timer if it reaches zero, start again



    // function nextQuestion() {


    // }

}); // end of doc ready