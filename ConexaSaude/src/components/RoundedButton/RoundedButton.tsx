import { Container, styles } from './styles';
import { RoundedButtonProps } from './types';

export function RoundedButton({ children, onPress, style, ...rest }: RoundedButtonProps) {
  return (
    <Container activeOpacity={1} onPress={onPress} {...rest} style={[style, { ...styles.shadow }]}>
      {children}
    </Container>
  );
}
