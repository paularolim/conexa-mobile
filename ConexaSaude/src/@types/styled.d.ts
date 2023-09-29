import 'styled-components';

import { ThemeType } from '../styles/theme';

declare module 'styled-components/native' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeType {}
}
