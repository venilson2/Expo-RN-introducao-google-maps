import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import * as Location from 'expo-location';
import DropDownContainer from '../../components/organisms/DropDownContainer';
import { listCoordinates } from '../../services/CoordinatesService';
import { useNavigation } from '@react-navigation/native';

const GOOGLE_MAPS_API_KEY = "";

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

const MapScreen = () => {
  const [coordinates, setCoordinates] = useState<Coordinate[]>([]);
  const [location, setLocation] = useState<Coordinate>();
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const data = listCoordinates();
  const navigation = useNavigation();

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
      <TouchableOpacity 
        style={styles.listItemContainer}
        onPress={() => {
          setSelectedValue(item.name);
          setCoordinates(item.coords);
          setModalVisible(false);
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
    <View style={{ flex: 1 }}>
      <DropDownContainer 
        selectedValue={selectedValue} 
        setModalVisible={setModalVisible} 
      />
      {/* <ModalContainer 
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      >
        <FlatList
          style={styles.listContainer}
          data={data}
          renderItem={renderListItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </ModalContainer> */}
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
            strokeColor="black"
          />
        )}
        {coordinates.map((coordinate, index) => (
          <Marker
            key={`marker-${index}`}
            coordinate={coordinate}
            title={`Marker ${index + 1}`}
            image={require('../../assets/images/bus.png')}
          />
        ))}
        {location && (
          <Marker
            coordinate={location}
            title="Você está aqui"
            pinColor="orange"
          />
        )}
      </MapView>
    </View>
  );
};

export default MapScreen;