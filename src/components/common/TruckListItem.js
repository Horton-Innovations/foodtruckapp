import React, {Component} from 'react';
import {Image, View, Text, StyleSheet} from 'react-native';

const noTruckImage = require('../../assets/mock/Trucks/noTruckImage.jpg');

class TruckListItem extends Component {
  render() {
    const source = (this.props.url && {uri: this.props.url}) || noTruckImage;
    return (
      <View style={styles.container}>
        <Image source={source} style={styles.imageStyle} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{this.props.title}</Text>
          <Text>{this.props.description}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
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
