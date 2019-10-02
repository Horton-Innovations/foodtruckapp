import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from './components/home/Index';
import SettingsScreen from './components/profile/Index';
import MapScreen from './components/map/Index';

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen,
  Map: MapScreen,
});

export default createAppContainer(TabNavigator);
