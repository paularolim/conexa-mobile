import { Container, Label } from './styles';
import { ButtonProps } from './types';

export function Button({ type = 'filled', children, ...rest }: ButtonProps) {
  return (
    <Container type={type} {...rest}>
      <Label type={type}>{children}</Label>
    </Container>
  );
}
