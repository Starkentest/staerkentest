// Fragen und Antworten, inkl. Stärke und Wert für Auswertung
// choice: Frage+antwort; range: Frage+slider; memory: Gedächnisspiel
const quiz = [
  {
    type: "choice",
    strength: "Gruppenkompetenz",
    question: "Frage 1",
    answers: [
      { text: "Antwort 1.1", value: 100 },
      { text: "Antwort 1.2", value: 70 },
      { text: "Antwort 1.3", value: 40 },
      { text: "Antwort 1.4", value: 1 }
    ]
  },
  {
    type: "choice",
    strength: "Gruppenkompetenz",
    question: "Frage 2",
    image: "images/rohrschneider.jpg",
    answers: [
      { text: "Antwort 2.1", value: 100 },
      { text: "Antwort 2.2", value: 70 },
      { text: "Antwort 2.3", value: 40 },
      { text: "Antwort 2.4", value: 10 }
    ]
  },
  {
    type: "range",
    strength: "Selbstorganisation",
    question: "Frage 3",
    answers: [
      { min: 0, max: 100, start: 50 }
    ]
  },
  {
    // Wird dreimal durchgeführt
    type: "memory",
    strength: "Gedächtnisfähigkeit",
    question: "Merke dir die Reihenfolge der aufleuchtenden Felder und klicke sie anschließend in der richtigen Reihenfolge an."
  },
  {
    type: "choice",
    strength: "Räumliches Denken",
    question: "Welche dieser Figuren ist die richtige Drehung des Originals?",
    image: "images/",
    answers: [
      { text: "Antwort A", value: 100, image: "images/" },
      { text: "Antwort B", value: 70, image: "images/" },
      { text: "Antwort C", value: 40, image: "images/" },
      { text: "Antwort D", value: 10, image: "images/" }
    ]
  }

];

let nmbrQuest = 0;
let results = {};
let counts = {};

// Ausführungs Elemente
const questionEl = document.getElementById('question');
const imgElement = document.getElementById('question-image');
const nextBtn = document.getElementById('nxt-btn');
const answerButtons = [
  document.getElementById('ans1'),
  document.getElementById('ans2'),
  document.getElementById('ans3'),
  document.getElementById('ans4')
];
const sliderContainer = document.getElementById('range-slider-container');
const slider = document.getElementById('range-slider');
const valueDisplay = document.getElementById('value-slider');
const answersContainer = document.querySelector('.container-answers');

function loadQuestion() {
  nextBtn.style.display = 'none';

  if (nmbrQuest >= quiz.length) {
    showResults();
    return;
  }

  const objQuest = quiz[nmbrQuest];
  questionEl.innerText = objQuest.question;

  if (objQuest.image) {
    imgElement.src = objQuest.image;
    imgElement.style.display = 'block';
  } else {
    imgElement.style.display = 'none';
  }

  if (objQuest.type === "choice") {
    sliderContainer.style.display = 'none';
    answersContainer.style.display = 'flex';

    answerButtons.forEach((btn, i) => {
      if (objQuest.answers[i]) {
        btn.style.display = 'inline-block';
        if (objQuest.answers[i].image) {
        btn.innerHTML = `<img src="${objQuest.answers[i].image}" alt="Antwortbild" style="height:80px;">`;
        } 
        else {
        btn.innerText = objQuest.answers[i].text;
        }

      } else {
        btn.style.display = 'none';
      }
    });
  } else if (objQuest.type === "range") {
    answersContainer.style.display = 'none';
    sliderContainer.style.display = 'block';

    const a = objQuest.answers[0];
    slider.min = a.min;
    slider.max = a.max;
    slider.value = a.start;
    valueDisplay.innerText = a.start;

    nextBtn.style.display = 'none';
  }
    else if (objQuest.type === "memory") {
    answersContainer.style.display = 'none';
    sliderContainer.style.display = 'none';
    imgElement.style.display = 'none';
    document.getElementById("memory-container").style.display = 'grid';
    startMemoryGame();
  }

}

answerButtons.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    submitAnswer(i);
  });
});

slider.addEventListener('input', () => {
  valueDisplay.textContent = slider.value;
  nextBtn.style.display = 'block';
});

nextBtn.addEventListener('click', () => {
  const objQuest = quiz[nmbrQuest];
  if (objQuest.type === "range") {
    submitAnswer();
  }
});

