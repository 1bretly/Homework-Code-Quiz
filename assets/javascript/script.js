// Variables
// Questions in an array
let questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: [
            { text: "<head>", correct: false },
            { text: "<footer>", correct: false },
            { text: "<script>", correct: true },
            { text: "<a>", correct: false },
        ],
    },
    {
        question:
            "String values must be enclosed within _____ when being assigned to variables.",
        answers: [
            { text: "quotations", correct: true },
            { text: "commas", correct: false },
            { text: "curley brackets", correct: false },
            { text: "parenthesis", correct: false },
        ],
    },
    {
        question: "Arrays in JavaScript can be used to store _____.",
        answers: [
            { text: "other arrays", correct: true },
            { text: "booleans", correct: false },
            { text: "numbers", correct: false },
            { text: "functions", correct: false },
        ],
    },
    {
        question: "Commonly used data types DO NOT include:",
        answers: [
            { text: "strings", correct: false },
            { text: "booleans", correct: false },
            { text: "alerts", correct: true },
            { text: "numbers", correct: false },
        ],
    },
    {
        question:
            "To see if two variables are equal in an if / else statement you would use ____.",
        answers: [
            { text: "=", correct: false },
            { text: "!=", correct: false },
            { text: "<=>", correct: false },
            { text: "==", correct: true },
        ],
    },
    {
        question: "The first index of an array is ____.",
        answers: [
            { text: "0", correct: true },
            { text: "1", correct: false },
            { text: "2", correct: false },
            { text: "3", correct: false },
        ],
    },
    {
        question: "Who invented JavaScript?",
        answers: [
            { text: "Dick Hertz", correct: false },
            { text: "Brendan Eich", correct: true },
            { text: "John Javascript", correct: false },
            { text: "Bill Gates", correct: false },
        ],
    },
];

// Buttons for start and answers with addEventListener
let startButton = document.getElementById("start-btn");
startButton.addEventListener("click", startQuiz);

// Question & answer
let questionContainer = document.getElementById("question-container");
let shuffledQuestions, currentQuestionIndex;
let questionEl = document.getElementById("question");
let answerButtons = document.getElementById("answer-buttons");

// Timer
let timer = document.getElementById("timer");
let totalTime = 150;
let score = 0;

// Functions
function startQuiz() {
    startButton.classList.add("hide");
    questionContainer.classList.remove("hide");
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    let startTimer = setInterval(function () {
        totalTime--;
        timer.textContent = totalTime;
        if (totalTime === 0) {
            clearInterval(startTimer);
        }
    }, 1000);
    nextQuestion();
}

function nextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionEl.innerText = question.question;
    question.answers.forEach((answer, index) => {
        let button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
        selectAnswer();
    }
}

function selectAnswer(e) {
    document.querySelectorAll(".btn").forEach((item) => {
        item.addEventListener("click", (event) => {
            if (
                event.currentTarget.innerText ===
                questions[currentQuestionIndex].answers
            ) {
                score++;
            } else {
                timer -= 15;
            }
            if (timer == 0) {
                endQuiz();
            } else {
                nextQuestion();
            }
            currentQuestionIndex++;
            if (currentQuestionIndex > 6) {
                endQuiz();
            } else {
                nextQuestion();
            }
        });
    });
}

function endQuiz() {
    let nameInput = document.createElement("input");
    let scoreSubmit = document.createElement("button");
    questionContainer.innerHTML = "";
    nameInput.setAttribute("id", "nameInput");
    scoreSubmit.setAttribute("id", "scoreSubmit");
    scoreSubmit.innerText = "Submit";
    questionContainer.append(nameInput);
    questionContainer.append(scoreSubmit);
    scoreSubmit.addEventListener("click", submitScore);
    document.getElementById("start-btn").remove();
    timer = 0;
}

function submitScore() {
    let scores = [];
    let name = document.getElementById("nameInput").value;
    if (localStorage.getItem("scores")) {
        scores = JSON.parse(localStorage.getItem("scores"));
    }
    scores.push({
        name: name,
        score: score,
    });
    localStorage.setItem("scores", JSON.stringify(scores));
    displayScores(scores);
}
function displayScores(scores) {
    questionContainer.innerHTML = "";
    for (entry of scores) {
        let scoreEntry = document.createElement("p");
        scoreEntry.innerText = `Name: ${entry.name}, Score: ${entry.score}`;
        questionContainer.append(scoreEntry);
    }
}
