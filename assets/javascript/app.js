// set variables 
var correct = 0;
var incorrect = 0;
var clockRunning = false;
var counter = document.getElementById("start");
var seconds = 60;
// function to start countdown
function start() {
    // function to start timer when start is clicked
    $("#start").click(function countDown() {
        clockRunning = true;
        seconds--;
        counter.innerHTML = "00:" + (seconds < 10 ? "0" : "") + String(seconds);
        // if timer is running, show quiz
        if (seconds > 0) {
           setTimeout(countDown, 1000);
            $("#quiz").css('visibility', 'visible');
        }
        // if timer is up/seconds = 0, time up function
        else {
            timeUp();
        };
    });
};
// call start function
start();
// function to end game when done is clicked
$("#done").click(function (event) {
    // prevents page from refreshing when button is clicked
    event.preventDefault();
    clockRunning = false;
    // 0 seconds executes else in countDown function
    seconds = 0; 
});
// function to check answers, hide quiz and end game 
function timeUp() {
    $("#start").text("Time's Up!");
    showCorr();
    check();
};
// function to check if answers are correct or incorrect
function check() {
    //empty array to push user responses in
    var userResponse =[];
    // corresponding questions and correct answers array 
    var correctA = ["Pikachu", "3:16", "2004", "False", "Jay Z", "Red Ranger", "True", "Copper", "Filippino"];
    var questions = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8", "q9"];
    // for loop to push user responses into array for each questions
    for (var i = 0; i < questions.length; i++) {
        var question = questions[i];
        // checks what user response value is
        var Res = $('input[name='+question+']:checked', '#quiz').val()
        // pushes user response into array 
        userResponse.push(Res);
    };
    // for loop to compare user responses with correct answers
    for (var i = 0; i < userResponse.length; i++) {
        // adds a point to correct if user response and correct answer are equal
        if (userResponse[i] === correctA[i]) {
            correct++;
        }
        // adds a point to incorrect if user repsponse does not equal correct answer
        else {
            incorrect ++;
        }
    }
    showCorr();
};
// function that hides quiz and shows correct and incorrect answers
function showCorr() {
    $("#answers").css('visibility', 'visible');
    $("#answers").text("Correct: " + correct + " Incorrect: " + incorrect);
    $("#quiz").css('visibility', 'hidden');
 };