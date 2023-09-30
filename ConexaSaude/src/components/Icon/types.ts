export type IconName = 'calendar' | 'house' | 'plus' | 'user' | 'eye-on' | 'eye-off';

export interface IconProps {
  name: IconName;
  width?: number;
  height?: number;
  fill?: string;
}
