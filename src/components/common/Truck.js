import React, {Component} from 'react';
import {Image, View, Text} from 'react-native';

const noTruckImage = require('../../assets/mock/Trucks/noTruckImage.jpg');

class Truck extends Component {
  render() {
    const source = (this.props.url && {uri: this.props.url}) || noTruckImage;
    return (
      <View style={{flexDirection: 'row', margin: 10}}>
        <Image
          source={source}
          style={{height: 60, width: 60, resizeMode: 'cover'}}
        />
        <View style={{marginLeft: 10, justifyContent: 'center'}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            {this.props.title}
          </Text>
          <Text>{this.props.description}</Text>
        </View>
      </View>
    );
  }
}

export default Truck;
