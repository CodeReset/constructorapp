import * as Yup from 'yup';

export const validationLoginSchema = Yup.object({
  email: Yup.string()
    .email('Введите почту в коректной форме')
    .required('Данное поле является обязательной*'),
  password: Yup.string()
    .required('Данное поле является обязательной*')
    .max(22, 'Пароль должен содержать не более 12 символов')
    .min(6, 'Пароль должен содержать не менее 6 символов'),
});
