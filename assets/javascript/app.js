var time = 30000;
var numRight = 0;
var numWrong = 0;
var numUnanswered = 0;
var intervalId;
var questions = {
    "question1": ["answer1", "answer2", "answer3", "answer4"],
    "question2": ["answer5", "answer6", "answer7", "answer8"],
    "question3": ["answer1", "answer2", "answer3", "answer4"],
    "question4": ["answer1", "answer2", "answer3", "answer4"],
};


for (var i = 0; i < 4; i++) {
    var holdup;
    $("#question-text").append(questions[i]);
        for (var j = 0; j < 4; j++) {
            var answerChoice = $("<p>")
            answerChoice.addClass("answer-display");
            answerChoice.attr("data-answervalue", questions.question1[i]);
            $("#answer-text").append(answerChoice + "<br>");
        }
    holdup = setTimeout()
}