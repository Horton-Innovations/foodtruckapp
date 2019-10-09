import React, {Component} from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';
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
