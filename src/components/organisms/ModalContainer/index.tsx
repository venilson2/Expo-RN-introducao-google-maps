import React from 'react';
import { 
  Container, 
  ButtonContainer, 
  StyledButton, 
  IconContainer,
  Plate,
  Info,
  Strong,
  PlateContainer,
  AddressText,
  AddressContainer,
  AddressInfo,
  Badge,
  BadgeText,
  SmallInfo,
  InfoHour
} from './styles';
import Modal from 'react-native-modal';
import Coordinate from '../../../interfaces/Coordinate';
import { Image } from 'react-native';
import { theme } from '../../../styles';

interface ModalContainerProps {
  modalVisible: boolean;
  setModalVisible: (item: boolean) => void;
  coordinate: Coordinate | null
}

const ModalContainer = ({ modalVisible, setModalVisible, coordinate }: ModalContainerProps) => {
  return (
    <Modal isVisible={modalVisible}>
      <Container>
        <IconContainer>
          <Image source={require('../../../assets/images/bus.png')}/>
          <PlateContainer>
            <Plate>XXX-999</Plate>
            <Info>1234</Info>
          </PlateContainer>
          <Info><Strong>3</Strong> km</Info>
        </IconContainer>
        <AddressContainer>
          <AddressInfo>
            <AddressText>Avenida Santo Amaro, 741 - Vila Nova Conceição, São Paulo - SP, 04506-000, Brasil</AddressText>
          </AddressInfo>
          <Badge>
            <InfoHour>Horário</InfoHour>
            <BadgeText>6:30</BadgeText>
          </Badge>
        </AddressContainer>
        <Info>Chegar em: <Strong>3</Strong> min</Info>
          <SmallInfo>Atualizado em: 07/05/2023 às 14:30</SmallInfo>
        <ButtonContainer>
          <StyledButton onPress={() => setModalVisible(false)} title="Confirmar Embarque" style={{ backgroundColor: theme.colors.primary_600 }} />
          <StyledButton onPress={() => setModalVisible(false)} title="Fechar" style={{ backgroundColor: theme.colors.secondary_200 }} />
        </ButtonContainer>
      </Container>
    </Modal>
  );
};

export default ModalContainer;
