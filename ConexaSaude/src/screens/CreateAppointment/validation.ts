import * as yup from 'yup';

export const schema = yup
  .object({
    patient: yup.string().required('Nome do paciente não informado!'),
    date: yup.string().required('Data não informada!'),
    observation: yup.string().required('Observação não informada!'),
  })
  .required();
