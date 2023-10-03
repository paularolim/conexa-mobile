import { yupResolver } from '@hookform/resolvers/yup';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { Keyboard } from 'react-native';

import { useLogin } from '@hooks/useLogin';

import { LoginSchema } from './types';
import { schema } from './validation';

export function useLoginViewModel() {
  const { fetchLogin, error, loading } = useLogin();

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<LoginSchema>({ resolver: yupResolver(schema) });

  const errorMessage = useMemo(
    () =>
      errors.email?.message ||
      errors.password?.message ||
      (error ? 'Não foi possível realizar o login.' : null),
    [error, errors.email?.message, errors.password?.message],
  );

  const handleLogin = (email: string, password: string) => {
    fetchLogin({ email, password });
  };

  const handleDismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const onSubmit = handleSubmit(({ email, password }) => handleLogin(email, password));

  return { handleDismissKeyboard, onSubmit, errorMessage, control, loading };
}
