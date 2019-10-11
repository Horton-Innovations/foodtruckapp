import React from 'react';
import {Text, View, ScrollView, Image, StyleSheet} from 'react-native';
import Page from '../common/Page';
import Theme from '../../config/Theme';
import TruckCard from './TruckCard';
import FavoriteTruck from './FavoriteTrucks';

class ProfileScreen extends React.Component {
  render() {
    return (
      <Page title="Account">
        <ScrollView>
          <View style={styles.topStyle}>
            <Text style={styles.titleStyle}>User Name</Text>
            <Image
              source={require('../../assets/NoImage.png')}
              style={styles.noImageStyle}
            />
          </View>
          <FavoriteTruck navigation={this.props.navigation} />
        </ScrollView>
      </Page>
    );
  }
}

const styles = StyleSheet.create({
  topStyle: {
    height: 225,
    backgroundColor: Theme.colors.lightGray,
    alignItems: 'center',
  },
  titleStyle: {
    textAlign: 'center',
    marginTop: '10%',
    marginBottom: 20,
    fontSize: 24,
  },
  noImageStyle: {
    height: 120,
    width: 120,
    borderRadius: 120 / 2,
  },
});

export default ProfileScreen;
