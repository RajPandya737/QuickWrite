let timerId; 

function startTimer() {
  let seconds = 15;
  const timerElement = document.getElementById('timer');

  function updateTimer() {
    if (seconds >= 0) {
      timerElement.textContent = seconds;
      seconds--;
      timerId = setTimeout(updateTimer, 1000);
    } else {
      timerElement.textContent = 'Time is up!';
    }
  }
  if (timerId) {
    clearTimeout(timerId);
  }
  updateTimer();
}
window.startTimer = startTimer;

startTimer();
