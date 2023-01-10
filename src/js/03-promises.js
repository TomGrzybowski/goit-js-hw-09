import Notiflix from 'notiflix';

const form = document.querySelector('.form');
const button = document.querySelector('#submitter');

form.addEventListener('submit', event => {
  event.preventDefault();
  const promises = createPromises();
});

function createPromises() {
  //disable the button
  button.setAttribute('disabled', '');

  // get the input elements
  const delayInput = form.elements.delay;
  const stepInput = form.elements.step;
  const amountInput = form.elements.amount;

  // get the values from the input elements
  const delay = Number(delayInput.value);
  const step = Number(stepInput.value);
  const amount = Number(amountInput.value);

  //Catch wrong entries
  if (delay < 0 || step < 0 || amount < 0) {
    Notiflix.Notify.failure(`Please select values greater than 0`);
    button.removeAttribute('disabled', '');
    return;
  }

  //Create a single Promise
  function createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.3;
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldResolve) {
          resolve({ position: position, delay: delay });
        } else {
          reject({ position: position, delay: delay });
        }
      }, delay);
    });
    return promise;
  }

  // Run the loop to create promises
  for (let i = 0; i < amount; i++) {
    createPromise(i + 1, delay + i * step)
      .then(({ position, delay }) => {
        //reenable the button after last promise
        if (position === amount) {
          button.removeAttribute('disabled', '');
        }
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        if (position === amount) {
          button.removeAttribute('disabled', '');
        }
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
}
