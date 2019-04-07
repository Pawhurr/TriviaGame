$(document).ready(function () {

    var time = 31;
    var interTime = 5;
    var numRight = 0;
    var numWrong = 0;
    var numUnanswered = 0;
    var counter = 0;
    var imageYes = -1;
    var imageNo = -1;
    var intervalId;
    var yesImages = ["pamYup.gif", "dwightYES.gif", "andy.gif", "perfectenschlag.gif", "jimUniverse.gif", "dwightArmsUp.gif", "erinYeah.gif", "raisetheroof.gif", "jimThisGuy.gif", "michaelOkay.gif"];
    var noImages = ["michaelNO.gif", "angelaBandit.gif", "kevinEmotional.gif", "unbelievable.gif", "michaelWorst.gif", "michaelNO.gif", "angelaBandit.gif", "kevinEmotional.gif", "unbelievable.gif", "michaelWorst.gif"];
    var questions = ["1. 'Bears.  Beets...'",
        "2. What is the name of Michael Scott's screenplay?",
        "3. Toby went to this country only to break his neck shortly after arriving there.",
        "4. What is Andy's nickname for Jim?",
        "5. Where did Jim propose to Pam?",
        "6. What was the name of the school children that Michael promised college scholarships?",
        "7. Jim put this office item of Dwight's into Jell-O.",
        "8. According to Creed Bratton, the last person to steal from him disappeared.  That person's name:",
        "9. What was the name of Angela's cat that Dwight stuck in the freezer?",
        "10. At the end of the opening credits, what is Michael adjusting on his desk?"
    ];
    var answers1 = ["'Battlestar Galactica'", "'Boba Fett'", "'Barney Fife'", "'Binary code.'"];
    var answers2 = ["Paper Cuts", "Threat Level: Midnight", "The Life and Times of Michael Scott", "Somehow I Manage"];
    var answers3 = ["Costa Rica", "Puerto Rico", "Honduras", "Guatemala"];
    var answers4 = ["Jimmy Two Tones", "Monkey", "Bubs", "Tuna"];
    var answers5 = ["The company softball game", "A rest stop", "Niagara Falls", "In the office"];
    var answers6 = ["Mike's Tikes", "Michael's Children", "Scott's Tots", "The Scott Kids Foundation"];
    var answers7 = ["Notebook", "Tape dispenser", "Stapler", "Telephone"];
    var answers8 = ["Todd Packer", "Creed Bratton", "Oscar Martinez", "Josh Duhamel"];
    var answers9 = ["Sprinkles", "Snuggles", "Fluffy", "Twinkle"];
    var answers10 = ["A bobblehead", "A picture of himself", "His name plate", "A Dundie"];


    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);
    };

    function qGenerator() {
        
        if (counter === 2) {
            question2();
            console.log(counter);
        };
        if (counter === 4) {
            question3();
            console.log(counter);
        };
        if (counter === 6) {
            question4();
            console.log(counter);
        };
        if (counter === 8) {
            question5();
            console.log(counter);
        };
        if (counter === 10) {
            question6();
            console.log(counter);
        };
        if (counter === 12) {
            question7();
            console.log(counter);
        };
        if (counter === 14) {
            question8();
            console.log(counter);
        };
        if (counter === 16) {
            question9();
            console.log(counter);
        };
        if (counter === 18) {
            question10();
            console.log(counter);
        };
        if (counter === 20) {
            endGame();
        }
    };


    function intermission() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement2, 1000);

    };

    function intermission2() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement2, 1000);
        $("#question-text").html("<h2>You didn't answer!</h2>");
        $("#question-text").append("<img src='assets/images/michaelWHY.gif'>");
        $("#answer1-text").empty();
        $("#answer2-text").empty();
        $("#answer3-text").empty();
        $("#answer4-text").empty();
        numUnanswered++;
    };

    function decrement() {
        time--;
        $("#timer-text").html("<h6>" + time + " seconds remaining</h6>");
        if (time === 0) {
            stop();
            counter++;
            intermission2();
        }
    };

    function decrement2() {
        $("#timer-text").empty();
        interTime--;
        if (interTime === 0) {
            stop();
            counter++;
            qGenerator();
            console.log("hyah");
        };

    };

    function stop() {
        clearInterval(intervalId);
    };


    function questionA(arr1, arr2) {
        run();
        $("#question-text").html("<h2>" + arr1 + "</h2>");

        $("#answer1-text").html("<h4>" + arr2[0] + "</h4>");
        $("#answer1-text").attr("data-answervalue", 0);
        $("#answer2-text").html("<h4>" + arr2[1] + "</h4>");
        $("#answer2-text").attr("data-answervalue", 1);
        $("#answer3-text").html("<h4>" + arr2[2] + "</h4>");
        $("#answer3-text").attr("data-answervalue", 1);
        $("#answer4-text").html("<h4>" + arr2[3] + "</h4>");
        $("#answer4-text").attr("data-answervalue", 1);
    };


    function questionB(arr1, arr2) {
        run();
        $("#question-text").html("<h2>" + arr1 + "</h2>");

        $("#answer1-text").html("<h4>" + arr2[0] + "</h4>");
        $("#answer1-text").attr("data-answervalue", 1);
        $("#answer2-text").html("<h4>" + arr2[1] + "</h4>");
        $("#answer2-text").attr("data-answervalue", 0);
        $("#answer3-text").html("<h4>" + arr2[2] + "</h4>");
        $("#answer3-text").attr("data-answervalue", 1);
        $("#answer4-text").html("<h4>" + arr2[3] + "</h4>");
        $("#answer4-text").attr("data-answervalue", 1);
    };

    function questionC(arr1, arr2) {
        run();
        $("#question-text").html("<h2>" + arr1 + "</h2>");

        $("#answer1-text").html("<h4>" + arr2[0] + "</h4>");
        $("#answer1-text").attr("data-answervalue", 1);
        $("#answer2-text").html("<h4>" + arr2[1] + "</h4>");
        $("#answer2-text").attr("data-answervalue", 1);
        $("#answer3-text").html("<h4>" + arr2[2] + "</h4>");
        $("#answer3-text").attr("data-answervalue", 0);
        $("#answer4-text").html("<h4>" + arr2[3] + "</h4>");
        $("#answer4-text").attr("data-answervalue", 1);
    };

    function questionD(arr1, arr2) {
        run();
        $("#question-text").html("<h2>" + arr1 + "</h2>");

        $("#answer1-text").html("<h4>" + arr2[0] + "</h4>");
        $("#answer1-text").attr("data-answervalue", 1);
        $("#answer2-text").html("<h4>" + arr2[1] + "</h4>");
        $("#answer2-text").attr("data-answervalue", 1);
        $("#answer3-text").html("<h4>" + arr2[2] + "</h4>");
        $("#answer3-text").attr("data-answervalue", 1);
        $("#answer4-text").html("<h4>" + arr2[3] + "</h4>");
        $("#answer4-text").attr("data-answervalue", 0);
    };

    function question1() {
        questionA(questions[0], answers1);
    };

    function question2() {
        questionB(questions[1], answers2);
        time = 31;
        interTime = 5;

    };

    function question3() {
        questionA(questions[2], answers3);
        time = 31;
        interTime = 5;
    };

    function question4() {
        questionD(questions[3], answers4);
        time = 31;
        interTime = 5;
    };

    function question5() {
        questionB(questions[4], answers5);
        time = 31;
        interTime = 5;
    };

    function question6() {
        questionC(questions[5], answers6);
        time = 31;
        interTime = 5;
    };

    function question7() {
        questionC(questions[6], answers7);
        time = 31;
        interTime = 5;
    };

    function question8() {
        questionB(questions[7], answers8);
        time = 31;
        interTime = 5;
    };

    function question9() {
        questionA(questions[8], answers9);
        time = 31;
        interTime = 5;
    };

    function question10() {
        questionD(questions[9], answers10);
        time = 31;
        interTime = 5;
    };

    function endGame() {
        $("#question-text").html("<h2>Here are your results!</h2>");

        $("#question-text").append("<h4>Questions right: " + numRight + "</h4>");
        $("#question-text").append("<h4>Questions wrong: " + numWrong + "</h4>");
        $("#question-text").append("<h4>Questions unanswered: " + numUnanswered + "</h4>");
        $("#question-text").append("<h4>You were " + ((numRight / 10) * 100) + " % correct.</h4>");
        $("#restart").show();
        $("#restart").on("click", function () {
            $("#question-text").empty();
            $("#answer1-text").empty();
            $("#answer2-text").empty();
            $("#answer3-text").empty();
            $("#answer4-text").empty();
            $("#timer-text").empty();
            // time = 31;
            // interTime = 5;
            // numRight = 0;
            // numWrong = 0;
            // numUnanswered = 0;
            // counter = 0;
            // imageYes = -1;
            // imageNo = -1;
            gameStart();
        });
    };


    
    gameStart();
    
    function gameStart() {
        $("#restart").hide();
        $("#start").show();
        $("#start").on("click", function () {
            
            
            $("#start").hide();
            time = 31;
            interTime = 5;
            numRight = 0;
            numWrong = 0;
            numUnanswered = 0;
            counter = 0;
            imageYes = -1;
            imageNo = -1;
            question1();

    
    $(".answer-text").on("click", function () {
        var answerValue = ($(this).attr("data-answervalue"));
        var rightwrong = eval(answerValue);

        stop();
        $("#question-text").empty();
        $("#answer1-text").empty();
        $("#answer2-text").empty();
        $("#answer3-text").empty();
        $("#answer4-text").empty();

        if (rightwrong === 0) {
            numRight++;
            counter++;
            imageYes++;
            $("#question-text").html("<h2>You are correct!</h2>");
            $("#question-text").append("<img src='assets/images/" + yesImages[imageYes] + "'>");
            intermission();
        } else if (rightwrong === 1) {
            numWrong++;
            counter++;
            imageNo++;
            $("#question-text").html("<h2>You are incorrect!</h2>");
            $("#question-text").append("<img src='assets/images/" + noImages[imageNo] + "'>");
            intermission();
        };



    });
    });




    };  












});