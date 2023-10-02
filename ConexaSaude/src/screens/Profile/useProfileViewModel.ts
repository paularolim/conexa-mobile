import { useAuth } from '@hooks/useAuth';

export function useProfileViewModel() {
  const { name, email, handleLogout } = useAuth();

  return { name: name || '', email: email || '', handleLogout };
}
