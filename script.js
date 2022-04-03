var answerTime = document.getElementById("time");
var startButton = document.getElementById("startButton");
var correctAnswer = document.querySelector("correct");
var correctScore = document.querySelector("correctScore");
var correctTotal = 0;
var incorrectAnswer = document.querySelector("incorrect");
var score = document.querySelector("score");
var resetQuiz = document.getElementById("reset");


startButton.addEventListener("click", clock);
resetQuiz.addEventListener("click", clock);

function clock() {
    var timeLeft = 5;
    var timeInterval = setInterval(function() {
        if (timeLeft > 1){
            answerTime.textContent = timeLeft + " seconds left.";
            timeLeft--;
        }
        else if(timeLeft === 1){
            answerTime.textContent = timeLeft + " second left."
            timeLeft--;   
        }
        else {
            answerTime.textContent = "Loser";
            setInterval;
        }
    }, 1000);
}
correctAnswer.addEventListener("click", function() {
    correctScore = correctTotal + 1;
    localStorage.setItem("correct", correctScore);
    console.log(correctScore);
});
