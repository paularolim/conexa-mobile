export interface ModalProps {
  title: string;
  description: string;
  primaryButtonLabel: string;
  secondaryButtonLabel: string;
  visible: boolean;
  dismissModal: () => void;
  confirm: () => void;
  cancel: () => void;
}
