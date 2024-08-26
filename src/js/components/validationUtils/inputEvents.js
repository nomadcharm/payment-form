import validateForm from './submitValidationHandler';
import { emailInput, expInput, submitBtn, cvcInput, cardNumInput } from '../pageElements/pageElementsExports';
import cardNumberValidation from './cardNumberValidation';
import cvcInputValidation from './cvcValidation';
import defineCardType from '../pageElements/cardAnimation/cardPaymentTypes';
import validator from './validator';

const inputFields = [expInput, emailInput, cvcInput, cardNumInput];

inputFields.forEach((input) => {
  input.addEventListener('blur', (e) => {
    if (e.target === expInput || e.target === emailInput) {
      validator.revalidateField(e.target);
    } else if (e.target === cardNumInput) {
      const cardNumberWithoutSpaces = e.target.value.replace(/\s/g, '');
      cardNumberValidation(cardNumberWithoutSpaces);
    } else if (e.target === cvcInput) {
      cvcInputValidation(e.target.value);
    }

    setTimeout(() => {
      validateForm();
    }, 300);
  });

  input.addEventListener('input', (e) => {
    submitBtn.disabled = true;
    const errorLabel = e.target.parentNode.querySelector('.error-message');

    if (errorLabel) {
      errorLabel.remove();
    }

    if (e.target === cardNumInput) {
      defineCardType(e);
    }
  });
});
