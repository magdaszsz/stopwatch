const startBtn = document.querySelector(".start");
const pauseBtn = document.querySelector(".pause");
const stopBtn = document.querySelector(".stop");
const minutesDiv = document.querySelector(".minutes");
const secondsDiv = document.querySelector(".seconds");
const milisecondsDiv = document.querySelector(".miliseconds");
const allDigits = document.querySelectorAll(".digits > div");

startBtn.addEventListener("click", startStopwatch);
pauseBtn.addEventListener("click", pauseStopwatch);
stopBtn.addEventListener("click", stopStopwatch);
let intervalID;

function startStopwatch() {
  intervalID = setInterval(start, 10);
}

function pauseStopwatch() {
  clearInterval(intervalID);
}

function stopStopwatch() {
  clearInterval(intervalID);
  miliseconds = 0;
  seconds = 0;
  minutes = 0;
  allDigits.forEach((div) => {
    div.innerText = "00";
  });
}

let miliseconds = 0;
let seconds = 0;
let minutes = 0;

function start() {
  miliseconds++;
  if (miliseconds / 60 === 1) {
    miliseconds = 0;
    seconds++;
  }

  if (seconds / 60 === 1) {
    seconds = 0;
    minutes++;
  }

  milisecondsDiv.innerText = `${String(miliseconds).padStart(2, 0)}`;
  secondsDiv.innerText = `${String(seconds).padStart(2, 0)}`;
  minutesDiv.innerText = `${String(minutes).padStart(2, 0)}`;
}
