import React from 'react';
import { FlatList } from 'react-native';
import Button from '../../components/atoms/Button';
import { listCoordinates } from '../../services/CoordinatesService';
import { useNavigation } from '@react-navigation/native';
import TextHeader from '../../components/organisms/TextHeader';
import { Badge, BadgeText, ButtonContainer, Container, FlatListContainer, ListItem, ListItemContainer, ListItemText } from './styles';
import { useCoordinatesContext } from '../../context/CoordinatesContext';
import CoordinateResponse from '../../interfaces/CoordinateResponse';

interface ModalContainerProps {
  modalVisible: boolean,
  setModalVisible: (item: boolean) => void,
  children?: React.ReactNode;
}

export default function LineScreen() {
  const data = listCoordinates();
  const navigation = useNavigation();
  const { setCoordinates, setSelectedLine } = useCoordinatesContext();

  const renderListItem = ({ item }: { item: CoordinateResponse }) => {

    return (
      <ListItemContainer
        onPress={() => {
          setSelectedLine(item);
          setCoordinates(item.coords);
          navigation.goBack();
        }}>
        <ListItem>
          <Badge>
            <BadgeText>{item.status}</BadgeText>
          </Badge>
          <ListItemText>{item.name}</ListItemText>
        </ListItem>
      </ListItemContainer>
    );
  };

  return (
      <Container>
        <TextHeader label={'Linhas/Rotas'} onPress={() => navigation.goBack()}/>
          <FlatList
            data={data}
            renderItem={renderListItem}
            keyExtractor={(item) => item.id.toString()}
          />
        <ButtonContainer>
          <Button onPress={() => navigation.goBack() } title='Voltar' />
        </ButtonContainer>
      </Container>
  );
}
