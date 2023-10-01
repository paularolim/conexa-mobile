export interface LoginViewProps {
  email: string;
  setEmail: (text: string) => void;
  password: string;
  setPassword: (text: string) => void;

  handleDismissKeyboard: () => void;
  handleLogin: () => void;
}
