import { SafeAreaView } from 'react-native';
import { ThemeProvider } from 'styled-components';

import { theme } from '@styles/theme';

import { Routes } from './routes';

export function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{ flex: 1 }}>
        <Routes />
      </SafeAreaView>
    </ThemeProvider>
  );
}
