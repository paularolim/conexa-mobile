import renderer from 'react-test-renderer';

import { SplashScreenView } from '@screens/SplashScreen/SplashScreenView';

import { Wrapper } from '../../Wrapper';

describe('SplashScreenView', () => {
  it('should render screen correctly', () => {
    const tree = renderer
      .create(
        <Wrapper>
          <SplashScreenView />
        </Wrapper>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
