import cvcInputValidation from '../src/js/components/validationUtils/cvcValidation';

describe('', () => {
  it('Валидация CVV/CVC пропускает строку с тремя цифровыми символами', () => {
    const inputValue = '123';
    expect(cvcInputValidation(inputValue)).toBeTruthy();
  });

  it('Валидация CVV/CVC не пропускает строки с 1-2 цифровыми символами', () => {
    const inputValue = '13';
    expect(cvcInputValidation(inputValue)).toBeFalsy();
  });

  it('Валидация CVV/CVC не пропускает строки с 4+ цифровыми символами', () => {
    const inputValue = '1234';
    expect(cvcInputValidation(inputValue)).toBeFalsy();
  });

  it('Валидация CVV/CVC не пропускает строки с тремя нецифровыми символами', () => {
    const inputValue = 'Ab!';
    expect(cvcInputValidation(inputValue)).toBeFalsy();
  });
});
