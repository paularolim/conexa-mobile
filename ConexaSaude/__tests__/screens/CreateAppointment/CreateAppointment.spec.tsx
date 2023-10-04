import renderer from 'react-test-renderer';

import { CreateAppointment } from '@screens/CreateAppointment';

import { Wrapper } from '../../Wrapper';

jest.mock('react-hook-form', () => ({
  ...jest.requireActual('react-hook-form'),
  useFormContext: () => ({
    handleSubmit: () => jest.fn(),
    control: {
      register: jest.fn(),
      unregister: jest.fn(),
      getFieldState: jest.fn(),
      _names: {
        array: new Set('test'),
        mount: new Set('test'),
        unMount: new Set('test'),
        watch: new Set('test'),
        focus: 'test',
        watchAll: false,
      },
      _subjects: {
        watch: jest.fn(),
        array: jest.fn(),
        state: jest.fn(),
      },
      _getWatch: jest.fn(),
      _formValues: ['test'],
      _defaultValues: ['test'],
    },
    getValues: () => [],
    setValue: () => jest.fn(),
    formState: () => jest.fn(),
    watch: () => jest.fn(),
  }),
  Controller: () => [],
  useSubscribe: () => ({ r: { current: { subject: { subscribe: () => jest.fn() } } } }),
}));

jest.mock('@screens/CreateAppointment/useCreateAppointmentViewModel', () => ({
  useCreateAppointmentViewModel: () => ({
    errorMessage: 'mocked_error',
    control: {},
    loading: false,
    onSubmit: jest.fn(),
    handleDismissKeyboard: jest.fn(),
  }),
}));

describe('CreateAppointment', () => {
  it('should render screen correctly', () => {
    const tree = renderer
      .create(
        <Wrapper>
          <CreateAppointment />
        </Wrapper>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
