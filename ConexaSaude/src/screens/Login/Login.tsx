import { LoginView } from './LoginView';
import { useLoginViewModel } from './useLoginViewModel';

export function Login() {
  const props = useLoginViewModel();
  return <LoginView {...props} />;
}
