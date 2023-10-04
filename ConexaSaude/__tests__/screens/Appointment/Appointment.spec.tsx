import renderer from 'react-test-renderer';

import { Appointment, NavigationType, RouteType, ScreenProps } from '@screens/Appointment';

import { Wrapper } from '../../Wrapper';

jest.mock('@screens/Appointment/useAppointmentViewModel', () => ({
  useAppointmentViewModel: jest.fn(),
}));

const createTestProps = (): unknown & ScreenProps => ({
  navigation: { navigate: jest.fn() } as unknown as NavigationType,
  route: { params: { id: '1' } } as unknown as RouteType,
});
const props = createTestProps();

describe('AppointmentView', () => {
  it('should render screen correctly', () => {
    const tree = renderer
      .create(
        <Wrapper>
          <Appointment navigation={props.navigation} route={props.route} />
        </Wrapper>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
