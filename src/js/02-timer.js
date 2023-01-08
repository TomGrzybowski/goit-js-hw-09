import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const dateInput = document.querySelector('#datetime-picker');
const daysLeft = document.querySelector('[data-days]');
const hoursLeft = document.querySelector('[data-hours]');
const minutesLeft = document.querySelector('[data-minutes]');
const secondsLeft = document.querySelector('[data-seconds]');
const startButton = document.querySelector('[data-start');
let timer = null;
startButton.setAttribute('disabled', '');
startButton.addEventListener('click', handleStart);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] > Date.now()) {
      console.log(selectedDates[0]);
      startButton.removeAttribute('disabled');
    } else {
      startButton.setAttribute('disabled', '');
      Notiflix.Notify.failure('Please choose a date in the future');
    }
  },
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function handleStart(e) {
  let timeEnd = new Date(dateInput.value).getTime();
  clearInterval(timer);

  timer = setInterval(() => {
    let timestart = Date.now();
    let timeLeft = convertMs(timeEnd - timestart);
    if (timeEnd - timestart <= 0) {
      clearInterval(timer);
      Notiflix.Notify.success('Timer Reached 0!');
    } else {
      daysLeft.textContent = addLeadingZero(timeLeft.days);
      hoursLeft.textContent = addLeadingZero(timeLeft.hours);
      minutesLeft.textContent = addLeadingZero(timeLeft.minutes);
      secondsLeft.textContent = addLeadingZero(timeLeft.seconds);
    }
  }, 1000);
}

flatpickr('#datetime-picker', options);
