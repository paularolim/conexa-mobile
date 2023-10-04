import { TouchableOpacityProps } from 'react-native';

export type ButtonType = 'filled' | 'ghost';

export interface ButtonProps extends TouchableOpacityProps {
  children: string;
  type?: ButtonType;
}
