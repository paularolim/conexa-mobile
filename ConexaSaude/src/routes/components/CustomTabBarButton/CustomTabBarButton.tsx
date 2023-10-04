import { RoundedButton, RoundedButtonProps } from '@components/RoundedButton';

export function CustomTabBarButton({ children, ...rest }: RoundedButtonProps) {
  return (
    <RoundedButton {...rest} style={{ top: 5 }}>
      {children}
    </RoundedButton>
  );
}
