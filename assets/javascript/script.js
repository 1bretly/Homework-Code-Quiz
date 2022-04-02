// Let for "Start Quiz" button and addEventListener
let startButton = document.getElementById("startButton");
startButton.addEventListener("click", startQuiz);

// Let for the timer/countdown
let timeLeft = 60;

//  Let for the question that will be used for the quiz
let questions = [
    {
        question: "what is the color of the sky?",
        answers: [
            { text: "blue", correct: true},
            { text: "black", correct: false},
        ]
    }
]

