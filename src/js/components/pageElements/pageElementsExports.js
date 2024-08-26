const form = document.getElementById('form');
const cardNumInput = document.getElementById('card-number');
const expInput = document.getElementById('card-exp');
const cvcInput = document.getElementById('card-cvc');
const emailInput = document.getElementById('card-email');
const submitBtn = document.querySelector('.form__submit');

const cardFront = document.querySelector('.card__front');
const cardBack = document.querySelector('.card__back');
const cardNumOutput = document.querySelector('.card__number-output');
const expOutput = document.getElementById('exp-output');
const cvcOutput = document.querySelector('.card__cvc-output');
const cardTypeDisplay = document.querySelector('.card__type');

export {
  form,
  cardNumInput,
  expInput,
  cvcInput,
  emailInput,
  submitBtn,
  cardFront,
  cardBack,
  cardNumOutput,
  expOutput,
  cvcOutput,
  cardTypeDisplay,
};
