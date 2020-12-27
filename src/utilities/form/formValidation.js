import i18n from 'i18next';

export const required = (value) =>
  value ? undefined : i18n.t('form.validation.required');
export const number = (value) =>
  value && isNaN(Number(value)) ? i18n.t('form.validation.number') : undefined;
export const phoneNumber = (value) =>
  value && !/^([0-9]{10})$/i.test(value)
    ? i18n.t('form.validation.phoneNumber')
    : undefined;
export const email = (value) =>
  value && !/[^\t\r\n]+@[^ \t\r\n]+\.[^\t\r\n]+$/i.test(value)
    ? i18n.t('form.validation.email')
    : undefined;
