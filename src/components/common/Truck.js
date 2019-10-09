import React, {Component} from 'react';
import {Image, View, Text} from 'react-native';

class Truck extends Component {
  render() {
    return (
      <View style={{flexDirection: 'row'}}>
        <Image
          source={require('../../assets/mock/Trucks/blackTruck.jpg')}
          style={{height: 80, width: 80}}
        />
        <View style={{marginLeft: 20, justifyContent: 'center'}}>
          <Text style={{fontSize: 24, fontWeight: 'bold'}}>
            {this.props.title}
          </Text>
          <Text>{this.props.description}</Text>
        </View>
      </View>
    );
  }
}

export default Truck;
