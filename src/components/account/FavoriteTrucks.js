import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import TruckListItem from '../common/TruckListItem';
import Data from '../../MockData';

class FavoriteTruck extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Favorite Trucks</Text>
        {Data.Trucks.map(truck => {
          return (
            <TruckListItem
              key={truck.id}
              title={truck.title}
              description={truck.description}
              url={truck.url}
              data={truck}
              navigation={navigation}
            />
          );
        })}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: '5%',
  },
});

export default FavoriteTruck;
