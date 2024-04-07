// Get elements
const timeDisplay = document.querySelector(".time-display"); // Selects the element displaying time
const startBtn = document.getElementById("startBtn"); // Selects the start button
const stopBtn = document.getElementById("stopBtn"); // Selects the stop button
const resetBtn = document.getElementById("resetBtn"); // Selects the reset button

let startTime; // Stores the timestamp when the stopwatch starts
let elapsedTime = 0; // Stores the total elapsed time in milliseconds
let timerInterval; // Holds the reference to the timer for updating the time display

// Format the time in HH:MM:SS format
function formatTime(time) {
  const hours = Math.floor(time / 3600000); // Calculates hours
  const minutes = Math.floor((time % 3600000) / 60000); // Calculates minutes
  const seconds = Math.floor((time % 60000) /1000); // Calculates seconds
  const milliseconds = Math.floor(time % 1000); // Calculates milliseconds

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
    2,
    "0"
  )}:${String(seconds).padStart(2, "0")}:${String(milliseconds).padStart(3, "0")}`; // Formats time as HH:MM:SS:MMM
}

// Event listener for start button
startBtn.addEventListener("click", function () {
  if (!timerInterval) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(function () {
      elapsedTime = Date.now() - startTime;
      timeDisplay.textContent = formatTime(elapsedTime); // Updates time display every second
    }, 1);
  }
});

// Event listener for stop button
stopBtn.addEventListener("click", function () {
  clearInterval(timerInterval); // Stops the timer
  timerInterval = null; // Resets timer reference
});


// Event listener for reset button
resetBtn.addEventListener("click", function () {
  clearInterval(timerInterval); // Stops the timer
  timerInterval = null; // Resets timer reference
  elapsedTime = 0; // Resets elapsed time
  timeDisplay.textContent = "00:00:00:000"; // Resets time display
  
});
