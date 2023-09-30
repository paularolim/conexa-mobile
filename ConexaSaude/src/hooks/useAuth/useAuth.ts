import { useMemo } from 'react';

import { useAuthState } from './state';

export function useAuth() {
  const { token, setToken } = useAuthState();

  const isLogged = useMemo(() => Boolean(token), [token]);

  const handleLogin = () => {
    setToken('token_mock');
  };

  const handleLogout = () => {
    setToken(null);
  };

  return { isLogged, handleLogin, handleLogout };
}
