const questions = [
  {
    //1
    question: "Which is the largest animal in the world?",
    answers: [
      { text: "Shark", correct: false },
      { text: "Blue Whale", correct: true },
      { text: "Elephant", correct: false },
      { text: "Giraffe", correct: false },
    ],
  },
  {
    //2
    question: "Which is the smallest country in the world?",
    answers: [
      { text: "Vatican City", correct: true },
      { text: "Bhutan", correct: false },
      { text: "Nepal", correct: false },
      { text: "Singapore", correct: false },
    ],
  },
  {
    //3
    question: "Which is the largest desert in the world?",
    answers: [
      { text: "Kalahari", correct: false },
      { text: "Gobi", correct: false },
      { text: "Sahara", correct: false },
      { text: "Antarctica", correct: true },
    ],
  },
  {
    //4
    question: "Which is the smallest continent in the world?",
    answers: [
      { text: "Asia", correct: false },
      { text: "Australia", correct: true },
      { text: "Arctic", correct: false },
      { text: "Africa", correct: false },
    ],
  },
  {
    //5
    question: "Which is the smallest planet in our solar system?",
    answers: [
      { text: "The Earth", correct: false },
      { text: "Mars", correct: false },
      { text: "Mercury", correct: true },
      { text: "Saturn", correct: false },
    ],
  },
  {
    //6
    question: "Which is the largest flower in the world?",
    answers: [
      { text: "Rafflesia", correct: true },
      { text: "Jasmine", correct: false },
      { text: "Balloon Flower", correct: false },
      { text: "Camellia", correct: false },
    ],
  },
  {
    //7
    question: "What is sun?",
    answers: [
      { text: "Planet", correct: false },
      { text: "Star", correct: true },
      { text: "Comet", correct: false },
      { text: "Pulsar", correct: false },
    ],
  },
  {
    //8
    question: "World War I (WW1) was ended in which year?",
    answers: [
      { text: "1917", correct: false },
      { text: "1920", correct: false },
      { text: "1919", correct: false },
      { text: "1918", correct: true },
    ],
  },
  {
    //9
    question: "Which is the lightest metal in world?",
    answers: [
      { text: "Zinc", correct: false },
      { text: "Lithium", correct: true },
      { text: "Platinum", correct: false },
      { text: "Gold", correct: false },
    ],
  },
  {
    //10
    question: "Which is the longest river in the world?",
    answers: [
      { text: "Great Ganga", correct: false },
      { text: "Nile", correct: true },
      { text: "Amazon", correct: false },
      { text: "Niger", correct: false },
    ],
  },
  {
    //11
    question: "What country drinks the most coffee?",
    answers: [
      { text: "America", correct: false },
      { text: "Finland", correct: true },
      { text: "Netherlands", correct: false },
      { text: "Switzerland", correct: false },
    ],
  },
  {
    //12
    question: "What is the capital of Japan?",
    answers: [
      { text: "Kyoto", correct: false },
      { text: "Tokyo", correct: true },
      { text: "Osaka", correct: false },
      { text: "Sapporo", correct: false },
    ],
  },
  {
    //13
    question: "What is a supernova?",
    answers: [
      { text: "The explosion of a star", correct: true },
      { text: "The deepest part of a black hole", correct: false },
      { text: "The center of a galaxy", correct: false },
      { text: "The birth of a star", correct: false },
    ],
  },
  {
    //14
    question: "How many primary color are there?",
    answers: [
      { text: "Four", correct: false },
      { text: "Three", correct: true },
      { text: "One", correct: false },
      { text: "Two", correct: false },
    ],
  },
  {
    //15
    question: "What year did the Tatanic sink?",
    answers: [
      { text: "1912", correct: true },
      { text: "1928", correct: false },
      { text: "1932", correct: false },
      { text: "1921", correct: false },
    ],
  },
  {
    //16
    question: "Which plant has the most moons?",
    answers: [
      { text: "Jupiter", correct: false },
      { text: "Mercury", correct: false },
      { text: "Neptune", correct: false },
      { text: "Saturn", correct: true },
    ],
  },
  {
    //17
    question: "Which plant in the Milky Way is the hottest?",
    answers: [
      { text: "Jupiter", correct: false },
      { text: "Mercury", correct: false },
      { text: "Venus", correct: true },
      { text: "Saturn", correct: false },
    ],
  },
  {
    //18
    question: "What Netflix show had the most streaming views in 2021?",
    answers: [
      { text: "Squid Game", correct: true },
      { text: "Red Notice", correct: false },
      { text: "The Guilty", correct: false },
      { text: "Cowboy Bebop", correct: false },
    ],
  },
  {
    //19
    question: "Who was the first Disney princess?",
    answers: [
      { text: "Snow White", correct: true },
      { text: "Rapunzel", correct: false },
      { text: "Elsa", correct: false },
      { text: "Ariel", correct: false },
    ],
  },
  {
    //20
    question: "Who is the author of The Catcher In The Rye?",
    answers: [
      { text: "J.K Rowling", correct: false },
      { text: "Stephen King", correct: false },
      { text: "Suzanee Collins", correct: false },
      { text: "J.D Salinger", correct: true },
    ],
  },
  {
    //21
    question: "Who painted the Mona Lisa?",
    answers: [
      { text: "Vincent van Gogh", correct: false },
      { text: "Leonardo da Vinci", correct: true },
      { text: "Pablo Picasoo", correct: false },
      { text: "Michelangelo", correct: false },
    ],
  },
  {
    //22
    question: "What is the largest ocean in the world?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
    ],
  },
  {
    //23
    question: "What is the smallest ocean in the world?",
    answers: [
      { text: "Indian Ocean", correct: false },
      { text: "Pacific Ocean", correct: false },
      { text: "Arctic Ocean", correct: true },
      { text: "Atlantic Ocean", correct: false },
    ],
  },
  {
    //24
    question: "What is the capital of Spain?",
    answers: [
      { text: "Madrid", correct: true },
      { text: "Barcelona", correct: false },
      { text: "Rome", correct: false },
      { text: "Paris", correct: false },
    ],
  },
  {
    //25
    question: "What is the capital of Canada?",
    answers: [
      { text: "Toronto", correct: false },
      { text: "Montreal", correct: false },
      { text: "Ottawa", correct: true },
      { text: "Vancouver", correct: false },
    ],
  },
  {
    //26
    question: "What is the largest organ in the human body?",
    answers: [
      { text: "Heart", correct: false },
      { text: "Liver", correct: false },
      { text: "Brain", correct: false },
      { text: "Skin", correct: true },
    ],
  },
  {
    //27
    question: "Who is the author of Harry Potter book series?",
    answers: [
      { text: "Stephen King", correct: false },
      { text: "J.K Rowling", correct: true },
      { text: "George R.R Martin", correct: false },
      { text: "Dan Brown", correct: false },
    ],
  },
  {
    //28
    question: "Who is the author of the famous play Romero and Juliet?",
    answers: [
      { text: "Jane Austen", correct: false },
      { text: "George Orwell", correct: false },
      { text: "Oscar Wilde", correct: false },
      { text: "William Shakespeare", correct: true },
    ],
  },
  {
    //29
    question: "What is the symbol for the chemical element oxygen?",
    answers: [
      { text: "O", correct: true },
      { text: "H", correct: false },
      { text: "N", correct: false },
      { text: "C", correct: false },
    ],
  },
  {
    //30
    question: "What is the chemical symbol for the element gold?",
    answers: [
      { text: "Hg", correct: false },
      { text: "Fe", correct: false },
      { text: "Ag", correct: false },
      { text: "Au", correct: true },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answerButtons");
const nextButton = document.getElementById("nextBtn");
const history = [];

// let currentQuestionIndex = Math.floor(Math.random() * 31); // 0 --> 3
// console.log(currentQuestionIndex)
let questionNum = 1;
let score = 0;

function startQuiz() {
  // currentQuestionIndex = 0;
  score = 0;
  // nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  // console.log(history);
  nextButton.innerHTML = "Next";
  let currentQuestionIndex = Math.floor(Math.random() * 30);
  if (history.includes(currentQuestionIndex)) {
    // console.log("Repetation occur")
    currentQuestionIndex = Math.floor(Math.random() * 30);
    if (history.includes(currentQuestionIndex)) {
      // console.log("Double Repetation")
      currentQuestionIndex = Math.floor(Math.random() * 30);
    }
  }
  let currentQuestion = questions[currentQuestionIndex];

  // console.log(currentQuestionIndex);
  // let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNum + "." + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    // the main is you need to put dataset for ture answer form 4 of them
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
  questionNum++;
  if (questionNum > 11) {
    // console.log("Showing Score")
    showScore();
    score = 0;
    questionNum = 1;
    history.splice(0, history.length);
    // return; I can use return but It may cause a duplication...upon last question
  }
  history.push(currentQuestionIndex);
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
    // console.log(answerButtons.firstChild)
  }
}

const selectAnswer = (e) => {
  const selectBtn = e.target;
  const isCorrect = selectBtn.dataset.correct === "true";
  if (isCorrect) {
    selectBtn.classList.add("correct");
    score++;
  } else {
    selectBtn.classList.add("incorrect");
  }

  /* important thing is this class list adding is in for 
  each loop so whatever the answer is right or worng 
  it will show the right answer and will add correct classlist*/
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = "true";
  });
  nextButton.style.display = "block";
};

function showScore() {
  resetState();
  questionElement.innerHTML = `You scored ${score} out of the 10!`;
  nextButton.innerHTML = "Play again";
  nextButton.style.display = "block";
}
function handleNextButton() {
  // currentQuestionIndex++;

  showQuestion();
  // console.log(" Showing Question")
}

nextButton.addEventListener("click", () => {
  handleNextButton();
});

startQuiz();
