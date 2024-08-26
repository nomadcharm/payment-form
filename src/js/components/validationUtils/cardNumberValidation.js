import luhn from 'luhn';
import { cardNumInput } from '../pageElements/pageElementsExports';
import errorMessage from './errorHandling';

const cardNumberValidation = (cardNumber) => {
  // проверка поля на заполнение
  if (cardNumber.length === 0) {
    errorMessage(cardNumInput, 'Поле обязательно для заполнения');
    return false;
  } else if (cardNumber.length < 16) {
    // проверка на минимальное приемлемое кол - во цифр(16)
    errorMessage(cardNumInput, 'Номер карты должен содержать не менее 16 цифр');
    return false;
  } else if (!luhn.validate(cardNumber)) {
    // проверка номера карты на корректность
    errorMessage(cardNumInput, 'Карты с таким номером не существует');
    return false;
  } else {
    return true;
  }
};

export default cardNumberValidation;
