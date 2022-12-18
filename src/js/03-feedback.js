const throttle = require('lodash.throttle');

const form = document.querySelector('form');

const feedbackFormState = {};

function loadDataFromStorage() {
  const value = JSON.parse(localStorage.getItem('feedback-form-state'));
  for (const elem of form.elements) {
    if (elem.nodeName === 'BUTTON') {
      continue;
    }
    feedbackFormState[elem.name] = '';
    try {
      const valueElem = value[elem.name];
      if (valueElem) {
        elem.value = valueElem;
        feedbackFormState[elem.name] = valueElem;
      }
    } catch {
      elem.value = '';
    }
  }
}

function onFormInput(event) {
  feedbackFormState[event.target.name] = event.target.value;
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify(feedbackFormState)
  );
}

function onFormSubmit(event) {
  event.preventDefault();
  console.log(feedbackFormState);
  //   feedbackFormState = {};
  localStorage.removeItem('feedback-form-state');
  loadDataFromStorage();
}

form.addEventListener('input', throttle(onFormInput, 500));

form.addEventListener('submit', onFormSubmit);

loadDataFromStorage();
