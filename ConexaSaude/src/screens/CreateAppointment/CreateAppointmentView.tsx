import { Controller } from 'react-hook-form';
import { ActivityIndicator, TouchableWithoutFeedback } from 'react-native';

import { Alert } from '@components/Alert';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { InputDatePicker } from '@components/InputDatePicker';
import { dateFormatter } from '@utils/formatter';

import { Container, Form, Title } from './styles';
import { CreateAppointmentViewProps } from './types';

export function CreateAppointmentView({
  control,
  isDateModalOpen,
  loading,
  errorMessage,
  onSubmit,
  handleDismissKeyboard,
  handleToggleDateModal,
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
          <Controller
            name="date"
            control={control}
            defaultValue={new Date()}
            render={({ field: { value, onChange } }) => (
              <InputDatePicker
                label="Data da consulta"
                isModalOpen={isDateModalOpen}
                value={value || new Date()}
                displayedValue={dateFormatter('DD/MM/YYYY - H:mm', value)}
                openModal={handleToggleDateModal}
                onConfirm={(date: Date) => {
                  handleToggleDateModal();
                  onChange(date);
                }}
                onCancel={handleToggleDateModal}
              />
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
