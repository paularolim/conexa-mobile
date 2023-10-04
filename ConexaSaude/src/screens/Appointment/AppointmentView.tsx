import { ActivityIndicator, View } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Button } from '@components/Button';
import { Divider } from '@components/Divider';
import { Icon } from '@components/Icon';
import { Modal } from '@components/Modal';

import {
  Avatar,
  Container,
  Content,
  ErrorMessage,
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
  error,
  loading,
}: AppointmentViewProps) {
  const { colors } = useTheme();

  if (loading) {
    return (
      <Container>
        <ActivityIndicator size="large" testID="activity-indicator" />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <ErrorMessage testID="error-message">
          Não foi possível carregar os dados. Tente novamente mais tarde!
        </ErrorMessage>
      </Container>
    );
  }

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
        testID="confirm-modal"
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
