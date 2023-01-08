const startButton = document.querySelector('[data-start]');
const stopButton = document.querySelector('[data-stop]');
const body = document.querySelector('body');
let colorSwitcher = null;

startButton.addEventListener('click', handleStart);
stopButton.addEventListener('click', handleStop);
stopButton.setAttribute('disabled', '');

function handleStart(e) {
  startButton.setAttribute('disabled', '');
  stopButton.removeAttribute('disabled');
  body.style.backgroundColor = getRandomHexColor();
  colorSwitcher = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}
function handleStop(e) {
  stopButton.setAttribute('disabled', '');
  startButton.removeAttribute('disabled');

  clearInterval(colorSwitcher);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
