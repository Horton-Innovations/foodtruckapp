import React, {Component} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';

class HomeScreen extends Component {
  state = {Loading: true};

  render() {
    return (
      <SafeAreaView>
        <View>
          <Text style={styles.title}>Food Truck</Text>
        </View>
      </SafeAreaView>
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
