// I referenced this article for generating random background colors:
//https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php

const interval = document.getElementById("interval");
const button = document.getElementById("mixBut");
let intervalValue;
let running = false;

button.addEventListener("click", handleInput);

function changeBackground() {
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256);

  const randColor = "rgb(" + x + "," + y + "," + z + ")";
  document.body.style.backgroundColor = randColor;
}

function handleInput() {
  if (running) {
    clearInterval(intervalValue);
    button.textContent = "Start";
    button.classList.remove("btn-danger");
    button.classList.add("btn-primary");
    running = false;
  } else {
    if (interval.value <= 0 || !interval.value) {
      return;
    }
    if (intervalValue) {
      clearInterval(intervalValue);
    }
    intervalValue = setInterval(changeBackground, interval.value * 1000);

    //change button
    running = true;
    button.textContent = "Stop";
    button.classList.remove("btn-primary");
    button.classList.add("btn-danger");
  }
}
