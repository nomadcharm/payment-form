import { discover, jcb, maestro, mastercard, mir, unionPay, visa } from './../../imgImports';
import { cardTypeDisplay } from '../pageElementsExports';

// eslint-disable-next-line no-undef
const { number } = require('card-validator');

// отображение типа карты
const defineCardType = (e) => {
  const cardNumberWithoutSpaces = e.target.value.replace(/\s/g, '');
  const validatedCardNumber = number(cardNumberWithoutSpaces);

  if (!validatedCardNumber.card) {
    cardTypeDisplay.src = visa;
  } else if (cardNumberWithoutSpaces.length > 4) {
    const cardType = validatedCardNumber.card.niceType;

    switch (cardType) {
      case 'Discover':
        cardTypeDisplay.src = discover;
        break;
      case 'JCB':
        cardTypeDisplay.src = jcb;
        break;
      case 'Maestro':
        cardTypeDisplay.src = maestro;
        break;
      case 'Mastercard':
        cardTypeDisplay.src = mastercard;
        break;
      case 'Mir':
        cardTypeDisplay.src = mir;
        break;
      case 'UnionPay':
        cardTypeDisplay.src = unionPay;
        break;
      case 'Visa':
        cardTypeDisplay.src = visa;
        break;
      default:
        cardTypeDisplay.src = visa;
        break;
    }
  }
};

export default defineCardType;
