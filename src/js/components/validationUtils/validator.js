import JustValidate from 'just-validate';
import JustValidatePluginDate from 'just-validate-plugin-date';
import { form, emailInput, expInput } from '../pageElements/pageElementsExports';

const rules = {
  required: {
    rule: 'required',
    errorMessage: 'Поле обязательно для заполнения',
  },
  email: {
    rule: 'email',
    errorMessage: 'Некорректный формат email',
  },
  monthFormat: {
    rule: 'customRegexp',
    value: /^([0][1-9]|1[0-2])\/\d{2}$/,
    errorMessage: 'Введите дату как на карте',
  },
  dateValidation: {
    plugin: JustValidatePluginDate(() => ({
      format: 'MM/yy',
      isAfter: new Date(new Date().getFullYear(), new Date().getMonth()),
    })),
    errorMessage: 'Срок действия карты закончился',
  },
};

const validator = new JustValidate(form, {
  errorLabelCssClass: ['error-message'],
});

validator
  .addField(expInput, [rules.required, rules.monthFormat, rules.dateValidation])
  .addField(emailInput, [rules.required, rules.email])
  .onSuccess(() => {
    form.submit();
  });

export default validator;
