import { useCallback } from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItemInfo,
  RefreshControl,
  ScrollView,
} from 'react-native';

import { AppointmentCard } from '@components/AppointmentCard';
import { Button } from '@components/Button';
import { Appointment } from '@hooks/useListAppointments/types';

import {
  Container,
  EmptyContainer,
  EmptyMessage,
  ErrorMessage,
  Footer,
  Header,
  Separator,
  Title,
} from './styles';
import { HomeViewProps } from './types';

export function HomeView({
  name,
  refreshing,
  onRefresh,
  loading,
  error,
  appointments,
  handlePressAppointment,
  handleCreateAppointment,
}: HomeViewProps) {
  const HeaderItem = useCallback(
    () => (
      <Header>
        <Title>Olá {name}!</Title>
        <Title>Agenda</Title>
      </Header>
    ),
    [name],
  );

  const emptyItem = useCallback(
    () => (
      <EmptyContainer>
        <EmptyMessage testID="empty-message">
          Sem consultas para exibir. Que tal criar uma?
        </EmptyMessage>
        <Button onPress={handleCreateAppointment}>Criar consulta</Button>
      </EmptyContainer>
    ),
    [handleCreateAppointment],
  );

  const footerItem = useCallback(() => <Footer />, []);

  const separatorItem = useCallback(() => <Separator />, []);

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Appointment>) => (
      <AppointmentCard
        date={item.date}
        patient={item.patient}
        onPress={() => handlePressAppointment(item.id)}
      />
    ),
    [handlePressAppointment],
  );

  if (loading && !refreshing) {
    return (
      <Container>
        <HeaderItem />
        <ActivityIndicator size="large" testID="activity-indicator" />
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <ScrollView
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        >
          <HeaderItem />
          <ErrorMessage testID="error-message">
            Não foi possível carregar os dados. Tente novamente mais tarde!
          </ErrorMessage>
        </ScrollView>
      </Container>
    );
  }

  return (
    <Container>
      <FlatList
        data={appointments || []}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        ItemSeparatorComponent={separatorItem}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={HeaderItem}
        ListFooterComponent={footerItem}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        ListEmptyComponent={emptyItem}
      />
    </Container>
  );
}
