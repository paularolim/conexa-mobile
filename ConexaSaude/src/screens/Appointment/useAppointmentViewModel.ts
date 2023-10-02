import { useCallback, useEffect, useState } from 'react';
import { Alert } from 'react-native';

import { useDetailAppointment } from '@hooks/useDetailAppointment';

import { ScreenProps } from './types';

export function useAppointmentViewModel({ route }: ScreenProps) {
  const [showModal, setShowModal] = useState(false);

  const { id } = route.params;

  const { getDetailAppointment, appointment } = useDetailAppointment();

  const requestDetails = useCallback(() => {
    getDetailAppointment(id);
  }, [getDetailAppointment, id]);

  const handleShowCancelModal = () => {
    setShowModal(true);
  };

  const handleCancelAppointment = () => {
    Alert.alert('Cancelada', 'A consulta foi cancelada');
    setShowModal(false);
  };

  const handleDismissModal = () => {
    setShowModal(false);
  };

  useEffect(() => requestDetails(), [requestDetails]);

  return {
    handleShowCancelModal,
    handleCancelAppointment,
    handleDismissModal,
    showModal,
    appointment,
  };
}
