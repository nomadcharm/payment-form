import { el, setChildren } from 'redom';
import form from './formElement';
import card from './cardElement';
import 'normalize.css';
import '../../../sass/main.scss';

const { body } = window.document;
const main = el('main', { class: 'main' });
const section = el('section', { class: 'payment' });
const container = el('div', { class: 'container' });
const title = el('h1', { class: 'payment__title' }, 'Страница оплаты');
const content = el('div', { class: 'payment__content' });

setChildren(body, main);
setChildren(main, section);
setChildren(section, container);
setChildren(container, [title, content]);
setChildren(content, [card, form]);
