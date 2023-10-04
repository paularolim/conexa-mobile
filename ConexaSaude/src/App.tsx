import { useEffect } from 'react';
import { SafeAreaView } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { ThemeProvider } from 'styled-components';

import { theme } from '@styles/theme';

import { Routes } from './routes';

export function App(): JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  });

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{ flex: 1 }}>
        <Routes />
      </SafeAreaView>
    </ThemeProvider>
  );
}
