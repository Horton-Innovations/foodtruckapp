import React, {Component} from 'react';
import {ScrollView, Text, StyleSheet} from 'react-native';

class Card extends Component {
  render() {
    return (
      <ScrollView>
        <Text style={styles.title}> Favorite Trucks</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 24,
    marginTop: '5%',
  },
});

export default Card;
