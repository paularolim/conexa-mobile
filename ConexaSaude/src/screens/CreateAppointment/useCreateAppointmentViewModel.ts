import { yupResolver } from '@hookform/resolvers/yup';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { Alert, Keyboard } from 'react-native';

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
    () => errors.patient?.message || errors.date?.message || errors.observation?.message || null,
    [errors.date?.message, errors.observation?.message, errors.patient?.message],
  );

  const handleDismissKeyboard = () => Keyboard.dismiss();

  const onSuccess = () => {
    reset();
    Alert.alert('Sucesso', 'A consulta foi salva!');
  };

  const onSubmit = handleSubmit((data) => {
    fetchCreateAppointment(data, onSuccess);
  });

  return {
    errorMessage: error ? 'Não foi possível salvar a consulta.' : errorMessage,
    control,
    loading,
    onSubmit,
    handleDismissKeyboard,
  };
}
