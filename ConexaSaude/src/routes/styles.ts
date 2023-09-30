import { Platform, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: 'white',
    height: 60,
    borderTopWidth: Platform.OS === 'ios' ? 0 : 1,
  },
  tabBarShadow: {
    shadowColor: '#898989',
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});
