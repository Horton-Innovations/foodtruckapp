import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class FavoriteTruck extends Component {
  render() {
    return (
      <View>
        <Text style={styles.title}> Favorite Trucks</Text>
        <Text>Truck 1</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 24,
    marginTop: '5%',
  },
});

export default FavoriteTruck;
