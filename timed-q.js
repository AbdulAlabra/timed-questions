

$(document).ready(function () {
    var correctAnsr = 0;
    var falseAnsr = 0;
    var totalQuestion = 5;
    var intervalId;
    var currentQuestion;
    var questionClicked = false;
    var currentLi;
    var secondsForQuestion = 5;
    var secondsForAnswer = 5;
    var timeOut = 0;

    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(setTime, 1000);
    }


    function setTime() {
        //this whole function will run every sec..


        $(".timer").text("You have " + secondsForQuestion + " seconds left");
        // $("li").css("background-color", "wheat");
        // $("li").css("color", "black");
        //this starts counting for the question. 
        secondsForQuestion--;

        //when the time for the question is 0 this will execute
        if (secondsForQuestion < 0 && questionClicked === false) {

            //this if statement is designed to be excuted between each question for 5 sec. 

            $(".timer").text("Time is Up");
            $("li").css("background-color", "rgb(255, 76, 44)");
            $(".right").css("background-color", "rgb(167, 247, 62)");
            $(".right").css("color", "white");

            //this will count time between each question.
            secondsForAnswer--;

            if (timeOut === 0) {
                //this will make sure that if you did not click anything, it will increase the number of wrong answers. 
                falseAnsr++;
                timeOut++;
            }

            if ($(currentLi).hasClass("right") === true) {
                //if you chose the right answer, this if statement will hold the pic for the right answer for 5 sec. that's why it's placed inside the "if (secondsForQuestion < 0 && questionClicked === false)". 
                $(".timer").text("You Are Right!");
                $("li").hide();
                $(".timer").append("</br> <img src='https://img.clipartxtras.com/f0ef4687d11959c4dce7b7414d5cec07_correct-answer-clip-art-clip-art-library-correct-answer-clipart_600-176.png'/>");
                console.log(currentQuestion);
            }

            else {
                //this will do the exact samething as choosing the right answer, except this one will be for the wrong answer. 
                $(".timer").text("You missed it!");
                $(".timer").append("</br> <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSdhaS3sW2os6ofT6qAIqDi2FjNPhweU5SPchAhiotZu-opKB87A'/>");
                $("li").hide();
            }
        }

        if (secondsForAnswer < 0 && questionClicked === false) {
            //this will go from the current question to the nexr one and sets everything back to it's normal value.  
            currentQuestion.hide().next().show();
            currentQuestion = currentQuestion.next();
            secondsForQuestion = 5;
            secondsForAnswer = 5;
            timeOut = 0;
            currentLi = currentQuestion;

            $(".timer").text("You have seconds left");
            $("li").css("background-color", "wheat");
            $("li").css("color", "black");
            $("li").show();

            //clear grades 
            $(".rightAnsr").text("");
            $(".wrongAnsr").text("");
            $(".grade").text("");

            if (currentQuestion.hasClass("result")) {
                //this will be exexuted only after the last question which will show you the result you have
                $("h1").show();
                $(".rightAnsr").text(correctAnsr);
                $(".wrongAnsr").text(falseAnsr);
                $(".grade").text(correctAnsr / totalQuestion * 100 + "%");
                clearInterval(intervalId);
            }
        }
        //this will check if the option you chose is right or not. 
        if (currentLi.hasClass("right") && questionClicked === true) {
            //if it's right then this will happen
            //we are forcing the function to go to line 24 so that we can have the 5 sec between the questions by setting "secondsForQuestion = 0 and also can see the pic for 5 sec "
            $(".timer").text("You Are Right!");
            $(currentLi).css("background-color", "rgb(167, 247, 62)");
            secondsForQuestion = 0;
            correctAnsr++;
            questionClicked = false;
            timeOut = 1;
        }

        if (currentLi.hasClass("right") === false && questionClicked === true) {
            // this if statement will do the samething as 67 except that it's for the wrong answer. 
            $(".timer").text("You Are Wrong!");
            $(".right").css("background-color", "rgb(167, 247, 62)")

            //forcing the function to go to line 24.  
            timeOut = 1;
            secondsForQuestion = 0;
            falseAnsr++;
            questionClicked = false;
        }
    } //end of setTime function

    //execution starts here
    $(".question").hide();

    $("h1").on("click", function () {
        $(".question").hide();
        $("h1").hide();
        $(".one").show();
        run();
        correctAnsr = 0;
        falseAnsr = 0;
        currentQuestion = $(this).next();

    });
    $("li").on("click", function () {
        questionClicked = true;
        currentLi = $(this);
        secondsForQuestion = 0;

    });

});// end of doc 



