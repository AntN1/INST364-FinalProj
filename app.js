const questions = [
    {
        question: "question 1 here",
        answers: ["a", "b", "c", "d"],
        correctAnswer: "a"
    },
    {
        question: "question 2 here",
        answers: ["a", "b", "c", "d"],
        correctAnswer: "b"
    },
    {
        question: "question 3 here",
        answers: ["a", "b", "c", "d"],
        correctAnswer: "c"
    },
    {
        question: "question 4 here",
        answers: ["a", "b", "c", "d"],
        correctAnswer: "a"
    },
    {
        question: "question 5 here",
        answers: ["a", "b", "c", "d"],
        correctAnswer: "d"
    }
]

let currentIndex = 0;
let score = 0;

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const answerButtons = document.querySelectorAll(".btn");

    questionElement.textContent = questions[currentIndex].question;

    answerButtons.forEach((button, index) => {
        button.textContent = questions[currentIndex].answers[index];
        button.disabled = false; 
        button.style.backgroundColor = "tan"; 
    });
}

function handleAnswerClick(event) {
    const selectedAnswer = event.target.textContent;
    const correctAnswer = questions[currentIndex].correctAnswer;
    const answerButtons = document.querySelectorAll(".btn");

    answerButtons.forEach(button => {
        button.disabled = true; 
        if (button.textContent === correctAnswer) {
            button.style.backgroundColor = "#4bad65"; 
        }
    });

    if (selectedAnswer === correctAnswer) {
        score++; 
    }

    const nextButton = document.getElementById("next");
    nextButton.style.display = "block"; 
}

function handleNextClick() {
    currentIndex++;
    if (currentIndex < questions.length) {
        displayQuestion();
    } else {
        displayScore();
    }
}

function displayScore() {
    const quizContainer = document.getElementById("quiz-container");
    const scoreElement = document.createElement("p");
    scoreElement.textContent = `Your score: ${score} out of ${questions.length}`;
    
    const refreshMessage = document.createElement("p");
    refreshMessage.textContent = "Refresh Page to Try Again";
    
    quizContainer.innerHTML = ""; 
    quizContainer.appendChild(scoreElement);
    quizContainer.appendChild(refreshMessage);
}

function resetQuiz() {
    currentIndex = 0;
    score = 0;
    displayQuestion();
}

const answerButtons = document.querySelectorAll(".btn");
answerButtons.forEach(button => {
    button.addEventListener("click", handleAnswerClick);
});

const nextButton = document.getElementById("next");
nextButton.addEventListener("click", handleNextClick);

displayQuestion();


