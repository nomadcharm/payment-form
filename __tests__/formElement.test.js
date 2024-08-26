import form from '../src/js/components/pageElements/formElement';

describe('Проверка функции создания DOM-дерева', () => {
  const DOMElement = form;

  it('Функция возвращает DOM-элемент', () => {
    expect(DOMElement).toBeInstanceOf(HTMLFormElement);
  });

  it('В созданном DOM-элементе содержится строго четыре поля для ввода', () => {
    const inputFields = DOMElement.querySelectorAll('.form__input');
    expect(inputFields.length).toEqual(4);
  });

  it('Проверка наличия нужных placeholder', () => {
    const inputLabels = DOMElement.querySelectorAll('.form__label');
    const inputLabelsText = ['Номер карты*', 'ММ/ГГ*', 'CVC/CVV*', 'Email*'];

    inputLabels.forEach((label, i) => {
      expect(label.textContent).toBe(inputLabelsText[i]);
    });
  });
});
