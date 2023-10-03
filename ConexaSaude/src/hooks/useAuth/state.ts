import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

import { AuthStateProps } from './types';

export const useAuthState = create(
  persist<AuthStateProps>(
    (set) => ({
      _hasHydrated: false,
      token: null,
      setToken: (token: string | null) => set({ token }),
      name: null,
      setName: (name: string | null) => set({ name }),
      email: null,
      setEmail: (email: string | null) => set({ email }),
    }),
    {
      name: 'useAuthState',
      storage: createJSONStorage(() => AsyncStorage),
      onRehydrateStorage: () => () => {
        useAuthState.setState({ _hasHydrated: true });
      },
    },
  ),
);
