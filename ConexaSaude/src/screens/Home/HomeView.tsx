import { useCallback } from 'react';
import { FlatList, ListRenderItemInfo, RefreshControl } from 'react-native';

import { AppointmentCard } from '@components/AppointmentCard';
import { Appointment } from '@hooks/useListAppointments/types';

import { Container, Footer, Header, Separator, Title } from './styles';
import { HomeViewProps } from './types';

export function HomeView({
  name,
  refreshing,
  onRefresh,
  appointments,
  handlePressAppointment,
}: HomeViewProps) {
  const headerItem = useCallback(
    () => (
      <Header>
        <Title>Olá {name}!</Title>
        <Title>Agenda</Title>
      </Header>
    ),
    [name],
  );

  const footerItem = useCallback(() => <Footer />, []);

  const separatorItem = useCallback(() => <Separator />, []);

  const renderItem = useCallback(
    ({ item }: ListRenderItemInfo<Appointment>) => (
      <AppointmentCard date={item.date} patient={item.patient} onPress={handlePressAppointment} />
    ),
    [handlePressAppointment],
  );

  return (
    <Container>
      <FlatList
        data={appointments || []}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        ItemSeparatorComponent={separatorItem}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={[0]}
        ListHeaderComponent={headerItem}
        ListFooterComponent={footerItem}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
    </Container>
  );
}
