import cardNumberValidation from '../src/js/components/validationUtils/cardNumberValidation';

describe('Валидация номера карты', () => {
  it('Валидация номера карты пропускает корректный номер карты', () => {
    const cardNumber = '4111111111111111';
    expect(cardNumberValidation(cardNumber)).toBe(true);
  });

  it('Валидация номера карты не пропускает нецифровые символы', () => {
    const cardNumber = '!@#$%^&*2 .-=+aAzЩф';
    expect(cardNumberValidation(cardNumber)).toBe(false);
  });

  it('Валидация номера карты не пропускает строку с недостаточным количеством цифр', () => {
    const cardNumber = '12345';
    expect(cardNumberValidation(cardNumber)).toBeFalsy();
  });

  it('Валидация номера карты не пропускает строку со слишком большим количеством цифр (> 19)', () => {
    const cardNumber = '12345123451234512345';
    expect(cardNumberValidation(cardNumber)).toBeFalsy();
  });
});
