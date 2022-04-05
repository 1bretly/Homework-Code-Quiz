// Variables
let startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startQuiz);

let nextButton = document.getElementById("next-btn");
nextButton.addEventListener("click", nextQuestion);

let timer = document.getElementById("timer");

let questionContainer = document.getElementById("question-container");
let shuffledQuestions, currentQuestionIndex;
let questionEl = document.getElementById("question");
let answerButtons = document.getElementById("answer-buttons");

// Functions
let totalTime = 150;

function startQuiz() {
    startButton.classList.add("hide")
    questionContainer.classList.remove("hide");
    shuffledQuestions = questions.sort(() => Math.random() -.5);
    currentQuestionIndex = 0;
    let startTimer = setInterval(function () {
    totalTime--;
    timer.textContent = totalTime;
    if (totalTime === 0) {
        clearInterval(startTimer);
    }
}, 1000)
    nextQuestion();
}

function nextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionEl.innerText = question.question;
}


// Questions in an array
let questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: [
            { text: "<head>", correct: false },
            { text: "<footer>", correct: false },
            { text: "<script>", correct: true },
            { text: "<a>", correct: false },
        ]
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        answers: [
            { text: "quotations", correct: true },
            { text: "commas", correct: false },
            { text: "curley brackets", correct: false },
            { text: "parenthesis", correct: false },
        ]
    },
//     {
//         question: "Arrays in JavaScript can be used to store _____.",
//         choices: ["a. numbers and strings", "b. other arrays", "c. booleans", "d. all of the above"],
//         answer: "b. other arrays"
//     },
//     {
//         question: "Commonly used data types DO NOT include:",
//         choices: ["a. strings", "b. booleans", "c. alerts", "d. numbers"],
//         answer: "c. alerts"
//     },
//     {
//         question: "How do you create a function in JavaScript",
//         choices: ["a. function = myFunction()", "b. function myFunction()", "c. function:myFunction()", "d. createMyFunction()"],
//         answer: "b. function myFunction()"
//     },
//     {
//         question: "How do you call a function named myFunction?",
//         choices: ["a. call myFunction()", "b. call function myFunction()", "c. myFunction()", "d. call myFunction"],
//         answer: "c. myFunctions()"
//     },
//     {
//         question: "To see if two variables are equal in an if / else statement you would use ____.",
//         choices: ["a. =", "b. ==", "c. 'equals'", "d. !="],
//         answer: "b. =="
//     },
//     {
//         question: "The first index of an array is ____.",
//         choices: ["a. 0", "b. 1", "c. 8", "d. any"],
//         answer: "a. 0"
//     },
//     {
//         question: "Who invented JavaScript?",
//         choices: ["a. Douglas Crockford", "b. Sheryl Sandberg", "c. Brendan Eich", "d. Ben Javascript"],
//         answer: "c. Brendan Eich"
//     },
//     {
//         question: "How to write an IF statement in JavaScript?",
//         choices: ["a. if i == 5 then", "b. if i = 5 then", "c. if(i == 5)", "d. if i = 5"],
//         answer: "c. if(i == 5)"
//     },
//     {
//         question: "How do you add a comment in a JavaScript?",
//         choices: ["a. //This is a comment", "b. <!--This is a comment-->", "c. 'This is a comment", "d. * This is a comment *"],
//         answer: "a. //This is a comment"
//     },
//     {
//         question: "Which event occurs when the user clicks on an HTML element?",
//         choices: ["a. onclick", "b. onchange", "c. onmouseover", "d. onmouseclick"],
//         answer: "a. onclick"
//     }
];
