/* eslint-disable no-console */
import { useState } from 'react';
import { Keyboard } from 'react-native';

import { useAuth } from '@hooks/useAuth';
import { loginRepository } from '@repositories/login-repository';

export function useLoginViewModel() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { handleSaveData } = useAuth();

  const handleLogin = () => {
    if (!email && !password) {
      // TODO: implement validation
      console.log('handleLogin - email and password is required');
      return;
    }

    loginRepository({ email, password })
      .then((data) => {
        if (data?.data.token && data?.data.nome && data?.data.email) {
          handleSaveData({
            token: data?.data.token,
            email: data?.data.email,
            name: data?.data.nome,
          });
        } else {
          // TODO: error feedback
          console.log('handleLogin - error on login');
        }
      })
      .catch((reason) => {
        // TODO: error feedback
        console.log(`handleLogin - ${reason}`);
      });
  };

  const handleDismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return { handleLogin, handleDismissKeyboard, email, setEmail, password, setPassword };
}
