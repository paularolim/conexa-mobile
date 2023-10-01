import { renderHook, act } from '@testing-library/react-native';

import * as useLoginViewModel from '@screens/Login/useLoginViewModel';

describe('useLoginViewModel', () => {
  it('should call handleDismissKeyboard', () => {
    const { result } = renderHook(() => useLoginViewModel.useLoginViewModel());

    act(() => {
      result.current.handleDismissKeyboard();
    });

    expect(result.current.handleDismissKeyboard).toBeTruthy();
  });

  it('should call handleLogin', () => {
    const { result } = renderHook(() => useLoginViewModel.useLoginViewModel());

    act(() => {
      result.current.handleLogin();
    });

    expect(result.current.handleLogin).toBeTruthy();
  });
});
