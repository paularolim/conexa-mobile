import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components/native';

import { theme } from '@styles/theme';

export function Wrapper({ children }: { children: ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
