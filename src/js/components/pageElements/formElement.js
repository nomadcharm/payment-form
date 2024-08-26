import { el } from 'redom';

const form = el('form', { class: 'form', id: 'form' }, [
  el('div', { class: 'form__input-group' }, [
    el('label', { class: 'form__label', for: 'card-number' }, 'Номер карты*'),
    el('input', { class: 'form__input', id: 'card-number' }),
  ]),
  el('div', { class: 'form__input-group' }, [
    el('label', { class: 'form__label', for: 'card-exp' }, 'ММ/ГГ*'),
    el('input', { class: 'form__input', id: 'card-exp' }),
  ]),
  el('div', { class: 'form__input-group' }, [
    el('label', { class: 'form__label', for: 'card-cvc' }, 'CVC/CVV*'),
    el('input', { class: 'form__input', id: 'card-cvc' }),
  ]),
  el('div', { class: 'form__input-group' }, [
    el('label', { class: 'form__label', for: 'card-email' }, 'Email*'),
    el('input', { class: 'form__input', id: 'card-email', type: 'email' }),
  ]),
  el('button', { class: 'button-reset form__submit', type: 'submit', disabled: 'true' }, 'Оплатить'),
]);

export default form;
