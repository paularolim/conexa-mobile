import { View } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Button } from '@components/Button';
import { Divider } from '@components/Divider';
import { Icon } from '@components/Icon';
import { Modal } from '@components/Modal';

import {
  Avatar,
  Container,
  Content,
  Footer,
  Header,
  PatientName,
  SectionTitle,
  SectionValue,
} from './styles';
import { AppointmentViewProps } from './types';

export function AppointmentView({
  handleShowCancelModal,
  handleCancelAppointment,
  handleDismissModal,
  showModal,
  appointment,
}: AppointmentViewProps) {
  const { colors } = useTheme();

  return (
    <Container>
      <Content>
        <Header>
          <Avatar>
            <Icon name="user" width={80} height={80} fill={colors.pink} />
          </Avatar>
          <PatientName>{appointment?.patient}</PatientName>
        </Header>

        <Divider />

        <View>
          <SectionTitle>Data da consulta</SectionTitle>
          <SectionValue>{appointment?.date}</SectionValue>
        </View>

        <View>
          <SectionTitle>Observações</SectionTitle>
          <SectionValue>{appointment?.observation}</SectionValue>
        </View>
      </Content>

      <Footer>
        <Button>Iniciar consulta</Button>
        <Button type="ghost" onPress={handleShowCancelModal}>
          Cancelar consulta
        </Button>
      </Footer>

      <Modal
        title="Cancelar consulta"
        description="Tem certeza que deseja cancelar a consulta?"
        primaryButtonLabel="Sim, cancelar"
        secondaryButtonLabel="Não, manter consulta"
        visible={showModal}
        dismissModal={handleDismissModal}
        confirm={handleCancelAppointment}
        cancel={handleDismissModal}
      />
    </Container>
  );
}
