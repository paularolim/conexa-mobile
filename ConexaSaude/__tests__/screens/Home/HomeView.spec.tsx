import { render } from '@testing-library/react-native';
import renderer from 'react-test-renderer';

import { HomeView } from '@screens/Home/HomeView';

import { Wrapper } from '../../Wrapper';

describe('HomeView', () => {
  it('should render screen correctly', () => {
    const tree = renderer
      .create(
        <Wrapper>
          <HomeView
            appointments={[
              { date: 'mocked_date', id: 0, observation: 'mocked_info', patient: 'mocked_patient' },
              { date: 'mocked_date', id: 1, observation: 'mocked_info', patient: 'mocked_patient' },
            ]}
            name="Dr. John Doe"
            refreshing={false}
            loading={false}
            error={false}
            handlePressAppointment={jest.fn()}
            handleCreateAppointment={jest.fn()}
            onRefresh={jest.fn()}
          />
        </Wrapper>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render screen correctly on loading', () => {
    const { getByTestId } = render(
      <Wrapper>
        <HomeView
          appointments={[]}
          name="Dr. John Doe"
          refreshing={false}
          loading
          error={false}
          handlePressAppointment={jest.fn()}
          handleCreateAppointment={jest.fn()}
          onRefresh={jest.fn()}
        />
      </Wrapper>,
    );
    expect(getByTestId('activity-indicator')).toBeTruthy();
  });

  it('should render screen correctly on error', () => {
    const { getByTestId } = render(
      <Wrapper>
        <HomeView
          appointments={[]}
          name="Dr. John Doe"
          refreshing={false}
          loading={false}
          error
          handlePressAppointment={jest.fn()}
          handleCreateAppointment={jest.fn()}
          onRefresh={jest.fn()}
        />
      </Wrapper>,
    );
    expect(getByTestId('error-message')).toBeTruthy();
  });

  it('should render screen correctly on error', () => {
    const { getByTestId } = render(
      <Wrapper>
        <HomeView
          appointments={[]}
          name="Dr. John Doe"
          refreshing={false}
          loading={false}
          error={false}
          handlePressAppointment={jest.fn()}
          handleCreateAppointment={jest.fn()}
          onRefresh={jest.fn()}
        />
      </Wrapper>,
    );
    expect(getByTestId('empty-message')).toBeTruthy();
  });
});
