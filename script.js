
//variable to use for array of true/false questions
var testQuestions = [
  {
    question: "H.T.M.L. Stands for Hyper text markup language.",
    answer: true,
  },
  {
    question: "JavaScript is a type of coding language.",
    answer: true,
  },
  {
    question: "Learning to code is impossible.",
    answer: false,
  },
  {
    question: "It is always good to get a handle on things using variables.",
    answer: true,
  },
  {
    question: "Console.log helps pinpoint errors",
    answer: true,
  },
];
//need to make questions start at beggining of array
var currentQuestionIndex = 0;
//var to keep track of score 
//var score = 
// get handle on questions box, question choices, start button, nextQuestion button 
var startButton = document.getElementById("startButton");
var quizButton = document.getElementById("quizButton")
var question =document.getElementById("questions");
var answerChoices= document.getElementById("anwserChoices");
var trueButton = document.getElementById("trueButton");
var falseButton = document.getElementById("falseButton");
var timer = document.getElementById("timeLeft");
var clock;
var timeLeft = 75;



function Question() {
  var currentQuestion = testQuestions[currentQuestionIndex];
  if (currentQuestionIndex < testQuestions.length) {
    //make function that rotates questions through 
    question.textContent = "Question " + (currentQuestionIndex + 1) + ": " + currentQuestion.question;
  } else{
    endQuiz()
  }
console.log(Question)
}





//function timer
//how to save high scores?
var score = 0;
//make function to check true or false anwseres based on array and button clicked.
//need event listeners for buttons

function checkAnswerChoice(answer){
  var anwserChoice= testQuestions[currentQuestionIndex].answer;
  if (answer === anwserChoice){
    score++;
  }
    //move to next question?
    currentQuestionIndex++;
    Question();
  }


trueButton.addEventListener("click", function() {
  checkAnswerChoice(true);
});
falseButton.addEventListener("click", function() {
  checkAnswerChoice(false);
});
//make timer
//var start =document.getElementById(start)
//how to make quiz end when timer hits 0?
// Function to update the timer
function updateTimer() {
  if (timeLeft > 0) {
      timeLeft--;
      timer.textContent = timeLeft;
  } else {
    endQuiz();
  }
}

function endQuiz() {
  clearInterval(clock);
  var initials =prompt("enter initials")
var initialsDisplay = document.getElementById("high-score-box");
  initialsDisplay.textContent = "Initials: " + initials +  score;
}
//use .local storage
//will need for loop
// for (var i=0; i< var.length;i++)
// .addEventListener("click", function(event))
//  var clickeditem = event.target;

// if (clickeditem.matches)

// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and score



//starts quiz on click of start, displays first question in array

function startQuiz() {
  startButton.disabled = true;
  Question(currentQuestionIndex);
  timer = setInterval(updateTimer, 1000);
}
// falseButton.addEventListener('click',
// trueButton.addEventListener('click',
startButton.addEventListener('click', startQuiz);