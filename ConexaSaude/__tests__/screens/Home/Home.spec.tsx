import renderer from 'react-test-renderer';

import { Home, NavigationType, RouteType, ScreenProps } from '@screens/Home';

import { Wrapper } from '../../Wrapper';

jest.mock('@screens/Home/useHomeViewModel', () => ({ useHomeViewModel: jest.fn() }));

const createTestProps = (): unknown & ScreenProps => ({
  navigation: { navigate: jest.fn() } as unknown as NavigationType,
  route: { params: { id: '1' } } as unknown as RouteType,
});
const props = createTestProps();

describe('Home', () => {
  it('should render screen correctly', () => {
    const tree = renderer
      .create(
        <Wrapper>
          <Home navigation={props.navigation} route={props.route} />
        </Wrapper>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
