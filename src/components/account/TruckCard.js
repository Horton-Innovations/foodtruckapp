import React, {Component} from 'react';
import {ScrollView, View} from 'react-native';
import FavoriteTruck from './FavoriteTrucks';

class TruckCard extends Component {
  render() {
    return (
      <View>
        <FavoriteTruck navigation={this.props.navigation} />
      </View>
    );
  }
}

export default TruckCard;
