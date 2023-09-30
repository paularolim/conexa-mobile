export type IconName = 'calendar' | 'house' | 'plus' | 'user';

export interface IconProps {
  name: IconName;
  width?: number;
  height?: number;
  fill?: string;
}
