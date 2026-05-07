const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const toggleAnsBtn = document.querySelector(".toggle-ans-btn");
const questionBox = document.querySelector(".ques-container");
const answerBox = document.querySelector(".ans-container");
const progressBar = document.querySelector(".progress-fill");
const question = document.querySelector(".question");
const answer = document.querySelector(".answer");
const quesNo = document.querySelector(".ques-no");
const totalQnSpan = document.querySelector(".total-qns");

const questionsList = [];
const usedIndexes = new Set();
const totalQuestion = 10;
let currentQnIdx = 0;

const updateUI = function () {
  const percentage = Math.trunc(((currentQnIdx) * 100) / totalQuestion);
  progressBar.style.width = `${percentage}%`;
  progressBar.style.setProperty("--progress-text", `"${percentage}%"`);
  quesNo.textContent = currentQnIdx;
};

const hideAnswer = function () {
  if (questionBox.classList.contains("hide")) {
    questionBox.classList.toggle("hide");
    answerBox.classList.toggle("hide");
    toggleAnsBtn.textContent = "Show Answer";
  }
};

const nextQuestion = function () {
  if (currentQnIdx === totalQuestion) return;

  hideAnswer();

  if (currentQnIdx < questionsList.length) {
    question.textContent = questionsList[currentQnIdx].question;
    answer.textContent = questionsList[currentQnIdx].answer;
    currentQnIdx++;
    updateUI();
    return;
  }
  let randomIdx;
  do {
    randomIdx = Math.trunc(Math.random() * questions.length);
  } while (usedIndexes.has(randomIdx));

  questionsList.push(questions[randomIdx]);
  usedIndexes.add(randomIdx);

  question.textContent = questions[randomIdx].question;
  answer.textContent = questions[randomIdx].answer;

  currentQnIdx++;

  updateUI();
};

const prevQuestion = function () {
  if (currentQnIdx === 0) return;

  hideAnswer();

  currentQnIdx--;
  console.log(currentQnIdx);

  question.textContent = questionsList[currentQnIdx ].question;
  answer.textContent = questionsList[currentQnIdx ].answer;
  updateUI();
};

const toggleAnswer = function () {
  questionBox.classList.toggle("hide");
  answerBox.classList.toggle("hide");
  toggleAnsBtn.textContent = answerBox.classList.contains("hide")
    ? "Show Answer"
    : "Hide Answer";
};

nextBtn.addEventListener("click", nextQuestion);
prevBtn.addEventListener("click", prevQuestion);
toggleAnsBtn.addEventListener("click", toggleAnswer);

progressBar.style.width = `0%`;
progressBar.style.setProperty("--progress-text", `"0%"`);