import { NavigationContainer } from '@react-navigation/native';
import { cleanup } from '@testing-library/react-native';
import renderer from 'react-test-renderer';

import { MainRoutes } from '@routes/MainRoutes';

import { Wrapper } from '../Wrapper';

jest.useFakeTimers();

describe('MainRoutes', () => {
  afterEach(() => cleanup());

  it('should render routes correctly', () => {
    const tree = renderer
      .create(
        <Wrapper>
          <NavigationContainer>
            <MainRoutes />
          </NavigationContainer>
        </Wrapper>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
