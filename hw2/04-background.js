// I referenced this article for generating random background colors:
//https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php

const interval = document.getElementById("interval");
const button = document.getElementById("startButton");
let intervalValue;

button.addEventListener("click", handleInput);

function changeBackground() {
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256);

  const randColor = "rgb(" + x + "," + y + "," + z + ")";
  document.body.style.backgroundColor = randColor;
}

function handleInput() {
  //error checking so colors don't switch insanely fast
  if (interval.value <= 0 || !interval.value) {
    return;
  }
  if (intervalValue) {
    clearInterval(intervalValue);
  }
  intervalValue = setInterval(changeBackground, interval.value * 1000);
}
