import { el } from 'redom';

const errorMessage = (input, message) => {
  const errorLabel = el('div', { class: 'error-message' });

  if (input) {
    // удаление имеющегося сообщения об ошибке, если есть
    const existingErrorLabel = input.parentNode.querySelector('.error-message');
    if (existingErrorLabel) {
      existingErrorLabel.remove();
    }

    errorLabel.textContent = message;
    input.parentNode.appendChild(errorLabel);
  }
};

export default errorMessage;
