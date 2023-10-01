import { NavigationContainer } from '@react-navigation/native';
import { cleanup } from '@testing-library/react-native';
import renderer from 'react-test-renderer';

import { Tabs } from '@routes/Tabs';

import { Wrapper } from '../Wrapper';

jest.useFakeTimers();

describe('Tabs', () => {
  afterEach(() => cleanup());

  it('should render routes correctly', () => {
    const tree = renderer
      .create(
        <Wrapper>
          <NavigationContainer>
            <Tabs />
          </NavigationContainer>
        </Wrapper>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
