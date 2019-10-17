import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Page from '../common/Page';
import MapView from 'react-native-maps';

const MapScreen = () => {
  return (
    <Page title="Map">
      <View style={styles.container}>
        <Text>Map Screen</Text>
        <MapView
          style={styles.mapContainer}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
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
