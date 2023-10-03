import renderer from 'react-test-renderer';

import { SplashScreen } from '@screens/SplashScreen';

import { Wrapper } from '../../Wrapper';

describe('SplashScreenView', () => {
  it('should render screen correctly', () => {
    const tree = renderer
      .create(
        <Wrapper>
          <SplashScreen />
        </Wrapper>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
