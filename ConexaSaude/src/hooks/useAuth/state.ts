import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface AuthStateProps {
  token: string | null;
  setToken: (token: string | null) => void;
}

export const useAuthState = create(
  persist<AuthStateProps>(
    (set) => ({
      token: null,
      setToken: (token: string | null) => set({ token }),
    }),
    { name: 'useAuthState', storage: createJSONStorage(() => AsyncStorage) },
  ),
);
