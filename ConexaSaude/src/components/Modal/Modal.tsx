import { Modal as RNModal, TouchableWithoutFeedback } from 'react-native';

import { Button } from '@components/Button';
import { Text } from '@components/Text';

import { Container, Overlay, Section } from './styles';
import { ModalProps } from './types';

export function Modal({
  title,
  description,
  primaryButtonLabel,
  secondaryButtonLabel,
  visible,
  dismissModal,
  cancel,
  confirm,
}: ModalProps) {
  return (
    <RNModal visible={visible} transparent>
      <TouchableWithoutFeedback onPress={dismissModal}>
        <Overlay>
          <Container>
            <Section>
              <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{title}</Text>
              <Text style={{ fontSize: 16 }}>{description}</Text>
            </Section>

            <Section>
              <Button onPress={confirm}>{primaryButtonLabel}</Button>
              <Button type="ghost" onPress={cancel}>
                {secondaryButtonLabel}
              </Button>
            </Section>
          </Container>
        </Overlay>
      </TouchableWithoutFeedback>
    </RNModal>
  );
}
