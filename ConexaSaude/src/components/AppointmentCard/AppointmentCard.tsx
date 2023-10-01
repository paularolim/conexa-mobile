import { View } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Divider } from '@components/Divider/Divider';
import { Icon } from '@components/Icon';
import { Text } from '@components/Text';

import { Avatar, Container, DateTitle, Section } from './styles';
import { AppointmentCardProps } from './types';

export function AppointmentCard({ date, patient, ...rest }: AppointmentCardProps) {
  const { colors } = useTheme();

  return (
    <Container {...rest}>
      <Section>
        <Icon name="calendar" width={28} height={28} fill={colors.grayLight} />
        <View>
          <DateTitle>Data</DateTitle>
          <Text>{date}</Text>
        </View>
      </Section>
      <Divider />
      <Section>
        <Avatar>
          <Icon name="user" fill={colors.pink} />
        </Avatar>
        <Text>{patient}</Text>
      </Section>
    </Container>
  );
}
