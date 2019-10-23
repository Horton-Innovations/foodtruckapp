import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import TruckList from './TruckList';

class TruckCard extends Component {
  render() {
    return (
      <View>
        <TruckList navigation={this.props.navigation} />
      </View>
    );
  }
}

export default TruckCard;
