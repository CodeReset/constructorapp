import * as Yup from 'yup';

export const validationChangeSchema = Yup.object({
  oldPassword: Yup.string()
    .required('Данное поле является обязательной*')
    .max(12, 'Пароль должен содержать не более 12 символов')
    .min(6, 'Пароль должен содержать не менее 6 символов'),
  newPassword: Yup.string()
    .required('Данное поле является обязательной*')
    .max(12, 'Пароль должен содержать не более 12 символов')
    .min(6, 'Пароль должен содержать не менее 6 символов'),
  confirmPassword: Yup.string()
    .required('Данное поле является обязательной*')
    .max(12, 'Пароль должен содержать не более 12 символов')
    .min(6, 'Пароль должен содержать не менее 6 символов')
    .oneOf([Yup.ref('newPassword'), null], 'Пароли не совпадают*'),
});
