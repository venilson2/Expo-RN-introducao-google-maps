import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import * as Location from 'expo-location';

const GOOGLE_MAPS_API_KEY = "";

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
});

const MapScreen = () => {
  const [coordinates, setCoordinates] = useState<Coordinate[]>([]);
  const [location, setLocation] = useState<Coordinate>();

  async function getLocation(){
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

  //TODO
  //fazer uma barra de pesquisa
  //quando for selecionado
  //fazer um push na coordinates
  //toda vez que atualiazar o valor
  //alterar o index 1 do array
  //o maximo de items são dois 

  useEffect(() => {

    getLocation();

    setCoordinates([
      {
        latitude: location!.latitude,
        longitude: location!.longitude,
      },
      {
        latitude: -23.7928256,
        longitude: -46.7085503
      },
    ]);
  }, []);

  const region = coordinates.length > 0
    ? {
        latitude: coordinates[0].latitude,
        longitude: coordinates[0].longitude,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LATITUDE_DELTA * ASPECT_RATIO,
      }
    : null;

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={region}
      >
        {coordinates.length > 0 && (
          <MapViewDirections
            origin={coordinates[0]}
            destination={coordinates[1]}
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
      </MapView>
    </View>
  );
};

export default MapScreen;
