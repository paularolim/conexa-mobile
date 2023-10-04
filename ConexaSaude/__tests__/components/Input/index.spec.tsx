import { render, fireEvent } from '@testing-library/react-native';
import renderer from 'react-test-renderer';

import { Input } from '@components/Input';

import { Wrapper } from '../../Wrapper';

describe('Input component', () => {
  it('should render component correctly', () => {
    const tree = renderer
      .create(
        <Wrapper>
          <Input label="Test Input" />
        </Wrapper>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should change password visibility on press icon', () => {
    const { getByTestId } = render(
      <Wrapper>
        <Input label="Test Input" secureTextEntry hasPasswordIcon />
      </Wrapper>,
    );

    const field = getByTestId('field');
    const toggle = getByTestId('password-visibility-toggle');

    fireEvent.press(toggle);
    expect(field.props.secureTextEntry).toBe(false);

    fireEvent.press(toggle);
    expect(field.props.secureTextEntry).toBe(true);
  });
});
