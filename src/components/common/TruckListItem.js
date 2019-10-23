import React, {Component} from 'react';
import {Image, View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const noTruckImage = require('../../assets/mock/Trucks/noTruckImage.jpg');

class TruckListItem extends Component {
  render() {
    const onTruckItemPress = () => {
      return this.props.navigation.navigate({
        routeName: 'TruckItem',
        params: {
          data: this.props.data,
        },
      });
    };
    const source = (this.props.url && {uri: this.props.url}) || noTruckImage;
    return (
        <TouchableOpacity onPress={onTruckItemPress}>
          <View style={styles.truckContainer}>
            <Image source={source} style={styles.imageStyle} />
            <View style={styles.textContainer}>
              <Text style={styles.title}>{this.props.title}</Text>
              <Text>{this.props.description}</Text>
            </View>
          </View>
        </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  truckContainer: {
    flexDirection: 'row',
    margin: 5,
  },
  imageStyle: {
    height: 60,
    width: 60,
    resizeMode: 'cover',
  },
  textContainer: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default TruckListItem;
