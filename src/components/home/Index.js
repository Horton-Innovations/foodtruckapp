import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Page from '../common/Page';
import TruckList from '../account/TruckList';
import Data from '../../MockData';

class HomeScreen extends Component {
  state = {Loading: true};

  render() {
    return (
      <Page title="Food Truck">
        <View style={styles.container}>
          <TruckList
            title={'Trucks'}
            navigation={this.props.navigation}
            data={Data.Trucks}
          />
        </View>
      </Page>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4F6D7A',
    flex: 1,
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
  },
});

export default HomeScreen;
