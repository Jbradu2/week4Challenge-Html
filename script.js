
//variable to use for array of true/false questions
var testQuestions = [
  {
    question: "H.T.M.L. Stands for Hyper text markup language?",
    answer: true,
  },
  {
    question: "H.T.M.L. Stands for Hyper text markup language?",
    answer: true,
  },
  {
    question: "H.T.M.L. Stands for Hyper text markup language?",
    answer: true,
  },
  {
    question: "H.T.M.L. Stands for Hyper text markup language?",
    answer: true,
  },
  {
    question: "H.T.M.L. Stands for Hyper text markup language?",
    answer: true,
  },
];
var currentQuestionIndex = 0;
//var to keep track of score 
//var score = 
// get handle on questions box, question choices, start button, nextQuestion button 
var startButton = document.getElementById("startButton");
var quizButton = document.getElementById("quizButton")
var question =document.getElementById("questions");
var awserChoices= document.getElementById("anwserChoices");
var trueButton = document.getElementById("trueButton");
var falseButton = document.getElementById("falseButton");



function displayQuestion() {
  if (currentQuestionIndex < testQuestions.length) {
      question.textContent = "Question " + (currentQuestionIndex + 1) + ": " + testQuestions[currentQuestionIndex].question;
  } 
console.log(displayQuestion)
}

displayQuestion()

function questions () {

//make function that rotates questions through 
if (currentQuestionIndex < testQuestions.length) {
  var currentQuestion = testQuestions[currentQuestionIndex];

  question.textContent = currentQuestion.testQuestions;
  console.log()
}
}

questions();
//function timer
//how to save high scores?

//make timer
//var start =document.getElementById(start)
//how to make quiz end when timer hits 0?
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



function startQuiz() {
  startButton.style.display = 'none';
  //starts quiz on click of start, displays first question in array
  displayQuestion(currentQuestionIndex);
}
startButton.addEventListener('click', startQuiz);