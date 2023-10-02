import Calendar from '@assets/icons/calendar.svg';
import EyeOff from '@assets/icons/eye-off.svg';
import EyeOn from '@assets/icons/eye-on.svg';
import House from '@assets/icons/house.svg';
import Plus from '@assets/icons/plus.svg';
import SignOut from '@assets/icons/sign-out.svg';
import User from '@assets/icons/user.svg';

import { IconProps } from './types';

export function Icon({ name, width = 40, height = 40, fill = 'none' }: IconProps) {
  switch (name) {
    case 'calendar':
      return <Calendar width={width} height={height} stroke={fill} />;
    case 'house':
      return <House width={width} height={height} stroke={fill} />;
    case 'plus':
      return <Plus width={width} height={height} fill={fill} />;
    case 'user':
      return <User width={width} height={height} stroke={fill} />;
    case 'eye-off':
      return <EyeOff width={width} height={height} stroke={fill} />;
    case 'eye-on':
      return <EyeOn width={width} height={height} stroke={fill} />;
    case 'sign-out':
      return <SignOut width={width} height={height} stroke={fill} />;
    default:
      throw new Error('Icon name is required');
  }
}
