// Fragen und Antworten, inkl. Stärke und Wert für Auswertung
// choice: Frage+antwort; range: Frage+slider; memory: Gedächnisspiel
const quiz = [
  {
    type: "choice",
    strength: "Kognitive und Analytische Stärken", // Kognitive und Analytische Stärken
    question: "27 + 58 = ?",
    answers: [
      { text: "82", value: 1 },
      { text: "84", value: 1 },
      { text: "85", value: 100 },
      { text: "95", value: 1 }
    ]
  },
  {
    type: "choice",
    strength: "Kognitive und Analytische Stärken",
    question: "13 * 7 = ?",
    answers: [
      { text: "81", value: 1 },
      { text: "91", value: 100 },
      { text: "94", value: 1 },
      { text: "98", value: 1 }
    ]
  },
  {
    type: "choice",
    strength: "Kognitive und Analytische Stärken",
    question: "272 / 8 = ?",
    answers: [
      { text: "32", value: 1 },
      { text: "33", value: 1 },
      { text: "34", value: 100 },
      { text: "35", value: 1 }
    ]
  },
  {
    type: "choice",
    strength: "Kognitive und Analytische Stärken",
    question: "Ein Hemd kostet 39€, ein zweites ist 25% günstiger. Wie viel kostet das zweite Hemd?",
    answers: [
      { text: "26,75€", value: 1 },
      { text: "28,50€", value: 1 },
      { text: "29,25€", value: 100 },
      { text: "31,25€", value: 1 }
    ]
  },
  {
    type: "choice", 
    strength: "Kognitive und Analytische Stärken", 
    question: "Welcher dieser Würfel wurde aus der Faltvorlage konstruiert?",
    image: "../images/räumliches-denken1.png",
    answers: [
      { text: "A", value: 1 },
      { text: "B", value: 1 },
      { text: "C", value: 1 },
      { text: "D", value: 100 }
    ]
  },
  {
    type: "choice", 
    strength: "Kognitive und Analytische Stärken", 
    question: "Welcher dieser Würfel wurde aus der Faltvorlage konstruiert?",
    image: "../images/räumliches-denken2.png",
    answers: [
      { text: "A", value: 100 },
      { text: "B", value: 1 },
      { text: "C", value: 1 },
      { text: "D", value: 1 }
    ]
  },
  {
    type: "choice", 
    strength: "Kognitive und Analytische Stärken", 
    question: "Welcher dieser Würfel wurde aus der Faltvorlage konstruiert?",
    image: "../images/räumliches-denken3.png",
    answers: [
      { text: "A", value: 1 },
      { text: "B", value: 1 },
      { text: "C", value: 100 },
      { text: "D", value: 1 }
    ]
  },
  {
    type: "memory",
    strength: "Gedächtnisvermögen",
    question: "Merke dir die Reihenfolge der aufleuchtenden Felder und klicke sie anschließend in der richtigen Reihenfolge an."
  },
  {
    type: "choice", 
    strength: "Praktische, technische und handwerkliche Stärken", // Praktische, technische und handwerkliche Stärken
    question: "Welches Volumen hat diese Mülltonne?",
    image: "../images/mülltonne.jpg",
    answers: [
      { text: "40l", value: 1 },
      { text: "60l", value: 1 },
      { text: "85l", value: 1 },
      { text: "120l", value: 100 }
    ]
  },
  {
    type: "choice",
    strength: "Praktische, technische und handwerkliche Stärken",
    question: "Wie viel Wasser verbraucht man ungefähr bei 1min Händewaschen mit laufendem Wasserhahn?",
    answers: [
      { text: "500ml", value: 1 },
      { text: "1l", value: 1 },
      { text: "10l", value: 100 },
      { text: "25l", value: 1 }
    ]
  },
  {
    type: "choice",
    strength: "Praktische, technische und handwerkliche Stärken",
    question: "Wie hoch ist der Dom zu Lübeck?",
    answers: [
      { text: "50m", value: 1 },
      { text: "115m", value: 100 },
      { text: "130m", value: 1 },
      { text: "195m", value: 1 }
    ]
  },
  {
    type: "choice",
    strength: "Praktische, technische und handwerkliche Stärken",
    question: "Du willst ein Brett an der Wand befestigen. Wie hält es am Besten?",
    answers: [
      { text: "Mit doppelseitigem Klebeband", value: 1 },
      { text: "Mit Nägeln", value: 1 },
      { text: "Mit Schrauben und passenden Dübeln", value: 100 },
      { text: "Mit Holzleim", value: 1 }
    ]
  },
  {
    type: "choice",
    strength: "Praktische, technische und handwerkliche Stärken",
    question: "Du willst eine Arbeitsplatte kürzen. Die Schnittkante soll nicht splittern. Wie gehst du vor?",
    answers: [
      { text: "Mit einer Fuchsschwanz-Säge von oben schneiden", value: 1 },
      { text: "Mit einer Kreissäge von unten schneiden", value: 1 },
      { text: "Platte wenden und ohne Pendelhub schneiden (Pendelhub: Sägeblatt einer Stichsäge bewegt sich nicht nur vertikal sondern auch horizontal)", value: 1 },
      { text: "Mit Klebeband entlang der Schnittkante und Führungsschiene sägen", value: 100 }
    ]
  },
  {
    type: "choice",
    strength: "Praktische, technische und handwerkliche Stärken",
    question: "Welches Werkzeug ist auf dem Bild zu sehen?",
    image: "../images/rohrschneider.jpg",
    answers: [
      { text: "Bolzenschneider: Zum Durchtrennen von Metallbolzen", value: 1 },
      { text: "Rohrabschneider: Zum präzisen Schneiden von Metallrohren", value: 100 },
      { text: "Kabelschneider: Zum schneiden von elektrischen Leitungen", value: 1 },
      { text: "Drahtseilschneider: Zum kürzen von Drahtseilen", value: 1 }
    ]
  },
  {
    type: "choice",
    strength: "Praktische, technische und handwerkliche Stärken", 
    question: "In welche Richtung dreht sich das Zahrad  B?",
    image: "../images/zahnrad-aufgabe1.png",
    answers: [
      { text: "Im Uhrzeigersinn", value: 1 },
      { text: "Gegen den Uhrzeigersinn", value: 100 },
      { text: "Gar nicht, es blockiert", value: 1 },
      { text: "Beide Richtungen sind möglich. Es kommt darauf an welchen Weg man geht", value: 1 }
    ]
  },
  {
    type: "choice",
    strength: "Praktische, technische und handwerkliche Stärken",
    question: "In welche Richtung dreht sich das Zahrad  B?",
    image: "../images/zahnrad-aufgabe2.png",
    answers: [
      { text: "Im Uhrzeigersinn", value: 100 },
      { text: "Gegen den Uhrzeigersinn", value: 1 },
      { text: "Gar nicht, es blockiert", value: 1 },
      { text: "Beide Richtungen sind möglich. Es kommt darauf an welchen Weg man geht", value: 1 }
    ]
  },
  {
    type: "choice",
    strength: "Praktische, technische und handwerkliche Stärken",
    question: "In welche Richtung dreht sich das Rad  G?",
    image: "../images/zahnrad-aufgabe3.png",
    answers: [
      { text: "Im Uhrzeigersinn", value: 1 },
      { text: "Gegen den Uhrzeigersinn", value: 100 },
      { text: "Gar nicht, es blockiert", value: 1 },
      { text: "Beide Richtungen sind möglich. Es kommt darauf an welchen Weg man geht", value: 1 }
    ]
  },
  {
    type: "choice",
    strength: "Praktische, technische und handwerkliche Stärken",
    question: "Welches dieser Stoffe leitet elektrischen Strom?",
    answers: [
      { text: "Kupfer", value: 100 },
      { text: "Holz", value: 1 },
      { text: "Gummi", value: 1 },
      { text: "Glas", value: 1 }
    ]
  },
  {
    type: "choice",
    strength: "Praktische, technische und handwerkliche Stärken",
    question: "Welches dieser Metalle bleibt Rostfrei?",
    answers: [
      { text: "Baustahl", value: 1 },
      { text: "Edelstahl", value: 100 },
      { text: "Gusseisen", value: 1 },
      { text: "Aluminium", value: 1 }
    ]
  },
  {
    type: "choice",
    strength: "Praktische, technische und handwerkliche Stärken",
    question: "Welches dieser Metalle ist nicht natürlich?",
    answers: [
      { text: "Gold", value: 1 },
      { text: "Silber", value: 1 },
      { text: "Bronze", value: 100 },
      { text: "Kupfer", value: 1 }
    ]
  },
  {
    type: "range",
    strength: "Soziale und Kommunikative Stärken", // Soziale und Kommunikative Stärken
    question: "Wie gut kannst du Streitsituationen klären? (0: gar nicht, 100: sehr gut)",
    answers: [
      { min: 0, max: 100, start: 50 }
    ]
  },
  {
    type: "range",
    strength: "Soziale und Kommunikative Stärken",
    question: "Wie gut findest du Kompromisse, die allen gefallen? (0: gar nicht, 100: sehr gut)",
    answers: [
      { min: 0, max: 100, start: 50 }
    ]
  },
  {
    type: "range",
    strength: "Soziale und Kommunikative Stärken",
    question: "Wie gut kannst du das Verhalten anderer lesen? (0: gar nicht, 100: sehr gut)",
    answers: [
      { min: 0, max: 100, start: 50 }
    ]
  },
  {
    type: "range",
    strength: "Soziale und Kommunikative Stärken",
    question: "Wie gut kannst du Anderen helfen, wenn sie Probleme haben? (0: gar nicht, 100: sehr gut)",
    answers: [
      { min: 0, max: 100, start: 50 }
    ]
  },
  {
    type: "range",
    strength: "Soziale und Kommunikative Stärken",
    question: "Wie gut kannst du dich Ausdrücken? Gibt es Missverständnisse? (0: gar nicht, 100: sehr gut)",
    answers: [
      { min: 0, max: 100, start: 50 }
    ]
  },
  {
    type: "range",
    strength: "Soziale und Kommunikative Stärken",
    question: "Wie gut achtest du darauf, dass jeder dich versteht? (0: gar nicht, 100: sehr gut)",
    answers: [
      { min: 0, max: 100, start: 50 }
    ]
  },
  {
    type: "range",
    strength: "Soziale und Kommunikative Stärken",
    question: "Jemand kommt mit einem Problem zu dir. Wie gut kannst du dieser Person zuhören? (0: gar nicht, 100: sehr gut)",
    answers: [
      { min: 0, max: 100, start: 50 }
    ]
  },
  {
    type: "range",
    strength: "Soziale und Kommunikative Stärken",
    question: "Wie gut kannst du Andere von deiner Meinung überzeugen? (0: gar nicht, 100: sehr gut)",
    answers: [
      { min: 0, max: 100, start: 50 }
    ]
  },
  {
    type: "range",
    strength: "Künstlerische und Kreative Stärken", //Künstlerische und Kreative Stärken
    question: "Bist Du in Deiner Freizeit gerne und oft künstlerisch aktiv? (0: gar nicht, 100: sehr gerne/oft)",
    answers: [
      { min: 0, max: 100, start: 50 }
    ]
  },
  {
    type: "range",
    strength: "Künstlerische und Kreative Stärken",
    question: "Du sollst im Kunstunterricht Müll upcyceln. Wie gut kommst du auf Ideen was du machen könntest? (0: gar nicht, 100: sehr gut)",
    answers: [
      { min: 0, max: 100, start: 50 }
    ]
  },
  {
    type: "range",
    strength: "Künstlerische und Kreative Stärken",
    question: "Wie kreativ schätzt du dich ein? (0: gar nicht, 100: sehr kreativ)",
    answers: [
      { min: 0, max: 100, start: 50 }
    ]
  },
  {
    type: "choice",
    strength: "Physische und körperliche Stärken", // Physische und körperliche Stärken
    question: "Wie oft treibst du in der Woche Sport",
    answers: [
      { text: "0 mal", value: 1 },
      { text: "1-2 mal", value: 40 },
      { text: "3-4 mal", value: 70 },
      { text: "5+ mal", value: 100 }
    ]
  },
  {
    type: "range",
    strength: "Physische und körperliche Stärken",
    question: "Wie sportlich schätzt du dich ein? (0: gar nicht, 100: sehr sportlich)",
    answers: [
      { min: 0, max: 100, start: 50 }
    ]
  },
  {
    type: "range",
    strength: "Physische und körperliche Stärken",
    question: "Wie gut kannst du auf einem Schwebebalken blancieren? (0: gar nicht, 100: sehr gut)",
    answers: [
      { min: 0, max: 100, start: 50 }
    ]
  },
  {
    type: "range",
    strength: "Physische und körperliche Stärken",
    question: "Ein Ball wird dir zugeworfen. Wie gut kannst ihn fangen? (0: gar nicht, 100: sehr gut)",
    answers: [
      { min: 0, max: 100, start: 50 }
    ]
  },
  {
    type: "choice",
    strength: "Sprach- und Leseverständnis",
    question: "Wie viele Sprachen kannst du Sprechen",
    answers: [
      { text: "1", value: 50 },
      { text: "2", value: 70 },
      { text: "3", value: 90 },
      { text: "4+", value: 100 }
    ]
  },
  {
    type: "range",
    strength: "Sprach- und Leseverständnis",
    question: "Wie gut verstehst du Englisch? (0: gar nicht, 100: sehr gut)",
    answers: [
      { min: 0, max: 100, start: 50 }
    ]
  },
  {
    type: "range",
    strength: "Sprach- und Leseverständnis",
    question: "Wie gut kannst du dich auf Englisch verständigen? (0: gar nicht, 100: sehr gut)",
    answers: [
      { min: 0, max: 100, start: 50 }
    ]
  },
  {
    type: "range",
    strength: "Sprach- und Leseverständnis",
    question: "Wie gut kannst du Fremdsprachen erlernen? (0: gar nicht, 100: sehr gut)",
    answers: [
      { min: 0, max: 100, start: 50 }
    ]
  },
  {
    type: "range",
    strength: "Sprach- und Leseverständnis",
    question: "Wie oft liest du Bücher? (0: gar nicht, 100: in jeder freien Minute)",
    answers: [
      { min: 0, max: 100, start: 50 }
    ]
  },
  {
    type: "range",
    strength: "Sprach- und Leseverständnis",
    question: "Wie leicht fällt es dir deutsche Texte verstehen? (0: gar nicht, 100: sehr leicht)",
    answers: [
      { min: 0, max: 100, start: 50 }
    ]
  },
];

