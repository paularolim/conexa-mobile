import { render } from '@testing-library/react-native';
import renderer from 'react-test-renderer';

import { AppointmentView } from '@screens/Appointment/AppointmentView';

import { Wrapper } from '../../Wrapper';

describe('AppointmentView', () => {
  it('should render screen correctly', () => {
    const tree = renderer
      .create(
        <Wrapper>
          <AppointmentView
            appointment={{
              date: 'mocked_date',
              id: 0,
              observation: 'mocked_info',
              patient: 'mocked_patient',
            }}
            loading={false}
            error={false}
            showModal={false}
            handleDismissModal={jest.fn()}
            handleShowCancelModal={jest.fn()}
            handleCancelAppointment={jest.fn()}
          />
        </Wrapper>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render screen correctly on loading', () => {
    const { getByTestId } = render(
      <Wrapper>
        <AppointmentView
          appointment={null}
          loading
          error={false}
          showModal={false}
          handleDismissModal={jest.fn()}
          handleShowCancelModal={jest.fn()}
          handleCancelAppointment={jest.fn()}
        />
      </Wrapper>,
    );
    expect(getByTestId('activity-indicator')).toBeTruthy();
  });

  it('should render screen correctly on error', () => {
    const { getByTestId } = render(
      <Wrapper>
        <AppointmentView
          appointment={null}
          loading={false}
          error
          showModal={false}
          handleDismissModal={jest.fn()}
          handleShowCancelModal={jest.fn()}
          handleCancelAppointment={jest.fn()}
        />
      </Wrapper>,
    );
    expect(getByTestId('error-message')).toBeTruthy();
  });

  it('should render modal correctly', () => {
    const { getByTestId } = render(
      <Wrapper>
        <AppointmentView
          appointment={null}
          loading={false}
          error={false}
          showModal
          handleDismissModal={jest.fn()}
          handleShowCancelModal={jest.fn()}
          handleCancelAppointment={jest.fn()}
        />
      </Wrapper>,
    );
    expect(getByTestId('confirm-modal')).toBeTruthy();
  });
});
