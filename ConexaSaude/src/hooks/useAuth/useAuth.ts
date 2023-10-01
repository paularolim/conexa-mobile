import { useMemo } from 'react';

import { useAuthState } from './state';

export function useAuth() {
  const { token, setToken } = useAuthState();

  const isLogged = useMemo(() => Boolean(token), [token]);

  const handleSaveToken = (data: string) => {
    setToken(data);
  };

  const handleLogout = () => {
    setToken(null);
  };

  return { isLogged, handleSaveToken, handleLogout };
}
