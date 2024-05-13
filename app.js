const questions = [
    {
        question: "Select the most secure password:",
        answers: ["Water123", "OpeOpeFruit435!", "d3%d`.E/AerZ09(", "DOB02/14/98"],
        correctAnswer: "d3%d`.E/AerZ09("
    },
    {
        question: "What are the tradeoffs when evaluating a password?",
        answers:["entropy vs strength","length vs character variety","common vs uncommon","easy to remember vs secure"],
        correctAnswer: "easy to remember vs secure"
    },
    {
        question: "Which best describes password entropy?",
        answers: ["Password entropy is a measure of how predictable your password is.", 
        "Password entropy is solely determine by the length of your password.", 
        "Password entropy is measured of when you should change your password.", "Password entropy is a measure of how easy a password is to remember."],
        correctAnswer: "Password entropy is a measure of how predictable your password is."
    },
    {
        question: "What are the 3 kinds of password managers?",
        answers: ["Online, offline, free", "Browser-based, cloud-based, desktop-based", "free, premium, ultimate", "key-based, token-based, trust-based"],
        correctAnswer: "Browser-based, cloud-based, desktop-based"
    },
    {
        question: "Entropy is measured in...",
        answers: ["frames", "joules", "watts", "bits"],
        correctAnswer: "bits"
    },
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
    nextButton.style.margin = "auto"
}

function handleNextClick() {
    currentIndex++;
    if (currentIndex < questions.length) {
        displayQuestion();
    } else {
        displayScore();
    }

    const nextButton = document.getElementById("next")
    nextButton.style.display = "none"
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

const answerButtons = document.querySelectorAll(".btn");
answerButtons.forEach(button => {
    button.addEventListener("click", handleAnswerClick);
});

const nextButton = document.getElementById("next");
nextButton.addEventListener("click", handleNextClick);

displayQuestion();


