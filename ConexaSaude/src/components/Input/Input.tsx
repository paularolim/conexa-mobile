import { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Icon } from '@components/Icon';

import { Container, Field, FieldContainer, Label } from './styles';
import { InputProps } from './types';

export function Input({ label, hasPasswordIcon, secureTextEntry, ...rest }: InputProps) {
  const [hidePassword, setHidePassword] = useState(secureTextEntry);

  const { colors } = useTheme();

  const togglePasswordVisibility = () => {
    setHidePassword((prev) => !prev);
  };

  return (
    <Container>
      <Label>{label}</Label>
      <FieldContainer>
        <Field testID="field" secureTextEntry={hidePassword} {...rest} />
        {hasPasswordIcon && (
          <TouchableOpacity onPress={togglePasswordVisibility} testID="password-visibility-toggle">
            <Icon
              name={hidePassword ? 'eye-on' : 'eye-off'}
              width={25}
              height={25}
              fill={colors.gray}
            />
          </TouchableOpacity>
        )}
      </FieldContainer>
    </Container>
  );
}