let nmbrQuest = 0;
let results = {};
let counts = {};

// Ausführungs Elemente
const themeEl = document.getElementById('theme');
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
  themeEl.innerText = objQuest.strength;

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
  } else if (objQuest.type === "memory") {
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



let memoryRoundsPlayed = 0;

function startMemoryGame() {
  memoryUserInput = [];
  memoryClickable = false;

  memorySequence = [];
  for (let i = 0; i < 4; i++) {
    memorySequence.push(Math.floor(Math.random() * 9));
  }

  let i = 0;

  const playSequence = () => {
    const interval = setInterval(() => {
      if (i > 0) {
        memoryGrid.children[memorySequence[i - 1]].classList.remove("active");
      }

      if (i >= memorySequence.length) {
        clearInterval(interval);
        memoryClickable = true;
        return;
      }

      setTimeout(() => {
        memoryGrid.children[memorySequence[i]].classList.add("active");

        setTimeout(() => {
          memoryGrid.children[memorySequence[i]].classList.remove("active");
          i++;
        }, 500);
      }, 500);
    }, 1000);
  };

  // Wenn es der erste Durchlauf ist: 2 Sekunden Pause zum Lesen
  if (memoryRoundsPlayed === 0) {
    setTimeout(playSequence, 2000);
  } else {
    playSequence();
  }
  memoryRoundsPlayed++;
}


function checkMemoryAnswer() {
  memoryClickable = false;
  const correct = memoryUserInput.every((v, i) => v === memorySequence[i]);
  const value = correct ? 100 : 20;
  memoryResults.push(value);

  memoryRound++;

  if (memoryRound < 3) {
    setTimeout(() => {
      startMemoryGame();
    }, 1000);
  } else {
    const avg = Math.round(memoryResults.reduce((a, b) => a + b, 0) / memoryResults.length);
    const strength = "Gedächtnisvermögen";

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
