export interface InputDatePickerProps {
  testID?: string;
  label: string;
  value: Date;
  displayedValue?: string;
  isModalOpen: boolean;
  openModal: () => void;
  onConfirm: (date: Date) => void;
  onCancel: () => void;
}
