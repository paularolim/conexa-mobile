import { yupResolver } from '@hookform/resolvers/yup';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { Alert } from 'react-native';

import { useCreateAppointment } from '@hooks/useCreateAppointment';

import { CreateAppointmentSchema } from './types';
import { schema } from './validation';

export function useCreateAppointmentViewModel() {
  const { fetchCreateAppointment, error, loading } = useCreateAppointment();

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<CreateAppointmentSchema>({ resolver: yupResolver(schema) });

  const errorMessage = useMemo(
    () =>
      errors.patient?.message ||
      errors.date?.message ||
      errors.observation?.message ||
      (error ? 'Não foi possível salvar a consulta.' : null),
    [error, errors.date?.message, errors.observation?.message, errors.patient?.message],
  );

  const onSubmit = handleSubmit((data) => {
    fetchCreateAppointment(data).then(() => {
      reset();
      Alert.alert('Sucesso', 'A consulta foi salva!');
    });
  });

  return { errorMessage, control, loading, onSubmit };
}
