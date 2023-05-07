import React, { useState, useEffect } from 'react';
import { View, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import * as Location from 'expo-location';
import DropDownContainer from '../../components/organisms/DropDownContainer';
import { useNavigation } from '@react-navigation/native';
import { useCoordinatesContext } from '../../context/CoordinatesContext';

const GOOGLE_MAPS_API_KEY = "";

interface Coordinate {
  latitude: number;
  longitude: number;
}

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.0922;

const MapScreen = () => {
  const { coordinates, selectedValue } = useCoordinatesContext();
  const [location, setLocation] = useState<Coordinate>();
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  async function getLocation() {
    const { status } = await Location.requestForegroundPermissionsAsync();
    const location = await Location.getCurrentPositionAsync({});

    if (status !== 'granted') {
      console.log('Permission to access location was denied');
      return;
    }

    console.log(coordinates);

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

  return (
    <View style={{ flex: 1 }}>
      <DropDownContainer 
        selectedValue={selectedValue} 
        onPress={() => navigation.navigate('Line')}
      />
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