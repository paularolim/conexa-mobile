import { render, fireEvent } from '@testing-library/react-native';
import DatePicker from 'react-native-date-picker';
import renderer from 'react-test-renderer';

import { Input } from '@components/Input';
import { InputDatePicker } from '@components/InputDatePicker';

import { Wrapper } from '../../Wrapper';

jest.mock('react-native-date-picker', () => jest.fn());
(DatePicker as jest.Mock).mockImplementation((props) => <Input label={props.label} {...props} />);

describe('InputDatePicker component', () => {
  it('should render component correctly', () => {
    const tree = renderer
      .create(
        <Wrapper>
          <InputDatePicker
            label="Test Input"
            isModalOpen={false}
            value={new Date()}
            displayedValue="2023-10-10"
            openModal={jest.fn()}
            onConfirm={jest.fn()}
            onCancel={jest.fn()}
          />
        </Wrapper>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render with label and displayedValue', () => {
    const mockProps = {
      label: 'Date',
      value: new Date(),
      displayedValue: '2023-10-10',
      isModalOpen: false,
      openModal: jest.fn(),
      onCancel: jest.fn(),
      onConfirm: jest.fn(),
    };

    const { getByText, getByDisplayValue } = render(
      <Wrapper>
        <InputDatePicker {...mockProps} />
      </Wrapper>,
    );

    expect(getByText(mockProps.label)).toBeTruthy();
    expect(getByDisplayValue(mockProps.displayedValue)).toBeTruthy();
  });

  it('should render value if displayedValue is not provided', () => {
    const mockProps = {
      label: 'Date',
      value: new Date(),
      isModalOpen: false,
      openModal: jest.fn(),
      onCancel: jest.fn(),
      onConfirm: jest.fn(),
    };

    const { getByDisplayValue } = render(
      <Wrapper>
        <InputDatePicker {...mockProps} />
      </Wrapper>,
    );

    expect(getByDisplayValue(`${mockProps.value}`)).toBeTruthy();
  });

  it('should call openModal when pressed', () => {
    const mockProps = {
      label: 'Date',
      value: new Date(),
      displayedValue: '2023-10-10',
      isModalOpen: false,
      openModal: jest.fn(),
      onCancel: jest.fn(),
      onConfirm: jest.fn(),
    };

    const { getByTestId } = render(
      <Wrapper>
        <InputDatePicker {...mockProps} />
      </Wrapper>,
    );

    fireEvent.press(getByTestId('field'));

    expect(mockProps.openModal).toHaveBeenCalledTimes(1);
  });

  it('should render the DatePicker modal when isModalOpen is true', () => {
    const mockProps = {
      label: 'Date',
      value: new Date(),
      displayedValue: '2023-10-10',
      isModalOpen: true,
      openModal: jest.fn(),
      onCancel: jest.fn(),
      onConfirm: jest.fn(),
    };

    const { getByTestId } = render(
      <Wrapper>
        <InputDatePicker {...mockProps} />
      </Wrapper>,
    );

    expect(getByTestId('input-date-picker-modal')).toBeTruthy();
  });
});
