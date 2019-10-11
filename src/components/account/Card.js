import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import FavoriteTruck from './FavoriteTrucks';

class Card extends Component {
  render() {
    return (
      <ScrollView>
        <FavoriteTruck navigation={this.props.navigation} />
      </ScrollView>
    );
  }
}

export default Card;
