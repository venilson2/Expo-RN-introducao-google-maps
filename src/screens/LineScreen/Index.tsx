import React from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity, Text } from 'react-native';
import Button from '../../components/atoms/Button';
import { listCoordinates } from '../../services/CoordinatesService';
import { useNavigation } from '@react-navigation/native';
import TextHeader from '../../components/organisms/TextHeader';

interface ModalContainerProps {
  modalVisible: boolean,
  setModalVisible: (item: boolean) => void,
  children?: React.ReactNode;
}

interface CoordinateResponse {
  id: number,
  name: string,
  status: string,
  coords: Coordinate[]
}

interface Coordinate {
  latitude: number;
  longitude: number;
}

export default function LineScreen() {

  const data = listCoordinates();
  const navigation = useNavigation();

  const styles = StyleSheet.create({
    container: {
      paddingVertical: 10,
      paddingHorizontal: 24,
      flex: 1,
    },
    buttonContainer: {
      marginTop: 20,
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 10,
    },
    flatList: {
      width: '100%',
      borderRadius: 10,
      marginTop: 20,
      height: "100%"
    },
    listItemText: {
      fontSize: 16,
      color: '#333',
    },
    listItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingVertical: 10,
      width: '50%'
    },
    listContainer: {
      width: '100%',
      height: '100%',
    },
    listItemContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    badge: {
      backgroundColor: 'green',
      borderRadius: 8,
      paddingHorizontal: 8,
      paddingVertical: 4,
    },
    badgeText: {
      color: 'white',
      fontWeight: 'bold',
    },
  });

  const renderListItem = ({ item }: { item: CoordinateResponse }) => {

    return (
      <TouchableOpacity
        style={styles.listItemContainer}
        onPress={() => {
          // setSelectedValue(item.name);
          // setCoordinates(item.coords);
          // setModalVisible(false);
        }}>
        <View style={styles.listItem}>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>Entrada</Text>
          </View>
          <Text style={styles.listItemText}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
      <View style={styles.container}>
        <TextHeader label={'Linhas/Rotas'} onPress={() => navigation.goBack()}/>
        <FlatList
          style={styles.listContainer}
          data={data}
          renderItem={renderListItem}
          keyExtractor={(item) => item.id.toString()}
        />
        <View style={styles.buttonContainer}>
          <Button onPress={() => navigation.goBack() } title='Voltar' />
        </View>
      </View>
  );
}