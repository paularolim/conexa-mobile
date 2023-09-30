import { StyleSheet, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
  width: 70px;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.pink};
  border-radius: 12px;
  top: 5px;
`;

export const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#f28080',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 50,
  },
});