function submitAnswer(index = null) {
  const objQuest = quiz[nmbrQuest];
  let value;
  

  if (objQuest.type === "choice") {
    value = objQuest.answers[index].value;
  } else if (objQuest.type === "range") {
    value = parseInt(slider.value);
  }

  // Werte speichern nach Stärke
  const strength = objQuest.strength;
  if (!results[strength]) {
    results[strength] = 0;
    counts[strength] = 0;
  }

  results[strength] += value;
  counts[strength]++;

  nmbrQuest++;
  loadQuestion();
}

function showResults() {
  answersContainer.style.display = 'none';
  sliderContainer.style.display = 'none';
  imgElement.style.display = 'none';
  nextBtn.style.display = 'none';
  memoryGrid.style.display = 'none';

  questionEl.innerText = "Quiz beendet! Hier deine Auswertung:";

  const container = document.querySelector(".container-quiz");
  container.innerHTML += "<div id='results'></div>";
  const resultsDiv = document.getElementById("results");

  const averaged = Object.entries(results).map(([strength, total]) => {
    return [strength, Math.round(total / counts[strength])];
  }).sort((a, b) => b[1] - a[1]);

  averaged.forEach(([strength, value]) => {
    const roundedValue = Math.round(value / 10) * 10;
    const barColor = roundedValue < 50 ? 'red' : 'green';

    const item = document.createElement("div");
    item.className = "result-item";
    item.innerHTML = `
      <strong>${strength}</strong>
      <div class="result-bar">
      <div class="result-fill" style="width: ${roundedValue}%; background-color: ${barColor};"></div>
      </div>
    `;
    resultsDiv.appendChild(item);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadQuestion();
});

//Memory Game Variablen
let memoryGrid = document.createElement("div");
memoryGrid.id = "memory-container";
memoryGrid.style.display = "none";
memoryGrid.className = "grid";
document.querySelector(".container-quiz").appendChild(memoryGrid);

let memorySequence = [];
let memoryUserInput = [];
let memoryClickable = false;
let memoryRound = 0;
let memoryResults = [];

for (let i = 0; i < 9; i++) {
  const cell = document.createElement("div");
  cell.className = "cell";
  cell.dataset.index = i;
  cell.addEventListener("click", () => {
    if (!memoryClickable) return;
    const index = parseInt(cell.dataset.index);
    memoryUserInput.push(index);
    cell.classList.add("active");
    setTimeout(() => cell.classList.remove("active"), 300);
    if (memoryUserInput.length === memorySequence.length) {
      checkMemoryAnswer();
    }
  });
  memoryGrid.appendChild(cell);
}


function startMemoryGame() {
  memoryUserInput = [];
  memoryClickable = false;

  memorySequence = [];
  for (let i = 0; i < 4; i++) {
    memorySequence.push(Math.floor(Math.random() * 9));
  }

  let i = 0;
  const interval = setInterval(() => {
    // Vorheriges Licht aus
    if (i > 0) {
      memoryGrid.children[memorySequence[i - 1]].classList.remove("active");
    }

    // Wenn die Sequenz beendet ist
    if (i >= memorySequence.length) {
      clearInterval(interval);
      memoryClickable = true;
      return;
    }

    // Neues Licht an
    setTimeout(() => {
      memoryGrid.children[memorySequence[i]].classList.add("active");

      // Nach 0.5 Sekunden wieder aus
      setTimeout(() => {
        memoryGrid.children[memorySequence[i]].classList.remove("active");
        i++;
      }, 500);
    }, 500); // 0.5 Sekunden Pause vor dem nächsten Licht
  }, 1000); // Insgesamt 1 Sekunde pro Schritt (0.5 an, 0.5 aus)
}



function checkMemoryAnswer() {
  memoryClickable = false;
  const correct = memoryUserInput.every((v, i) => v === memorySequence[i]);
  const value = correct ? 100 : 20; // oder schwieriger: 0 statt 30
  memoryResults.push(value);

  memoryRound++;

  if (memoryRound < 3) {
    setTimeout(() => {
      startMemoryGame();
    }, 1000);
  } else {
    // Durchschnitt berechnen und einmalig zur Auswertung hinzufügen
    const avg = Math.round(memoryResults.reduce((a, b) => a + b, 0) / memoryResults.length);
    const strength = "Gedächtnisfähigkeit";

    if (!results[strength]) {
      results[strength] = 0;
      counts[strength] = 0;
    }

    results[strength] += avg;
    counts[strength]++;

    memoryGrid.style.display = "none";
    memoryRound = 0;
    memoryResults = [];
    nmbrQuest++;
    loadQuestion();
  }
}
