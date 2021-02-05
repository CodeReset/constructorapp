import * as Yup from 'yup';

export const validationForgot = Yup.object({
  email: Yup.string()
    .email('Введите почту в коректной форме')
    .required('Данное поле является обязательной*'),
});
