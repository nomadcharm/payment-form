import { cvcInput } from '../pageElements/pageElementsExports';
import errorMessage from './errorHandling';

const regExp = /[^0-9]/g;

const cvcInputValidation = (cvcCode) => {
  if (cvcCode.length === 0) {
    errorMessage(cvcInput, 'Поле обязательно для заполнения');
    return false;
  } else if (cvcCode.length <= 2) {
    errorMessage(cvcInput, 'CVC/CVV номер должен содержать 3 цифры');
    return false;
  } else if (cvcCode.length > 3) {
    errorMessage(cvcInput, 'CVC/CVV номер должен содержать 3 цифры');
    return false;
  } else if (regExp.test(cvcCode)) {
    return false;
  } else {
    return true;
  }
};

export default cvcInputValidation;
