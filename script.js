const questions = [
  {
    question: "Wie stark fühlst du dich heute?",
    answers: [
      { text: "Sehr stark", correct: true },
      { text: "Mittel", correct: false },
      { text: "Wenig", correct: false },
      { text: "Gar nicht", correct: false }
    ]
  },
  {
    question: "Wie viele Liegestütze schaffst du?",
    answers: [
      { text: "20+", correct: true },
      { text: "10-19", correct: false },
      { text: "1-9", correct: false },
      { text: "Keine", correct: false }
    ]
  }
];

const questionElement = document.getElementById("question");
const answerButtons = document.querySelectorAll(".btn");
const nextButton = document.getElementById("nxt-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Weiter";
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;

  answerButtons.forEach((btn, index) => {
    btn.innerText = currentQuestion.answers[index].text;
    btn.onclick = () => selectAnswer(currentQuestion.answers[index]);
  });
}

function resetState() {
  nextButton.style.display = "none";
  answerButtons.forEach(btn => {
    btn.disabled = false;
    btn.style.backgroundColor = "";
    btn.style.color = "#00253D";
  });
}

function selectAnswer(answer) {
  if (answer.correct) {
    score++;
  }

  answerButtons.forEach((btn, index) => {
    btn.disabled = true;
    if (questions[currentQuestionIndex].answers[index].correct) {
      btn.style.backgroundColor = "green";
      btn.style.color = "white";
    } else {
      btn.style.backgroundColor = "red";
      btn.style.color = "white";
    }
  });

  nextButton.style.display = "block";
}

function nxtQuest() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  resetState();
  questionElement.innerText = `Dein Ergebnis: ${score} von ${questions.length} richtig`;
  nextButton.innerText = "Nochmal";
  nextButton.style.display = "block";
  nextButton.onclick = startQuiz;
}

startQuiz();
