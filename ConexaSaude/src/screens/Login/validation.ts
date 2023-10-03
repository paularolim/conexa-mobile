import * as yup from 'yup';

export const schema = yup
  .object({
    email: yup.string().email('Digite um e-mail válido').required('E-mail não informado!'),
    password: yup.string().required('Senha não informada!'),
  })
  .required();
