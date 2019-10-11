import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import FavoriteTruck from './FavoriteTrucks';

class Card extends Component {
  render() {
    return (
      <ScrollView>
        <FavoriteTruck />
      </ScrollView>
    );
  }
}

export default Card;
