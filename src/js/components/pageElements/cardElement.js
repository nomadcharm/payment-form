import { el } from 'redom';
import { chip, contactless, visa } from '../imgImports';

const card = el('div', { class: 'card' }, [
  el('div', { class: 'card__front' }, [
    el('p', { class: 'card__bank-info' }, 'bank logo ••'),
    el('div', { class: 'card__chips' }, [
      el('img', { src: chip, alt: '', ariaHidden: true }),
      el('img', { src: contactless, alt: '', ariaHidden: true }),
    ]),
    el('div', { class: 'card__plastic-info' }, [
      el('p', { class: 'card__number-output' }, '#### #### #### ####'),
      el('div', { class: 'card__exp-output' }, [el('span', 'Valid thru'), el('span', { id: 'exp-output' }, '00/00')]),
      el('img', { class: 'card__type', src: visa, alt: 'Тип карты' }),
    ]),
  ]),
  el('div', { class: 'card__back' }, [
    el('div', { class: 'card__stripe' }),
    el('div', { class: 'card__cvc' }, [el('p', { class: 'card__cvc-output italic' }, '•••')]),
  ]),
]);

export default card;
