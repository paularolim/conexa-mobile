import { SafeAreaView, Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components';

import { theme } from '@styles/theme';

export function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Hello Wolrd</Text>
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}
