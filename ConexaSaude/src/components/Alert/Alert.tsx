import { Container, MessageLabel } from './styles';
import { AlertProps } from './types';

export function Alert({ type, message }: AlertProps) {
  return (
    <Container type={type}>
      <MessageLabel type={type}>{message}</MessageLabel>
    </Container>
  );
}
