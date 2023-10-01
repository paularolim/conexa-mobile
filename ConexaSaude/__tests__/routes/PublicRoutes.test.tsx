import { NavigationContainer } from '@react-navigation/native';
import { cleanup } from '@testing-library/react-native';
import renderer from 'react-test-renderer';

import { PublicRoutes } from '@routes/PublicRoutes';

import { Wrapper } from '../Wrapper';

jest.useFakeTimers();

describe('PublicRoutes', () => {
  afterEach(() => cleanup());

  it('should render routes correctly', () => {
    const tree = renderer
      .create(
        <Wrapper>
          <NavigationContainer>
            <PublicRoutes />
          </NavigationContainer>
        </Wrapper>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
