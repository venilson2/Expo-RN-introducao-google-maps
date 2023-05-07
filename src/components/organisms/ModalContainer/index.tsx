import React from 'react';
import { Container, ButtonContainer, StyledButton } from './styles';
import Modal from 'react-native-modal';

interface ModalContainerProps {
  modalVisible: boolean;
  setModalVisible: (item: boolean) => void;
  children?: React.ReactNode;
}

const ModalContainer = ({ modalVisible, setModalVisible, children }: ModalContainerProps) => {
  return (
    <Modal isVisible={modalVisible}>
      <Container>
        {children}
        <ButtonContainer>
          <StyledButton onPress={() => setModalVisible(false)} title="Fechar" />
        </ButtonContainer>
      </Container>
    </Modal>
  );
};

export default ModalContainer;
