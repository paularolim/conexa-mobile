import * as yup from 'yup';

export const schema = yup
  .object({
    patient: yup.string().required('Nome do paciente não informado!'),
    date: yup.date().required('Data não informada!').default(new Date()),
    observation: yup.string().required('Observação não informada!'),
  })
  .required();
