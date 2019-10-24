import {Dimensions} from 'react-native';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const lightGray = '#a8a8a8';
const lightTurq = '#00e7b3';
const offBlack = '#111111';
const lightBlue = '#5ea4ff';
const darkBlue = '#4F6D7A';

export default {
  dimensions: {
    deviceWidth: deviceWidth,
    deviceHeight: deviceHeight,
  },
  colors: {
    white: '#fff',
    lightGray: lightGray,
    lightTurq: lightTurq,
    offBlack: offBlack,
    lightBlue: lightBlue,
    darkBlue: darkBlue,
  },
};
