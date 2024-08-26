import {
  cardFront,
  cardBack,
  cardNumInput,
  cardNumOutput,
  cvcInput,
  cvcOutput,
  expInput,
  expOutput,
} from '../pageElementsExports';

let cardNumValue = '';
let expValue = '';
let cvcValue = '';

// заполнение номера карты
cardNumInput.addEventListener('input', () => {
  cardNumValue = cardNumInput.value.trim();
  cardNumOutput.textContent = cardNumValue;

  if (cardNumValue === '') {
    cardNumOutput.textContent = '#### #### #### ####';
  }
});

// заполнение срока действия карты
expInput.addEventListener('input', () => {
  expValue = expInput.value.trim();
  expOutput.textContent = expValue;

  if (expValue === '') {
    expOutput.textContent = '00/00';
  }
});

// поворот карты на переходе в CVC input
cvcInput.onfocus = () => {
  cardFront.style.transform = 'rotateY(-180deg)';
  cardBack.style.transform = 'rotateY(0deg)';
};

// поворот карты на лицевую сторону
cvcInput.onblur = () => {
  cardFront.style.transform = 'rotateY(0deg)';
  cardBack.style.transform = 'rotateY(180deg)';
};

// заполнение CVC кода
cvcInput.addEventListener('input', () => {
  cvcValue = cvcInput.value;
  cvcOutput.textContent = cvcValue;

  if (cvcValue === '') {
    cvcOutput.textContent = '•••';
  }
});
