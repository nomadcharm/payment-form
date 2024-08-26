import { form, submitBtn } from '../pageElements/pageElementsExports';

const validateForm = () => {
  let isValid = true;
  const inputs = form.querySelectorAll('.form__input');
  inputs.forEach((input) => {
    if (input.parentNode.querySelector('.error-message') || input.value === '') {
      isValid = false;
    }
  });

  submitBtn.disabled = !isValid;
};

export default validateForm;
