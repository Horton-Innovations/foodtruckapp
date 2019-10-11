import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Page from '../common/Page';

class TruckItem extends Component {
  render() {
    const data = this.props.navigation.getParam('data');
    console.log('data', data);
    return (
      <Page title="Truck 1" leftComponent="back">
        <View>
          <Text>This is a single truck item</Text>
        </View>
      </Page>
    );
  }
}

export default TruckItem;
