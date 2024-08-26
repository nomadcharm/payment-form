import IMask from 'imask';
import { cardNumInput, cvcInput, expInput } from '../pageElements/pageElementsExports';

IMask(cardNumInput, {
  mask: '0000 0000 0000 0000 [ 000]',
});

IMask(expInput, {
  mask: '00/00',
});

IMask(cvcInput, {
  mask: '000',
});
