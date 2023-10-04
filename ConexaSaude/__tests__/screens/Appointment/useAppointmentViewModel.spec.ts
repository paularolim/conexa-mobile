import { act, renderHook } from '@testing-library/react-native';
import { Alert } from 'react-native';

import {
  NavigationType,
  RouteType,
  ScreenProps,
  useAppointmentViewModel,
} from '@screens/Appointment';

jest.mock('@hooks/useDetailAppointment', () => ({
  useDetailAppointment: () => ({ getDetailAppointment: jest.fn() }),
}));

const createTestProps = (): unknown & ScreenProps => ({
  navigation: { navigate: jest.fn() } as unknown as NavigationType,
  route: { params: { id: '1' } } as unknown as RouteType,
});
const props = createTestProps();

describe('useAppointmentViewModel', () => {
  it('should control modal', () => {
    const { result } = renderHook(() => useAppointmentViewModel(props));

    expect(result.current.showModal).toBe(false);

    act(() => {
      result.current.handleShowCancelModal();
    });

    expect(result.current.showModal).toBe(true);

    act(() => {
      result.current.handleDismissModal();
    });

    expect(result.current.showModal).toBe(false);
  });

  it('should cancel appointment', () => {
    const { result } = renderHook(() => useAppointmentViewModel(props));

    jest.spyOn(Alert, 'alert');

    expect(result.current.showModal).toBe(false);

    act(() => {
      result.current.handleShowCancelModal();
    });

    expect(result.current.showModal).toBe(true);

    act(() => {
      result.current.handleCancelAppointment();
    });

    expect(Alert.alert).toHaveBeenCalledWith('Cancelada', 'A consulta foi cancelada');
    expect(result.current.showModal).toBe(false);
  });
});
