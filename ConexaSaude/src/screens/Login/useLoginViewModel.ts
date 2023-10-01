import { Keyboard } from 'react-native';

import { useAuth } from '@hooks/useAuth';

export function useLoginViewModel() {
  const { handleSaveToken } = useAuth();

  const handleLogin = () => {
    handleSaveToken('token_mock');
  };

  const handleDismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return { handleLogin, handleDismissKeyboard };
}
