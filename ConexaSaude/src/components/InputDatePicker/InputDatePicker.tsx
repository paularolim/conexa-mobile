import { Pressable, View } from 'react-native';
import DatePicker from 'react-native-date-picker';

import { Input } from '@components/Input/Input';

import { InputDatePickerProps } from './types';

export function InputDatePicker({
  testID = 'input-date-picker',
  label,
  value,
  displayedValue,
  isModalOpen,
  openModal,
  onCancel,
  onConfirm,
}: InputDatePickerProps) {
  return (
    <>
      <Pressable onPress={openModal}>
        <View pointerEvents="none">
          <Input label={label} value={displayedValue || `${value}`} editable={false} />
        </View>
      </Pressable>
      <DatePicker
        testID={`${testID}-modal`}
        modal
        open={isModalOpen}
        date={value}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </>
  );
}
