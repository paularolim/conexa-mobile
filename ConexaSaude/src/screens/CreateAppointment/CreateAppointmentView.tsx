import { Controller } from 'react-hook-form';
import { ActivityIndicator, TouchableWithoutFeedback } from 'react-native';

import { Alert } from '@components/Alert';
import { Button } from '@components/Button';
import { Input } from '@components/Input';

import { Container, Form, Title } from './styles';
import { CreateAppointmentViewProps } from './types';

export function CreateAppointmentView({
  control,
  loading,
  errorMessage,
  onSubmit,
  handleDismissKeyboard,
}: CreateAppointmentViewProps) {
  return (
    <TouchableWithoutFeedback onPress={handleDismissKeyboard}>
      <Container>
        <Title>Criar consulta</Title>
        <Form>
          {errorMessage && <Alert type="error" message={errorMessage} />}
          <Controller
            name="patient"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input label="Nome do paciente" value={value} onChangeText={onChange} />
            )}
          />
          {/* TODO: improve ux for date input */}
          <Controller
            name="date"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input label="Data da consulta" value={value} onChangeText={onChange} />
            )}
          />
          <Controller
            name="observation"
            control={control}
            render={({ field: { value, onChange } }) => (
              <Input label="Observação" value={value} onChangeText={onChange} />
            )}
          />
        </Form>
        {loading ? (
          <ActivityIndicator testID="activity-indicator" />
        ) : (
          <Button onPress={onSubmit}>Salvar</Button>
        )}
      </Container>
    </TouchableWithoutFeedback>
  );
}
