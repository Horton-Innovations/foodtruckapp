import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Page from '../common/Page';
import MapView, {Marker} from 'react-native-maps';
import Data from '../../MockData';

const MapScreen = () => {
  // const marker = {
  //   latlng: {latitude: 38.25667, longitude: -85.7514},
  //   title: 'My Truck',
  //   description: 'This is a description',
  // };
  const markers = Data.Trucks.map(truck => {
    return (
      <Marker
        key={truck.id}
        coordinate={truck.latlng}
        title={truck.title}
        description={truck.description}
      />
    );
  });

  return (
    <Page title="Map">
      <View style={styles.container}>
        <Text>Map Screen</Text>
        <MapView
          provider="google"
          style={styles.mapContainer}
          initialRegion={{
            latitude: 38.25667,
            longitude: -85.7514,
            latitudeDelta: 0.006866,
            longitudeDelta: 0.004757,
          }}
          loadingEnabled={true}>
          {/* <Marker
            coordinate={marker.latlng}
            title={marker.title}
            description={marker.description}
          /> */}
          {markers}
        </MapView>
      </View>
    </Page>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapContainer: {
    flex: 1,
  },
});

export default MapScreen;
