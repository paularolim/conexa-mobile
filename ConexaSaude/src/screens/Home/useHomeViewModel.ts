import { useNavigation } from '@react-navigation/native';
import { useCallback, useState } from 'react';

import { useAuth } from '@hooks/useAuth';

export function useHomeViewModel() {
  const [refreshing, setRefreshing] = useState(false);

  const { navigate } = useNavigation();
  const { name } = useAuth();

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const handlePressAppointment = useCallback(() => {
    navigate('Appointment' as never);
  }, [navigate]);

  return { handlePressAppointment, refreshing, onRefresh, name };
}
