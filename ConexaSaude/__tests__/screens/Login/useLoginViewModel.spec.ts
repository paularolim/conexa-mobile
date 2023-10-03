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

  it('should call onSubmit', () => {
    const { result } = renderHook(() => useLoginViewModel.useLoginViewModel());

    act(() => {
      result.current.onSubmit();
    });

    expect(result.current.onSubmit).toBeTruthy();
  });
});
