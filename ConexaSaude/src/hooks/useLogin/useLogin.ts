import { useCallback, useState } from 'react';

import { useAuth } from '@hooks/useAuth';
import { client } from '@repositories/client';

import { Login, LoginResponse } from './types';

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const { handleSaveData } = useAuth();

  const fetchLogin = useCallback(
    async ({ email, password }: Login) => {
      setLoading(true);
      setError(false);

      try {
        const { data } = await client.post<LoginResponse>('login', { email, password });
        if (data.data.token && data.data.email && data.data.nome) {
          handleSaveData({
            token: data.data.token,
            email: data.data.email,
            name: data.data.nome,
          });
          setLoading(false);
          setError(false);
        }
      } catch (reason) {
        setLoading(false);
        setError(true);
      }
    },
    [handleSaveData],
  );

  return {
    fetchLogin,
    loading,
    error,
  };
}
