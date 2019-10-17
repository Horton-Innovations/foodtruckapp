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
          provider="google"
          style={styles.mapContainer}
          initialRegion={{
            latitude: 38.25667,
            longitude: -85.7514,
            latitudeDelta: 0.006866,
            longitudeDelta: 0.004757,
          }}
          // animateToRegion
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
