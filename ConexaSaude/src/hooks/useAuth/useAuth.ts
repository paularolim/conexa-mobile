import { useMemo } from 'react';

import { useAuthState } from './state';
import { UserProps } from './types';

export function useAuth() {
  const { token, setToken, name, setName, setEmail, email } = useAuthState();

  const isLogged = useMemo(() => Boolean(token), [token]);

  const handleSaveData = (data: UserProps) => {
    setToken(data.token);
    setName(data.name);
    setEmail(data.email);
  };

  const handleLogout = () => {
    setToken(null);
    setName(null);
    setEmail(null);
  };

  return { isLogged, handleSaveData, handleLogout, name, email, token };
}
