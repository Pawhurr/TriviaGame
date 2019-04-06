$(document).ready(function () {

    var time = 31;
    var interTime = 5;
    var numRight = 0;
    var numWrong = 0;
    var numUnanswered = 0;
    var counter = 0;
    var intervalId;
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

    function qGenerator(num) {
        if (num = 2) {
            question2();
        } else if (num = 4) {
            question3();
        };
    };

    function intermission() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement2, 1000);

    };

    function intermission2() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement2, 1000);
        $("#question-text").html("<h2>You didn't answer!</h2>");
        $("#answer1-text").empty();
        $("#answer2-text").empty();
        $("#answer3-text").empty();
        $("#answer4-text").empty();
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
            qGenerator(counter);
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
        $("#answer2-text").attr("data-answervalue", 0);
        $("#answer3-text").html("<h4>" + arr2[2] + "</h4>");
        $("#answer3-text").attr("data-answervalue", 1);
        $("#answer4-text").html("<h4>" + arr2[3] + "</h4>");
        $("#answer4-text").attr("data-answervalue", 1);
    };

    function question1() {
        questionA(questions[0], answers1);
    };

    function question2() {
        questionB(questions[1], answers2);

    };

    function question3() {
        questionA(questions[2], answers3);
    };

    function question4() {
        questionD(questions[3], answers4);
    };

    function question5() {
        questionB(questions[4], answers5);
    };

    function question6() {
        questionC(questions[5], answers6);
    };

    function question7() {
        questionC(questions[6], answers7);
    };

    function question8() {
        questionB(questions[7], answers8);
    };

    function question9() {
        questionA(questions[8], answers9);
    };

    function question10() {
        questionD(questions[9], answers10);
    };


    gameStart();


    function gameStart() {

    $(".btn").on("click", function () {
        question1();
        $(".btn").empty();

    
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
            $("#question-text").html("<h2>You are correct!</h2>");
            $("#question-text").append("<img src='assets/images/pamYup.gif'>");
            intermission();
        } else if (rightwrong === 1) {
            numWrong++;
            counter++;
            $("#question-text").html("<h2>You are incorrect!</h2>");
            $("#question-text").append("<img src='assets/images/michaelWHY.gif'>");
            intermission();
        }

        console.log(numRight);
        console.log(numWrong);
        console.log(counter);

    });
    });




    };  












});