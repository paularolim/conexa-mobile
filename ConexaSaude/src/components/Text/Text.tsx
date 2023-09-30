import { RNText } from './styles';
import { TextProps } from './types';

export function Text({ children, ...rest }: TextProps) {
  return <RNText {...rest}>{children}</RNText>;
}
