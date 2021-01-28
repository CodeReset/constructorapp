import * as Yup from 'yup';

export const validationRegistrSchema = Yup.object({
  fullname: Yup.string()
    .required('Данное поле является обязательной*')
    .max(15, 'Имя должен содержать не более 20 символов')
    .min(2, 'Имя должен содержать не менее 2 символов'),
  email: Yup.string()
    .email('Введите почту в коректной форме')
    .required('Данное поле является обязательной*'),
  password: Yup.string()
    .required('Данное поле является обязательной*')
    .max(12, 'Пароль должен содержать не более 12 символов')
    .min(6, 'Пароль должен содержать не менее 6 символов'),
});
