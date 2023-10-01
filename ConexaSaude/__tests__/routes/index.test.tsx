import { cleanup } from '@testing-library/react-native';
import renderer from 'react-test-renderer';

import { Routes } from '@routes/index';

import { Wrapper } from '../Wrapper';

describe('Routes', () => {
  afterEach(() => cleanup());

  it('should render routes correctly if not logged', () => {
    const tree = renderer
      .create(
        <Wrapper>
          <Routes />
        </Wrapper>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
