import { render, renderHook } from '@testing-library/react-native';
import { useForm } from 'react-hook-form';
import renderer from 'react-test-renderer';

import { CreateAppointmentView } from '@screens/CreateAppointment';

import { Wrapper } from '../../Wrapper';

jest.useFakeTimers().setSystemTime(new Date('2023-10-04T12:21:45.926Z'));

describe('CreateAppointmentView', () => {
  it('should render screen correctly', () => {
    const { result } = renderHook(() =>
      useForm<{ patient: string; date: Date; observation: string }>(),
    );

    const tree = renderer
      .create(
        <Wrapper>
          <CreateAppointmentView
            loading={false}
            control={result.current.control}
            onSubmit={jest.fn()}
            handleDismissKeyboard={jest.fn()}
            errorMessage={null}
            isDateModalOpen={false}
            handleToggleDateModal={jest.fn()}
          />
        </Wrapper>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render screen correctly on loading', () => {
    const { result } = renderHook(() =>
      useForm<{ patient: string; date: Date; observation: string }>(),
    );

    const { getByTestId } = render(
      <Wrapper>
        <CreateAppointmentView
          loading
          control={result.current.control}
          onSubmit={jest.fn()}
          handleDismissKeyboard={jest.fn()}
          errorMessage={null}
          isDateModalOpen={false}
          handleToggleDateModal={jest.fn()}
        />
      </Wrapper>,
    );
    expect(getByTestId('activity-indicator')).toBeTruthy();
  });

  it('should render screen correctly on loading', () => {
    const { result } = renderHook(() =>
      useForm<{ patient: string; date: Date; observation: string }>(),
    );

    const { getByText } = render(
      <Wrapper>
        <CreateAppointmentView
          errorMessage="Error message"
          loading={false}
          control={result.current.control}
          onSubmit={jest.fn()}
          handleDismissKeyboard={jest.fn()}
          isDateModalOpen={false}
          handleToggleDateModal={jest.fn()}
        />
      </Wrapper>,
    );
    expect(getByText('Error message')).toBeTruthy();
  });
});
