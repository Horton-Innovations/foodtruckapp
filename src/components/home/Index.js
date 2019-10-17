import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Page from '../common/Page';

class HomeScreen extends Component {
  state = {Loading: true};

  render() {
    return (
      <Page title='Food Truck'>
        <View style={{backgroundColor: '#4F6D7A', flex: 1}}>
          {/* <Text>Food Truck</Text> */}
        </View>
      </Page>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 32,
    textAlign: 'center',
  },
});

export default HomeScreen;
