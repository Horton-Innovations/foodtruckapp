import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import TruckListItem from '../common/TruckListItem';
// import Data from '../../MockData';

class TruckList extends Component {
  render() {
    const {navigation, data} = this.props;

    const listOfTrucks = data.map(truck => {
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
    });
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{this.props.title}</Text>
        {listOfTrucks}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    margin: 10,
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: '5%',
  },
});

export default TruckList;
