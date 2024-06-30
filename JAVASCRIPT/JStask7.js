let train = document.getElementById("train");
let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");

let position = 0;
let interval;

function startAnimation() {
  interval = setInterval(() => {
    position += 2; // Increase position to move the train
    train.style.left = position + "px"; // Update train position
  }, 30); // Adjust speed by changing the interval time
}

function stopAnimation() {
  clearInterval(interval);
}

startButton.addEventListener("click", startAnimation);
stopButton.addEventListener("click", stopAnimation);
