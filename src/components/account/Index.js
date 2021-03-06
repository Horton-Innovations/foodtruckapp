import React from 'react';
import {Text, View, ScrollView, Image, StyleSheet} from 'react-native';
import Page from '../common/Page';
import Theme from '../../config/Theme';
import TruckCard from './TruckCard';
import TruckList from './TruckList';
import Data from '../../MockData';
import VendorTruckInfo from '../common/VendorTruckInfo';

const noImage = require('../../assets/NoImage.png');

const favTrucks = Data.Trucks.filter(truck => truck.favTruck === true);
const user = Data.Users[0];
const isVendor = user.vender;
const userAvatar = (user && {uri: user.url}) || noImage;

class ProfileScreen extends React.Component {
  render() {
    console.log('Data', Data);
    console.log('favTrucks', favTrucks);
    console.log('isVendor', isVendor);
    return (
      <Page title="Account">
        <ScrollView>
          {isVendor ? (
            <VendorTruckInfo />
          ) : (
            <View>
              <View style={styles.topStyle}>
                <Text style={styles.titleStyle}>{user.name}</Text>
                <Image source={userAvatar} style={styles.noImageStyle} />
              </View>
              <TruckList
                title={'Favorite Trucks'}
                navigation={this.props.navigation}
                data={favTrucks}
              />
            </View>
          )}
        </ScrollView>
      </Page>
    );
  }
}

const styles = StyleSheet.create({
  topStyle: {
    height: 225,
    backgroundColor: Theme.colors.darkBlue,
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
