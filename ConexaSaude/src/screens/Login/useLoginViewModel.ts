import { yupResolver } from '@hookform/resolvers/yup';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { Keyboard } from 'react-native';

import { useAuth } from '@hooks/useAuth';
import { loginRepository } from '@repositories/login-repository';

import { LoginSchema } from './types';
import { schema } from './validation';

export function useLoginViewModel() {
  const { handleSaveData } = useAuth();

  const {
    handleSubmit,
    formState: { errors },
    control,
    setError,
  } = useForm<LoginSchema>({ resolver: yupResolver(schema) });

  const errorMessage = useMemo(
    () => errors.email?.message || errors.password?.message,
    [errors.email?.message, errors.password?.message],
  );

  const handleLogin = (email: string, password: string) => {
    loginRepository({ email, password })
      .then((data) => {
        if (data?.data.token && data?.data.nome && data?.data.email) {
          handleSaveData({
            token: data?.data.token,
            email: data?.data.email,
            name: data?.data.nome,
          });
        } else {
          setError('email', { message: 'Não foi possível realizar o login.' });
        }
      })
      .catch(() => {
        setError('email', { message: 'Não foi possível realizar o login.' });
      });
  };

  const handleDismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const onSubmit = handleSubmit(({ email, password }) => handleLogin(email, password));

  return { handleDismissKeyboard, onSubmit, errorMessage, control };
}
