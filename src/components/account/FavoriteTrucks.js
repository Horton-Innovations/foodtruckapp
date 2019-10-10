import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Truck from '../common/Truck';
import Data from './MockData';

class FavoriteTruck extends Component {
  render() {
    return (
      <View style={{alignItems: 'flex-start'}}>
        <Text style={styles.title}> Favorite Trucks</Text>

        {Data.Trucks.map(truck => {
          return (
            <Truck
              key={truck.id}
              title={truck.title}
              description={truck.description}
              url={truck.url}
            />
          );
        })}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: '5%',
  },
});

export default FavoriteTruck;
