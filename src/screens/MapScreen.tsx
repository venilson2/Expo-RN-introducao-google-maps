import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Modal, FlatList } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Polyline } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import * as Location from 'expo-location';

const GOOGLE_MAPS_API_KEY = "AIzaSyBdNv7u3xt-e13L1a_0aSUsJsnw2Bd7qTk";

interface CoordinateResponse {
  id: number, 
  name: string,
  coords: Coordinate[]
}

interface Coordinate {
  latitude: number;
  longitude: number;
}

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  dropdownContainer: {

    marginTop: 40,
    position: 'absolute',
    zIndex: 1,
    width: '90%',
    alignSelf: 'center',
    padding: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.10,
    shadowRadius: 1,
    elevation: 24,
  },
  dropdownText: {
    fontSize: 16,
    color: '#333',
  },
  modal: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 10,
  },
  listItemText: {
    fontSize: 16,
    color: '#333',
  },
  flatList: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 20,
    maxHeight: 200,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ccc',
  },
});

const dados = [
  {
    id: 1, 
    name: 'Linha 1', 
    coords: [
      { latitude: -23.6317, longitude: -46.6965 },
      { latitude: -23.6349, longitude: -46.6792 },
      { latitude: -23.6072, longitude: -46.6203 },
      { latitude: -23.7144, longitude: -46.7318 },
      { latitude: -23.6573, longitude: -46.7023 },
      { latitude: -23.6098, longitude: -46.6027 },
      { latitude: -23.6878, longitude: -46.7176 },
      { latitude: -23.6489, longitude: -46.7626 }
    ]
  },
  {
    id: 2, 
    name: 'Linha 2', 
    coords: [
      { latitude: -23.8348, longitude: -46.7043},
      { latitude: -23.7036, longitude: -46.6985},
      { latitude: -23.7103, longitude: -46.7715},
      { latitude: -24.0487, longitude: -46.6866},
      { latitude: -23.7755, longitude: -46.6755}
    ]
  },
  {
    id: 3, 
    name: 'Linha 3', 
    coords: [
      { latitude: -23.5881, longitude: -46.6326},
      { latitude: -23.5928, longitude: -46.6067},
      { latitude: -23.6329, longitude: -46.7619},
      { latitude: -23.6532, longitude: -46.7108},
      { latitude: -23.6529, longitude: -46.6419},
      { latitude: -23.6634, longitude: -46.7563},
      { latitude: -23.7368, longitude: -46.7096},
      { latitude: -23.6705, longitude: -46.6561},
      { latitude: -23.8348, longitude: -46.7043}
    ]
  }
];

const MapScreen = () => {
  const [coordinates, setCoordinates] = useState<Coordinate[]>([]);
  const [location, setLocation] = useState<Coordinate>();
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [path, setPath] = useState([]);

  async function getLocation() {
    const { status } = await Location.requestForegroundPermissionsAsync();
    const location = await Location.getCurrentPositionAsync({});

    if (status !== 'granted') {
      console.log('Permission to access location was denied');
      return;
    }

    setLocation({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
  }

  useEffect(() => {
    getLocation();
  }, []);

  const region = coordinates.length > 0 ? {
    latitude: coordinates[0].latitude,
    longitude: coordinates[0].longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LATITUDE_DELTA * ASPECT_RATIO,
  } : null;

  const renderListItem = ({ item } : { item: CoordinateResponse }) => {
    return (
      <TouchableOpacity onPress={() => {
        setSelectedValue(item.name);
        setCoordinates(item.coords);
        setModalVisible(false);
      }}>
        <View style={styles.listItem}>
          <Text style={styles.listItemText}>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.dropdownContainer}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <View style={{ backgroundColor: 'white', padding: 10 }}>
            <Text>{selectedValue ? selectedValue : 'Selecione a linha desejada'}</Text>
          </View>
        </TouchableOpacity> 
      </View>
      <Modal 
        visible={modalVisible} 
        animationType="slide"
        style={styles.modal}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text>fechar</Text>
          </TouchableOpacity>
          <FlatList
          style={styles.flatList}
          data={dados}
          renderItem={renderListItem}
          keyExtractor={(item) => item.id.toString()}
        />
        </View>
      </Modal>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={{ flex: 1 }}
        region={region!}
      >
        {coordinates.length > 0 && (
          <MapViewDirections
            origin={coordinates[0]}
            destination={coordinates[coordinates.length - 1]}
            waypoints={coordinates.slice(1, -1)}
            apikey={GOOGLE_MAPS_API_KEY}
            strokeWidth={3}
            strokeColor="hotpink"
          />
        )}
        {coordinates.map((coordinate, index) => (
          <Marker
            key={`marker-${index}`}
            coordinate={coordinate}
            title={`Marker ${index + 1}`}
          />
        ))}
        {location && (
          <Marker
            coordinate={location}
            title="Você está aqui"
            pinColor="blue"
          />
        )}
      </MapView>
    </View>
  );
};

export default MapScreen;