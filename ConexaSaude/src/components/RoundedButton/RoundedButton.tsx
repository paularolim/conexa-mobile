import { Container, styles } from './styles';
import { RoundedButtonProps } from './types';

export function RoundedButton({ children, onPress }: RoundedButtonProps) {
  return (
    <Container activeOpacity={1} onPress={onPress} style={{ ...styles.shadow }}>
      {children}
    </Container>
  );
}
