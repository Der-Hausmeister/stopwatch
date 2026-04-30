let timerId = -1;
let time = 0;

function padTime(timeString) {
  return String(timeString).padStart(2, '0');
}

function getStopwatchTime() {
  const convertedTime = new Date(time);
  const mills = padTime(convertedTime.getMilliseconds() / 10);
  const secs = padTime(convertedTime.getSeconds());
  const mins = padTime(convertedTime.getMinutes());
  return `${mins}:${secs}:${mills}`;
}

function updateCurrentStopWatchTime() {
  document.getElementById('timer').innerText = getStopwatchTime();
}

function startStopwatch() {
  if (timerId !== -1) {
    // stopwatch is already running
    return;
  }

  timerId = setInterval(() => {
    time += 10;
    updateCurrentStopWatchTime();
  }, 10);
}

function stopStopwatch() {
  if (timerId !== -1) {
    clearInterval(timerId);
  }
  timerId = -1;
}

function resetStopwatch() {
  stopStopwatch();
  time = 0;
  updateCurrentStopWatchTime();
  document.getElementById('laps').innerHTML = '';
}

function createLapItem() {
  return `<li>${getStopwatchTime()}</li>`;
}

function addLap() {
  document.getElementById('laps').innerHTML += createLapItem();
}
