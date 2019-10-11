import React, {Component} from 'react';
import {ScrollView, View, Text, Image, StyleSheet} from 'react-native';
import Page from '../common/Page';

const noTruckImage = require('../../assets/mock/Trucks/noTruckImage.jpg');

class TruckItem extends Component {
  render() {
    const data = this.props.navigation.getParam('data');
    console.log('data', data);

    const source = (data && {uri: data.url}) || noTruckImage;
    return (
      <Page title={data.title} leftComponent="back">
        <ScrollView>
          <View style={styles.topContainer}>
            <Image source={source} style={styles.imageStyle} />
            <Text style={styles.description}>{data.description}</Text>
          </View>
        </ScrollView>
      </Page>
    );
  }
}
const styles = StyleSheet.create({
  topContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '5%',
  },
  imageStyle: {
    height: 200,
    width: 200,
  },
  description: {
    fontSize: 18,
    marginVertical: '5%',
  },
});

export default TruckItem;
